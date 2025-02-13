import { NextResponse } from 'next/server';
import { products } from '@/lib/data/products';
import { ProductCategory } from '@/lib/types';

export async function GET() {
  const categories = products.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = {
        name: category,
        count: 0,
        minPrice: Infinity,
        maxPrice: -Infinity,
      };
    }
    acc[category].count += 1;
    acc[category].minPrice = Math.min(acc[category].minPrice, product.price);
    acc[category].maxPrice = Math.max(acc[category].maxPrice, product.price);
    return acc;
  }, {} as Record<ProductCategory, { name: string; count: number; minPrice: number; maxPrice: number }>);

  const categoriesArray = Object.values(categories).map((category) => ({
    ...category,
    minPrice: Math.floor(category.minPrice),
    maxPrice: Math.ceil(category.maxPrice),
  }));

  return NextResponse.json(categoriesArray);
} 