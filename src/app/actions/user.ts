'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createUser(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;

  if (!email) {
    return { error: 'Email is required' };
  }

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    revalidatePath('/'); // Revalidate any page that lists users
    return { user };
  } catch (error) {
    console.error('Failed to create user', error);
    return { error: 'Failed to create user' };
  }
}
