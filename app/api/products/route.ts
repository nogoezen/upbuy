import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/lib/data/products';
import { Product } from '@/lib/types';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const category = searchParams.get('category');
  const brand = searchParams.get('brand');
  const search = searchParams.get('search');
  const sort = searchParams.get('sort');
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');

  let filteredProducts = [...products];

  // Apply filters
  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (brand) {
    filteredProducts = filteredProducts.filter(
      (product) => product.brand.toLowerCase() === brand.toLowerCase()
    );
  }

  if (search) {
    const searchLower = search.toLowerCase();
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.tags.some((tag) => tag.toLowerCase().includes(searchLower))
    );
  }

  if (minPrice) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= Number(minPrice)
    );
  }

  if (maxPrice) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price <= Number(maxPrice)
    );
  }

  // Apply sorting
  if (sort) {
    switch (sort) {
      case 'price-asc':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'rating-desc':
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filteredProducts.sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      default:
        break;
    }
  }

  return NextResponse.json(filteredProducts);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newProduct: Product = {
      ...body,
      id: (products.length + 1).toString(),
      slug: body.name.toLowerCase().replace(/\s+/g, '-'),
      reviews: [],
      rating: 0,
      reviewCount: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    products.push(newProduct);
    
    return NextResponse.json(newProduct, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 400 }
    );
  }
} 