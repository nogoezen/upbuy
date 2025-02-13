'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useProducts } from '@/hooks/useProducts';
import ProductCard from '@/components/product/ProductCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Timer, Percent, Tag, ArrowDownUp } from 'lucide-react';
import { Product } from '@/lib/types';

export default function DealsPage() {
  const { products, isLoading } = useProducts();
  const [sortBy, setSortBy] = useState<string>('discount');
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  // Timer countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset to 24 hours when timer reaches 0
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Filter products with discounts
  const dealsProducts = products?.filter((product: Product) => 
    product.originalPrice && product.originalPrice > product.price
  );

  // Sort products based on selected criteria
  const sortedProducts = dealsProducts?.sort((a: Product, b: Product) => {
    const getDiscountPercentage = (product: Product) => {
      if (!product.originalPrice) return 0;
      return ((product.originalPrice - product.price) / product.originalPrice) * 100;
    };

    switch (sortBy) {
      case 'discount':
        return getDiscountPercentage(b) - getDiscountPercentage(a);
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'savings':
        return (
          (b.originalPrice || 0) - b.price - ((a.originalPrice || 0) - a.price)
        );
      default:
        return 0;
    }
  });

  if (isLoading) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[...Array(8)].map((_, index) => (
            <Card key={index} className="animate-pulse">
              <CardContent className="p-6">
                <div className="h-40 rounded-lg bg-muted" />
                <div className="mt-4 space-y-2">
                  <div className="h-4 w-3/4 rounded bg-muted" />
                  <div className="h-4 w-1/2 rounded bg-muted" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header with Timer */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Today&apos;s Hot Deals</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Grab these amazing deals before they&apos;re gone!
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Timer className="h-6 w-6 text-primary" />
            <div className="flex items-center gap-2 text-lg font-semibold">
              <span>{String(timeLeft.hours).padStart(2, '0')}</span>
              <span>:</span>
              <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span>:</span>
              <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
            </div>
          </div>
        </div>

        {/* Featured Deal */}
        {sortedProducts && sortedProducts[0] && (
          <div className="mt-12">
            <Card className="overflow-hidden">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="relative aspect-video md:aspect-auto">
                  <Image
                    src={sortedProducts[0].mainImage}
                    alt={sortedProducts[0].name}
                    className="object-cover"
                    fill
                    priority
                  />
                  <div className="absolute left-4 top-4">
                    <Badge className="bg-primary px-2 py-1 text-lg">
                      {Math.round(
                        ((sortedProducts[0].originalPrice! - sortedProducts[0].price) /
                          sortedProducts[0].originalPrice!) *
                          100
                      )}% OFF
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold">{sortedProducts[0].name}</h2>
                  <div className="mt-4 flex items-baseline gap-4">
                    <span className="text-3xl font-bold text-primary">
                      ${sortedProducts[0].price.toFixed(2)}
                    </span>
                    <span className="text-xl text-muted-foreground line-through">
                      ${sortedProducts[0].originalPrice?.toFixed(2)}
                    </span>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    {sortedProducts[0].description}
                  </p>
                  <div className="mt-6">
                    <Button size="lg" className="w-full">Shop Now</Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Sorting and Stats */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Percent className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">
                Up to {sortedProducts?.[0] ? Math.round(
                  ((sortedProducts[0].originalPrice! - sortedProducts[0].price) /
                    sortedProducts[0].originalPrice!) *
                    100
                ) : 0}% Off
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">
                {sortedProducts?.length || 0} Deals Available
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ArrowDownUp className="h-4 w-4 text-muted-foreground" />
            <Select
              value={sortBy}
              onValueChange={setSortBy}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="discount">Biggest Discount</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="savings">Biggest Savings</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sortedProducts?.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {(!sortedProducts || sortedProducts.length === 0) && (
          <div className="mt-12 text-center">
            <h2 className="text-lg font-semibold">No Deals Available</h2>
            <p className="mt-4 text-gray-500">
              Check back later for new deals and discounts!
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 