'use client';

import { NextUIProvider } from '@nextui-org/system';
import { SessionProvider } from 'next-auth/react';

// NextUI Provider
export default function Provider({ children }) {
  return (
    <SessionProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </SessionProvider>
  );
}
