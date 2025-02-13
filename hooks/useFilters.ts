import useSWR from 'swr';
import { ProductBrand, ProductCategory } from '@/lib/types';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface Category {
  name: ProductCategory;
  count: number;
  minPrice: number;
  maxPrice: number;
}

interface Brand {
  name: ProductBrand;
  count: number;
  categories: ProductCategory[];
}

export function useFilters() {
  const { data: categories, error: categoriesError } = useSWR<Category[]>(
    '/api/categories',
    fetcher
  );

  const { data: brands, error: brandsError } = useSWR<Brand[]>(
    '/api/brands',
    fetcher
  );

  return {
    categories,
    brands,
    isLoading: !categories || !brands,
    isError: categoriesError || brandsError,
  };
} 