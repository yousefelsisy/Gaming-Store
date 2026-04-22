'use client';

import React, { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function WelcomePage() {
  const { user, isAuthenticated } = useAuth();
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!user) return null;

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-8"
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
          {t('greeting', { name: user.name })}
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <button
            onClick={() => router.push('/store')}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full text-xl font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20"
          >
            {t('enter_store')}
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
