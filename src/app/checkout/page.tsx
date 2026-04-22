'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function CheckoutPage() {
  const { totalPrice, clearCart } = useCart();
  const { t } = useTranslation();
  const router = useRouter();
  const [isOrdered, setIsOrdered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
    setTimeout(() => {
      clearCart();
      router.push('/store');
    }, 3000);
  };

  if (isOrdered) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background text-center p-4">
        <div className="animate-bounce mb-6">
          <div className="h-20 w-20 rounded-full bg-green-500 flex items-center justify-center mx-auto">
            <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-foreground">Order Successful!</h1>
        <p className="mt-4 text-muted-foreground">Thank you for your purchase. Redirecting you to the store...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">{t('checkout')}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t('name')}</label>
                  <input required className="w-full rounded-md border border-input bg-background px-3 py-2" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t('email')}</label>
                  <input type="email" required className="w-full rounded-md border border-input bg-background px-3 py-2" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Address</label>
                <input required className="w-full rounded-md border border-input bg-background px-3 py-2" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-medium">Card Number</label>
                  <input required placeholder="0000 0000 0000 0000" className="w-full rounded-md border border-input bg-background px-3 py-2" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">CVV</label>
                  <input required placeholder="123" className="w-full rounded-md border border-input bg-background px-3 py-2" />
                </div>
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-primary py-4 font-bold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Place Order (${totalPrice.toFixed(2)})
              </button>
            </form>
          </div>

          <div className="p-6 rounded-lg bg-card border border-border h-fit">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-muted-foreground">Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-muted-foreground">Shipping</span>
              <span className="text-green-500 font-medium">Free</span>
            </div>
            <div className="flex justify-between items-center pt-4 text-xl font-bold">
              <span>Total</span>
              <span className="text-primary">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
