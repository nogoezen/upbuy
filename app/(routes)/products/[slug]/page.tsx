'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '@/lib/data/products';
import { useCart, CartItem } from '@/lib/store';
import { toast } from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function ProductPage() {
  const params = useParams();
  const cart = useCart();
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Product not found</h2>
          <p className="mt-4 text-gray-500">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

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

  const nextImage = () => {
    setSelectedImage((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setSelectedImage((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Image gallery */}
          <div className="relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                className="h-full w-full object-cover object-center"
                width={600}
                height={600}
                priority
              />
              {product.images.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2"
                    onClick={previousImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}
            </div>
            <div className="mt-4 flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={image}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    "relative aspect-1 w-20 overflow-hidden rounded-lg",
                    selectedImage === index && "ring-2 ring-primary"
                  )}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="h-full w-full object-cover object-center"
                    width={80}
                    height={80}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="mt-10 lg:mt-0 lg:pl-8">
            <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>

            <div className="mt-4">
              <div className="flex items-center gap-4">
                <p className="text-3xl font-bold">${product.price.toFixed(2)}</p>
                {product.originalPrice && (
                  <p className="text-xl text-muted-foreground line-through">
                    ${product.originalPrice.toFixed(2)}
                  </p>
                )}
              </div>
              {product.originalPrice && (
                <Badge variant="destructive" className="mt-2">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </Badge>
              )}
            </div>

            <div className="mt-4 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        'h-5 w-5',
                        i < Math.floor(product.rating)
                          ? 'fill-primary text-primary'
                          : 'fill-muted text-muted'
                      )}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  {product.reviewCount} reviews
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Badge variant="outline">{product.brand}</Badge>
                <Badge variant="outline">{product.category}</Badge>
                {product.isNew && <Badge>New</Badge>}
              </div>

              <p className="text-base text-muted-foreground">{product.description}</p>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Features:</h3>
                <ul className="list-disc space-y-2 pl-5 text-sm">
                  {product.features.map((feature) => (
                    <li key={feature} className="text-muted-foreground">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                className="w-full"
                size="lg"
                onClick={addToCart}
                disabled={product.stock === 0}
              >
                {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
              </Button>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold">Specifications</h2>
          <Card className="mt-4">
            <CardContent className="grid gap-4 p-6 sm:grid-cols-2">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between gap-4 border-b py-2">
                  <dt className="font-medium">{key}</dt>
                  <dd className="text-muted-foreground">{value}</dd>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Reviews */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold">Customer Reviews</h2>
          <div className="mt-4 space-y-4">
            {product.reviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{review.userName}</span>
                      {review.verified && (
                        <Badge variant="secondary">Verified Purchase</Badge>
                      )}
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            'h-4 w-4',
                            i < review.rating
                              ? 'fill-primary text-primary'
                              : 'fill-muted text-muted'
                          )}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {review.comment}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 