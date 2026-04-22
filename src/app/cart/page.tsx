'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, itemCount } = useCart();
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">{t('cart')}</h1>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground mb-6">{t('empty_cart')}</p>
            <Link
              href="/store"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              {t('enter_store')}
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-24 object-cover rounded-md"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate">{item.name}</h3>
                    <p className="text-primary font-bold">${item.price}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-input rounded-md overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-accent transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-3 py-1 text-sm font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-accent transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-destructive hover:bg-destructive/10 rounded-md transition-colors"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-border bg-card">
                <h2 className="text-xl font-bold mb-4">{t('total')}</h2>
                <div className="space-y-2 border-b border-border pb-4 mb-4">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{t('items')} ({itemCount})</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Shipping</span>
                    <span className="text-green-500">Free</span>
                  </div>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>{t('total')}</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <Link
                  href="/checkout"
                  className="w-full mt-6 flex justify-center items-center rounded-md bg-primary py-3 font-bold text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  {t('checkout')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
