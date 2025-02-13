'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart, CartItem } from '@/lib/store';
import { Star } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const cart = useCart();

  const addToCart = () => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.mainImage,
      quantity: 1,
    };
    
    cart.addItem(cartItem);
    toast.success('Added to cart!');
  };

  return (
    <Card className="group relative overflow-hidden">
      <CardHeader className="p-0">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden">
          <Image
            src={product.mainImage}
            alt={product.name}
            className="h-full w-full object-cover object-center transition-transform group-hover:scale-105"
            width={300}
            height={300}
          />
          <div className="absolute right-2 top-2 flex flex-col gap-2">
            {product.isNew && (
              <Badge variant="default">New</Badge>
            )}
            {product.originalPrice && (
              <Badge variant="destructive">
                Save ${(product.originalPrice - product.price).toFixed(2)}
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 p-4">
        <div className="flex justify-between">
          <Link
            href={`/products/${product.slug}`}
            className="group-hover:text-primary"
          >
            <h3 className="font-medium line-clamp-1">{product.name}</h3>
          </Link>
          <div className="text-right">
            <p className="font-medium">
              ${product.price.toFixed(2)}
            </p>
            {product.originalPrice && (
              <p className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                'h-4 w-4',
                i < Math.floor(product.rating)
                  ? 'fill-primary text-primary'
                  : 'fill-muted text-muted'
              )}
            />
          ))}
          <span className="ml-2 text-sm text-muted-foreground">
            ({product.reviewCount})
          </span>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <Badge variant="outline" className="pointer-events-none">
            {product.brand}
          </Badge>
          <Badge
            variant={product.stock > 0 ? 'secondary' : 'destructive'}
            className="pointer-events-none"
          >
            {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
          </Badge>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          onClick={addToCart}
          disabled={product.stock === 0}
          variant={product.stock > 0 ? 'default' : 'outline'}
        >
          {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </CardFooter>
    </Card>
  );
} 