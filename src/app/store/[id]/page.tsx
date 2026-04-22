'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { PRODUCTS } from '@/lib/data';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ShoppingCart, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { t } = useTranslation();
  const { addToCart } = useCart();

  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <button onClick={() => router.back()} className="mt-4 text-primary">Go back</button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => router.back()}
        className="mb-6 flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to Store
      </button>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-8">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-primary">
              {product.category}
            </span>
            <h1 className="mt-2 text-4xl font-bold text-foreground">{product.name}</h1>
            <p className="mt-4 text-3xl font-bold text-primary">${product.price}</p>
          </div>

          <p className="text-lg text-muted-foreground">
            {product.description}
          </p>

          <div className="space-y-4 rounded-lg border border-border p-6 bg-card">
            <h3 className="font-semibold">{t('categories')}</h3>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {product.specs.map((spec, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {spec}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => product && addToCart(product)}
              className="flex flex-1 items-center justify-center gap-2 rounded-md bg-primary px-8 py-3 font-bold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              {t('add_to_cart')}
            </button>
            <button className="flex flex-1 items-center justify-center rounded-md border border-input bg-background px-8 py-3 font-bold text-foreground hover:bg-accent transition-colors">
              {t('buy_now')}
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 border-t border-border pt-8">
            <div className="flex flex-col items-center gap-2 text-center">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <span className="text-xs font-medium">Authentic</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <Truck className="h-6 w-6 text-primary" />
              <span className="text-xs font-medium">Fast Shipping</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <RotateCcw className="h-6 w-6 text-primary" />
              <span className="text-xs font-medium">Easy Returns</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
