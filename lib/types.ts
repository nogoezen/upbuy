export type ProductCategory = 
  | 'Laptops'
  | 'Smartphones'
  | 'Tablets'
  | 'Headphones'
  | 'Smartwatches'
  | 'Gaming'
  | 'Cameras'
  | 'Accessories';

export type ProductBrand = 
  | 'Apple'
  | 'Samsung'
  | 'Sony'
  | 'Dell'
  | 'HP'
  | 'Lenovo'
  | 'ASUS'
  | 'Logitech'
  | 'Microsoft'
  | 'Razer';

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  brand: ProductBrand;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  images: string[];
  mainImage: string;
  stock: number;
  reviews: Review[];
  rating: number;
  reviewCount: number;
  tags: string[];
  isNew: boolean;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
} 