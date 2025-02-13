import { Product, Review } from '../types';

const generateReviews = (count: number): Review[] => {
  const reviews: Review[] = [];
  const comments = [
    "Excellent product, exceeded my expectations!",
    "Great value for money, highly recommend.",
    "Good product but could be better.",
    "Amazing build quality and performance.",
    "Decent product for the price point.",
    "Outstanding features and design.",
    "Not bad, but there's room for improvement.",
    "Perfect for my needs, very satisfied.",
    "Solid performance and reliability.",
    "Worth every penny, absolutely love it!"
  ];

  for (let i = 0; i < count; i++) {
    const rating = Math.floor(Math.random() * 3) + 3; // Generates 3, 4, or 5
    reviews.push({
      id: `review-${Math.random().toString(36).substr(2, 9)}`,
      userId: `user-${Math.random().toString(36).substr(2, 9)}`,
      userName: `Tech Enthusiast ${i + 1}`,
      rating,
      comment: comments[Math.floor(Math.random() * comments.length)],
      date: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
      verified: Math.random() > 0.3,
    });
  }
  return reviews;
};

export const products: Product[] = [
  {
    id: '1',
    name: 'MacBook Pro M2',
    slug: 'macbook-pro-m2',
    brand: 'Apple',
    category: 'Laptops',
    price: 1499.99,
    originalPrice: 1599.99,
    description: 'The most powerful MacBook Pro ever. Supercharged by M2 Pro or M2 Max, MacBook Pro delivers exceptional performance and amazing battery life.',
    features: [
      'Apple M2 Pro chip',
      'Up to 18 hours battery life',
      'Liquid Retina XDR display',
      'Three Thunderbolt 4 ports',
      'Magic Keyboard with Touch ID'
    ],
    specifications: {
      'Processor': 'Apple M2 Pro',
      'Memory': '16GB unified memory',
      'Storage': '512GB SSD',
      'Display': '14-inch Liquid Retina XDR display',
      'Battery': '70-watt-hour lithium-polymer battery'
    },
    mainImage: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg',
    images: [
      'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg',
      'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg',
      'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg'
    ],
    stock: 50,
    reviews: generateReviews(8),
    rating: 4.8,
    reviewCount: 8,
    tags: ['laptop', 'apple', 'macbook', 'pro', 'm2'],
    isNew: true,
    isFeatured: true,
    createdAt: '2024-02-01T00:00:00.000Z',
    updatedAt: '2024-02-01T00:00:00.000Z'
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    slug: 'samsung-galaxy-s24-ultra',
    brand: 'Samsung',
    category: 'Smartphones',
    price: 1199.99,
    description: 'Experience the future of mobile technology with the Galaxy S24 Ultra. Featuring an advanced AI camera system and the most powerful Galaxy processor yet.',
    features: [
      '200MP main camera',
      '6.8" Dynamic AMOLED 2X display',
      'S Pen included',
      '5000mAh battery',
      'AI-powered features'
    ],
    specifications: {
      'Display': '6.8" QHD+ Dynamic AMOLED 2X',
      'Processor': 'Snapdragon 8 Gen 3',
      'RAM': '12GB',
      'Storage': '256GB',
      'Battery': '5000mAh'
    },
    mainImage: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg',
    images: [
      'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg',
      'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg',
      'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg'
    ],
    stock: 75,
    reviews: generateReviews(12),
    rating: 4.9,
    reviewCount: 12,
    tags: ['smartphone', 'samsung', 'galaxy', 'android', '5g'],
    isNew: true,
    isFeatured: true,
    createdAt: '2024-02-01T00:00:00.000Z',
    updatedAt: '2024-02-01T00:00:00.000Z'
  },
  {
    id: '3',
    name: 'Sony WH-1000XM5',
    slug: 'sony-wh-1000xm5',
    brand: 'Sony',
    category: 'Headphones',
    price: 399.99,
    originalPrice: 449.99,
    description: 'Industry-leading noise cancellation with exceptional sound quality. The WH-1000XM5 features advanced audio processing and up to 30 hours of battery life.',
    features: [
      'Industry-leading noise cancellation',
      '30-hour battery life',
      'Multipoint connection',
      'Touch controls',
      'Speak-to-chat technology'
    ],
    specifications: {
      'Driver Unit': '30mm',
      'Frequency Response': '4Hz-40,000Hz',
      'Battery Life': 'Up to 30 hours',
      'Charging Time': '3.5 hours',
      'Weight': '250g'
    },
    mainImage: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg',
    images: [
      'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg',
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg'
    ],
    stock: 100,
    reviews: generateReviews(15),
    rating: 4.7,
    reviewCount: 15,
    tags: ['headphones', 'sony', 'wireless', 'noise-cancelling', 'audio'],
    isNew: false,
    isFeatured: true,
    createdAt: '2024-01-15T00:00:00.000Z',
    updatedAt: '2024-01-15T00:00:00.000Z'
  },
  {
    id: '4',
    name: 'ASUS ROG Strix G15',
    slug: 'asus-rog-strix-g15',
    brand: 'ASUS',
    category: 'Gaming',
    price: 1799.99,
    description: 'Ultimate gaming laptop with RTX 4070, AMD Ryzen 9 processor, and a 240Hz display for competitive gaming advantage.',
    features: [
      'NVIDIA RTX 4070 8GB',
      'AMD Ryzen 9 7945HX',
      '240Hz QHD display',
      'RGB keyboard',
      'Advanced cooling system'
    ],
    specifications: {
      'GPU': 'NVIDIA RTX 4070 8GB',
      'CPU': 'AMD Ryzen 9 7945HX',
      'RAM': '32GB DDR5',
      'Storage': '1TB NVMe SSD',
      'Display': '15.6" QHD 240Hz'
    },
    mainImage: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg',
    images: [
      'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg',
      'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
      'https://images.pexels.com/photos/776092/pexels-photo-776092.jpeg'
    ],
    stock: 30,
    reviews: generateReviews(10),
    rating: 4.6,
    reviewCount: 10,
    tags: ['gaming', 'laptop', 'asus', 'rog', 'rtx'],
    isNew: true,
    isFeatured: true,
    createdAt: '2024-01-20T00:00:00.000Z',
    updatedAt: '2024-01-20T00:00:00.000Z'
  },
  {
    id: '5',
    name: 'iPad Pro 12.9"',
    slug: 'ipad-pro-12-9',
    brand: 'Apple',
    category: 'Tablets',
    price: 1099.99,
    description: 'The ultimate iPad experience with the M2 chip, Liquid Retina XDR display, and pro cameras with LiDAR Scanner.',
    features: [
      'M2 chip',
      '12.9-inch Liquid Retina XDR display',
      'ProMotion technology',
      'Face ID',
      'Apple Pencil (2nd generation) support'
    ],
    specifications: {
      'Chip': 'Apple M2',
      'Display': '12.9-inch Liquid Retina XDR',
      'Storage': '256GB',
      'Camera': '12MP Wide + 10MP Ultra Wide',
      'Battery': '10 hours'
    },
    mainImage: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg',
    images: [
      'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg',
      'https://images.pexels.com/photos/1334598/pexels-photo-1334598.jpeg',
      'https://images.pexels.com/photos/1334599/pexels-photo-1334599.jpeg'
    ],
    stock: 45,
    reviews: generateReviews(9),
    rating: 4.8,
    reviewCount: 9,
    tags: ['tablet', 'apple', 'ipad', 'pro', 'm2'],
    isNew: true,
    isFeatured: true,
    createdAt: '2024-01-25T00:00:00.000Z',
    updatedAt: '2024-01-25T00:00:00.000Z'
  },
  {
    id: '6',
    name: 'Logitech MX Master 3S',
    slug: 'logitech-mx-master-3s',
    brand: 'Logitech',
    category: 'Accessories',
    price: 99.99,
    originalPrice: 119.99,
    description: 'Advanced wireless mouse with ultra-fast scrolling, ergonomic design, and precise tracking on any surface.',
    features: [
      'MagSpeed electromagnetic scrolling',
      '8,000 DPI tracking',
      'Quiet clicks',
      'USB-C quick charging',
      'Multi-device connectivity'
    ],
    specifications: {
      'Sensor': '8,000 DPI Darkfield',
      'Battery Life': 'Up to 70 days',
      'Buttons': '7',
      'Wireless': 'Bluetooth and USB receiver',
      'Weight': '141g'
    },
    mainImage: 'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg',
    images: [
      'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg',
      'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg',
      'https://images.pexels.com/photos/2115258/pexels-photo-2115258.jpeg'
    ],
    stock: 150,
    reviews: generateReviews(20),
    rating: 4.7,
    reviewCount: 20,
    tags: ['mouse', 'logitech', 'wireless', 'ergonomic', 'accessories'],
    isNew: false,
    isFeatured: false,
    createdAt: '2024-01-10T00:00:00.000Z',
    updatedAt: '2024-01-10T00:00:00.000Z'
  },
  {
    id: '7',
    name: 'Samsung Odyssey G9',
    slug: 'samsung-odyssey-g9',
    brand: 'Samsung',
    category: 'Gaming',
    price: 1299.99,
    originalPrice: 1499.99,
    description: 'Massive 49-inch curved gaming monitor with dual QHD resolution, 240Hz refresh rate, and 1ms response time.',
    features: [
      '49" Super Ultra-Wide display',
      '240Hz refresh rate',
      '1ms response time',
      'QLED technology',
      'G-Sync and FreeSync Premium Pro'
    ],
    specifications: {
      'Resolution': '5120 x 1440',
      'Panel Type': 'VA QLED',
      'HDR': 'HDR1000',
      'Curvature': '1000R',
      'Ports': '2x DisplayPort 1.4, 1x HDMI 2.0'
    },
    mainImage: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg',
    images: [
      'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg',
      'https://images.pexels.com/photos/1714207/pexels-photo-1714207.jpeg',
      'https://images.pexels.com/photos/1714209/pexels-photo-1714209.jpeg'
    ],
    stock: 20,
    reviews: generateReviews(15),
    rating: 4.9,
    reviewCount: 15,
    tags: ['monitor', 'samsung', 'gaming', 'ultrawide', 'curved'],
    isNew: true,
    isFeatured: true,
    createdAt: '2024-02-05T00:00:00.000Z',
    updatedAt: '2024-02-05T00:00:00.000Z'
  },
  {
    id: '8',
    name: 'Sony Alpha A7 IV',
    slug: 'sony-alpha-a7-iv',
    brand: 'Sony',
    category: 'Cameras',
    price: 2499.99,
    description: 'Professional full-frame mirrorless camera with advanced autofocus and 4K 60p video recording capabilities.',
    features: [
      '33MP full-frame sensor',
      'Real-time Eye AF',
      '4K 60p video',
      '10fps continuous shooting',
      '5-axis image stabilization'
    ],
    specifications: {
      'Sensor': '33MP full-frame CMOS',
      'ISO Range': '100-51,200',
      'AF Points': '759 phase-detection',
      'Video': '4K 60p 10-bit 4:2:2',
      'Battery Life': '610 shots'
    },
    mainImage: 'https://images.pexels.com/photos/225157/pexels-photo-225157.jpeg',
    images: [
      'https://images.pexels.com/photos/225157/pexels-photo-225157.jpeg',
      'https://images.pexels.com/photos/225158/pexels-photo-225158.jpeg',
      'https://images.pexels.com/photos/225159/pexels-photo-225159.jpeg'
    ],
    stock: 35,
    reviews: generateReviews(18),
    rating: 4.8,
    reviewCount: 18,
    tags: ['camera', 'sony', 'mirrorless', 'full-frame', 'professional'],
    isNew: true,
    isFeatured: true,
    createdAt: '2024-02-10T00:00:00.000Z',
    updatedAt: '2024-02-10T00:00:00.000Z'
  },
  {
    id: '9',
    name: 'Apple Watch Series 9',
    slug: 'apple-watch-series-9',
    brand: 'Apple',
    category: 'Smartwatches',
    price: 399.99,
    originalPrice: 429.99,
    description: 'The most powerful Apple Watch yet with new S9 chip, brighter display, and advanced health features.',
    features: [
      'Always-On Retina display',
      'Blood oxygen monitoring',
      'ECG app',
      'Fall detection',
      'Water resistant to 50m'
    ],
    specifications: {
      'Chip': 'S9 SiP',
      'Display': 'Always-On Retina LTPO OLED',
      'Size': '41mm or 45mm',
      'Storage': '32GB',
      'Battery': 'Up to 18 hours'
    },
    mainImage: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
      'https://images.pexels.com/photos/437038/pexels-photo-437038.jpeg',
      'https://images.pexels.com/photos/437039/pexels-photo-437039.jpeg'
    ],
    stock: 85,
    reviews: generateReviews(25),
    rating: 4.7,
    reviewCount: 25,
    tags: ['smartwatch', 'apple', 'watch', 'fitness', 'health'],
    isNew: true,
    isFeatured: true,
    createdAt: '2024-02-15T00:00:00.000Z',
    updatedAt: '2024-02-15T00:00:00.000Z'
  },
  {
    id: '10',
    name: 'Microsoft Surface Laptop Studio',
    slug: 'microsoft-surface-laptop-studio',
    brand: 'Microsoft',
    category: 'Laptops',
    price: 1599.99,
    originalPrice: 1799.99,
    description: 'Versatile laptop with innovative design, powerful performance, and creative tools for professionals.',
    features: [
      'Unique hinge design',
      '14.4" PixelSense Flow display',
      'NVIDIA RTX graphics',
      'Surface Pen support',
      'Thunderbolt 4 ports'
    ],
    specifications: {
      'Processor': 'Intel Core i7-11370H',
      'Graphics': 'NVIDIA RTX 3050 Ti',
      'RAM': '32GB',
      'Storage': '1TB SSD',
      'Display': '14.4" 120Hz touch'
    },
    mainImage: 'https://images.pexels.com/photos/18105/pexels-photo.jpg',
    images: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg',
      'https://images.pexels.com/photos/18106/pexels-photo.jpg',
      'https://images.pexels.com/photos/18107/pexels-photo.jpg'
    ],
    stock: 40,
    reviews: generateReviews(16),
    rating: 4.6,
    reviewCount: 16,
    tags: ['laptop', 'microsoft', 'surface', 'creative', 'professional'],
    isNew: true,
    isFeatured: true,
    createdAt: '2024-02-20T00:00:00.000Z',
    updatedAt: '2024-02-20T00:00:00.000Z'
  },
  {
    id: '11',
    name: 'Razer Huntsman V2',
    slug: 'razer-huntsman-v2',
    brand: 'Razer',
    category: 'Gaming',
    price: 199.99,
    originalPrice: 249.99,
    description: 'Premium optical gaming keyboard with analog switches, doubleshot PBT keycaps, and advanced RGB lighting.',
    features: [
      'Razer Analog Optical Switches',
      'Doubleshot PBT keycaps',
      'Multi-function digital dial',
      'Hybrid onboard storage',
      'Ergonomic wrist rest'
    ],
    specifications: {
      'Switch Type': 'Razer Analog Optical',
      'Lighting': 'Razer Chroma RGB',
      'Polling Rate': '8000Hz',
      'Keycaps': 'Doubleshot PBT',
      'Connection': 'USB-C'
    },
    mainImage: 'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg',
    images: [
      'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg',
      'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg',
      'https://images.pexels.com/photos/2115258/pexels-photo-2115258.jpeg'
    ],
    stock: 60,
    reviews: generateReviews(22),
    rating: 4.7,
    reviewCount: 22,
    tags: ['keyboard', 'gaming', 'razer', 'mechanical', 'rgb'],
    isNew: true,
    isFeatured: false,
    createdAt: '2024-02-22T00:00:00.000Z',
    updatedAt: '2024-02-22T00:00:00.000Z'
  },
  {
    id: '12',
    name: 'Samsung QN90C Neo QLED 4K',
    slug: 'samsung-qn90c-neo-qled-4k',
    brand: 'Samsung',
    category: 'Accessories',
    price: 2499.99,
    originalPrice: 2799.99,
    description: 'Premium 65-inch 4K TV with Neo QLED technology, offering incredible brightness, contrast, and smart features.',
    features: [
      'Neo Quantum Processor 4K',
      'Quantum HDR 32X',
      'Object Tracking Sound+',
      'Gaming Hub',
      'Anti-reflection screen'
    ],
    specifications: {
      'Screen Size': '65 inches',
      'Resolution': '4K (3840 x 2160)',
      'HDR': 'Quantum HDR 32X',
      'Refresh Rate': '120Hz',
      'Smart Platform': 'Tizen'
    },
    mainImage: 'https://images.pexels.com/photos/6782570/pexels-photo-6782570.jpeg',
    images: [
      'https://images.pexels.com/photos/6782570/pexels-photo-6782570.jpeg',
      'https://images.pexels.com/photos/6782571/pexels-photo-6782571.jpeg',
      'https://images.pexels.com/photos/6782572/pexels-photo-6782572.jpeg'
    ],
    stock: 25,
    reviews: generateReviews(14),
    rating: 4.8,
    reviewCount: 14,
    tags: ['tv', 'samsung', '4k', 'qled', 'smart-tv'],
    isNew: true,
    isFeatured: true,
    createdAt: '2024-02-23T00:00:00.000Z',
    updatedAt: '2024-02-23T00:00:00.000Z'
  },
  {
    id: '13',
    name: 'NVIDIA GeForce RTX 4080',
    slug: 'nvidia-geforce-rtx-4080',
    brand: 'ASUS',
    category: 'Gaming',
    price: 1199.99,
    originalPrice: 1299.99,
    description: 'High-end graphics card featuring NVIDIA Ada Lovelace architecture, ray tracing, and DLSS 3.0 technology.',
    features: [
      'NVIDIA Ada Lovelace architecture',
      'DLSS 3.0 technology',
      'Ray tracing cores',
      '16GB GDDR6X memory',
      'PCIe 4.0 interface'
    ],
    specifications: {
      'CUDA Cores': '9728',
      'Memory': '16GB GDDR6X',
      'Memory Interface': '256-bit',
      'Boost Clock': '2.51 GHz',
      'Power Consumption': '320W'
    },
    mainImage: 'https://images.pexels.com/photos/1034425/pexels-photo-1034425.jpeg',
    images: [
      'https://images.pexels.com/photos/1034425/pexels-photo-1034425.jpeg',
      'https://images.pexels.com/photos/1034426/pexels-photo-1034426.jpeg',
      'https://images.pexels.com/photos/1034427/pexels-photo-1034427.jpeg'
    ],
    stock: 15,
    reviews: generateReviews(19),
    rating: 4.9,
    reviewCount: 19,
    tags: ['gpu', 'nvidia', 'rtx', 'gaming', 'components'],
    isNew: true,
    isFeatured: true,
    createdAt: '2024-02-24T00:00:00.000Z',
    updatedAt: '2024-02-24T00:00:00.000Z'
  },
  {
    id: '14',
    name: 'Sony WF-1000XM5',
    slug: 'sony-wf-1000xm5',
    brand: 'Sony',
    category: 'Headphones',
    price: 299.99,
    originalPrice: 329.99,
    description: 'Premium wireless earbuds with industry-leading noise cancellation and exceptional sound quality.',
    features: [
      'Dynamic driver X',
      'Adaptive noise cancellation',
      '24-hour battery life',
      'Wireless charging',
      'Multipoint connection'
    ],
    specifications: {
      'Driver Size': '8.4mm',
      'Battery Life': '8h (ANC on)',
      'Charging Case': 'Additional 16h',
      'Bluetooth': '5.3',
      'Water Resistance': 'IPX4'
    },
    mainImage: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg',
      'https://images.pexels.com/photos/3394652/pexels-photo-3394652.jpeg'
    ],
    stock: 90,
    reviews: generateReviews(28),
    rating: 4.7,
    reviewCount: 28,
    tags: ['earbuds', 'sony', 'wireless', 'noise-cancelling', 'audio'],
    isNew: true,
    isFeatured: false,
    createdAt: '2024-02-25T00:00:00.000Z',
    updatedAt: '2024-02-25T00:00:00.000Z'
  },
  {
    id: '15',
    name: 'PlayStation 5',
    slug: 'playstation-5',
    brand: 'Sony',
    category: 'Gaming',
    price: 499.99,
    description: 'Next-generation gaming console featuring ray tracing, 4K gaming, and ultra-high speed SSD.',
    features: [
      'AMD Zen 2 processor',
      'Ray tracing support',
      'Ultra-high speed SSD',
      'DualSense controller',
      '3D Audio'
    ],
    specifications: {
      'CPU': 'AMD Zen 2 8-core',
      'GPU': '10.28 TFLOPS RDNA 2',
      'Storage': '825GB SSD',
      'RAM': '16GB GDDR6',
      'Resolution': 'Up to 4K 120Hz'
    },
    mainImage: 'https://images.pexels.com/photos/12719138/pexels-photo-12719138.jpeg',
    images: [
      'https://images.pexels.com/photos/12719138/pexels-photo-12719138.jpeg',
      'https://images.pexels.com/photos/12719139/pexels-photo-12719139.jpeg',
      'https://images.pexels.com/photos/12719140/pexels-photo-12719140.jpeg'
    ],
    stock: 30,
    reviews: generateReviews(35),
    rating: 4.9,
    reviewCount: 35,
    tags: ['gaming', 'console', 'playstation', 'sony', '4k'],
    isNew: false,
    isFeatured: true,
    createdAt: '2024-02-26T00:00:00.000Z',
    updatedAt: '2024-02-26T00:00:00.000Z'
  }
]; 