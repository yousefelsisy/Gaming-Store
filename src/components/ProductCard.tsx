'use client';

import React from 'react';
import Link from 'next/link';
import { Product } from '@/lib/data';
import { useTranslation } from 'react-i18next';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { t } = useTranslation();
  const { addToCart } = useCart();

  return (
    <div className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-xl hover:border-primary/50">
      <Link href={`/store/${product.id}`} className="block relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold border border-border">
          {product.category}
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/store/${product.id}`}>
          <h3 className="text-lg font-semibold text-foreground hover:text-primary transition-colors truncate">
            {product.name}
          </h3>
        </Link>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-primary">${product.price}</span>
          <button
            onClick={() => addToCart(product)}
            className="rounded-full bg-primary/10 p-2 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
