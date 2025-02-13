import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useProducts() {
  const { data, error, isLoading } = useSWR('/api/products', fetcher);

  return {
    products: data,
    isLoading,
    isError: error,
  };
} 