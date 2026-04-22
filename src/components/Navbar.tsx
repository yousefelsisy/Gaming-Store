'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'next-themes';
import { ShoppingCart, User, Sun, Moon, Languages, LogOut, Gamepad2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const { user, logout } = useAuth();
  const { itemCount } = useCart();
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/store" className="flex items-center gap-2">
            <Gamepad2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold tracking-tight hidden md:inline-block">
              GAMER STORE
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="rounded-md p-2 hover:bg-accent"
            title="Toggle Language"
          >
            <Languages className="h-5 w-5" />
          </button>

          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-md p-2 hover:bg-accent"
            title="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <Link href="/cart" className="relative rounded-md p-2 hover:bg-accent">
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                {itemCount}
              </span>
            )}
          </Link>

          {user ? (
            <div className="flex items-center gap-3 border-l pl-4 border-border">
              <span className="hidden text-sm font-medium lg:inline-block">
                {user.name}
              </span>
              <button
                onClick={logout}
                className="rounded-md p-2 hover:bg-accent text-destructive"
                title={t('logout')}
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              {t('login')}
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
