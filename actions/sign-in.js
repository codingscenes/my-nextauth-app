'use server';

import { signIn as logIn } from '@/auth';

export async function signIn() {
  return await logIn('google');
}
