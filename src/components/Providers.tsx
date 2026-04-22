'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import '../i18n/config';
import { useTranslation } from 'react-i18next';
import { AuthProvider } from '@/context/AuthContext';
import { CartProvider } from '@/context/CartContext';

export function Providers({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();

  React.useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem>
      <AuthProvider>
        <CartProvider>
          {children}
        </CartProvider>
      </AuthProvider>
    </NextThemesProvider>
  );
}
