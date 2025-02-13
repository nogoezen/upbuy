import { NextResponse } from 'next/server';
import { products } from '@/lib/data/products';
import { ProductBrand } from '@/lib/types';

export async function GET() {
  const brands = products.reduce((acc, product) => {
    const brand = product.brand;
    if (!acc[brand]) {
      acc[brand] = {
        name: brand,
        count: 0,
        categories: new Set<string>(),
      };
    }
    acc[brand].count += 1;
    acc[brand].categories.add(product.category);
    return acc;
  }, {} as Record<ProductBrand, { name: string; count: number; categories: Set<string> }>);

  const brandsArray = Object.values(brands).map((brand) => ({
    ...brand,
    categories: Array.from(brand.categories),
  }));

  return NextResponse.json(brandsArray);
} 