import Link from 'next/link';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useCart } from '@/lib/store';

export default function Header() {
  const cart = useCart();
  const itemCount = cart.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary-600">
              UpBuy
            </Link>
            <div className="ml-10 hidden space-x-8 lg:block">
              <Link
                href="/products"
                className="text-sm font-medium text-gray-700 hover:text-primary-600"
              >
                Products
              </Link>
              <Link
                href="/categories"
                className="text-sm font-medium text-gray-700 hover:text-primary-600"
              >
                Categories
              </Link>
              <Link
                href="/deals"
                className="text-sm font-medium text-gray-700 hover:text-primary-600"
              >
                Deals
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link
              href="/cart"
              className="group -m-2 flex items-center p-2"
            >
              <ShoppingBagIcon
                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-primary-600"
                aria-hidden="true"
              />
              {itemCount > 0 && (
                <span className="ml-2 text-sm font-medium text-primary-600 group-hover:text-primary-800">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 