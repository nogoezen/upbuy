'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useFilters } from '@/hooks/useFilters';
import { useProducts } from '@/hooks/useProducts';
import ProductCard from '@/components/product/ProductCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Search, SlidersHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Product } from '@/lib/types';

export default function CategoriesPage() {
  const { categories, isLoading: isCategoriesLoading } = useFilters();
  const { products, isLoading: isProductsLoading } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<{ min: number; max: number } | null>(null);

  const filteredProducts = products?.filter((product: Product) => {
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = priceRange
      ? product.price >= priceRange.min && product.price <= priceRange.max
      : true;
    return matchesCategory && matchesSearch && matchesPrice;
  });

  if (isCategoriesLoading || isProductsLoading) {
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
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Product Categories</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Browse our wide selection of products by category
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative flex-1 md:max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Input
                type="number"
                placeholder="Min Price"
                className="w-24"
                onChange={(e) => setPriceRange(prev => ({
                  min: Number(e.target.value),
                  max: prev?.max || Infinity
                }))}
              />
              <span>-</span>
              <Input
                type="number"
                placeholder="Max Price"
                className="w-24"
                onChange={(e) => setPriceRange(prev => ({
                  min: prev?.min || 0,
                  max: Number(e.target.value)
                }))}
              />
            </div>
            <Button variant="outline" size="icon">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Category Cards */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories?.map((category) => (
            <Card
              key={category.name}
              className={cn(
                'cursor-pointer transition-colors hover:border-primary',
                selectedCategory === category.name && 'border-primary bg-primary/5'
              )}
              onClick={() => setSelectedCategory(
                selectedCategory === category.name ? null : category.name
              )}
            >
              <CardHeader>
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <Image
                    src={`https://images.pexels.com/photos/${
                      category.name === 'Laptops' ? '18105/pexels-photo-18105.jpeg' :
                      category.name === 'Smartphones' ? '699122/pexels-photo-699122.jpeg' :
                      category.name === 'Tablets' ? '1334597/pexels-photo-1334597.jpeg' :
                      category.name === 'Headphones' ? '3394650/pexels-photo-3394650.jpeg' :
                      category.name === 'Smartwatches' ? '437037/pexels-photo-437037.jpeg' :
                      category.name === 'Gaming' ? '442576/pexels-photo-442576.jpeg' :
                      category.name === 'Cameras' ? '225157/pexels-photo-225157.jpeg' :
                      '356056/pexels-photo-356056.jpeg'
                    }`}
                    alt={category.name}
                    className="object-cover"
                    fill
                  />
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <h3 className="font-semibold">{category.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {category.count} Products
                </p>
                <div className="mt-2 text-sm text-muted-foreground">
                  ${category.minPrice.toFixed(2)} - ${category.maxPrice.toFixed(2)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Products Grid */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold">
            {selectedCategory ? `${selectedCategory} Products` : 'All Products'}
          </h2>
          {filteredProducts?.length === 0 ? (
            <div className="mt-8 text-center">
              <p className="text-lg text-muted-foreground">No products found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchQuery('');
                  setPriceRange(null);
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filteredProducts?.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 