import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Star,
  CheckCircle,
  Truck,
  ShieldCheck
} from 'lucide-react';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero section */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"
            alt="Modern Tech Background"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
            priority
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 sm:py-40 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Welcome to UpBuy
            </h1>
            <p className="mt-6 text-xl text-white">
              Discover our curated collection of premium tech products. Shop with confidence and style.
            </p>
            <div className="mt-10">
              <Link
                href="/products"
                className="inline-block rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:bg-primary/90"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured sections */}
      <div className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mt-6 text-base font-semibold">Quality Guaranteed</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Every product is carefully selected to ensure the highest quality standards.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mt-6 text-base font-semibold">Fast Delivery</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Quick and reliable shipping to get your products to you as soon as possible.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mt-6 text-base font-semibold">Secure Payments</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Your transactions are protected with industry-leading security measures.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">What Our Customers Say</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Don&apos;t just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                      alt="Customer"
                      className="h-full w-full object-cover"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <p className="font-semibold">John Doe</p>
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  &quot;Amazing selection of tech products. The delivery was super fast and the customer service was excellent!&quot;
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                      alt="Customer"
                      className="h-full w-full object-cover"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Jane Smith</p>
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  &quot;The quality of the products is outstanding. I&apos;m a repeat customer and have never been disappointed!&quot;
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
                      alt="Customer"
                      className="h-full w-full object-cover"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Mike Johnson</p>
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  &quot;Great prices and even better service. The team went above and beyond to help me find the perfect product!&quot;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <div className="relative bg-background">
        <div className="absolute inset-0 h-1/2 bg-muted" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <Card>
              <CardContent className="p-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold tracking-tight">Contact Us</h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    Have questions? We're here to help!
                  </p>
                </div>

                <div className="mt-8 grid gap-6">
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-primary" />
                    <p>support@upbuy.com</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-primary" />
                    <p>+1 (555) 123-4567</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="h-5 w-5 text-primary" />
                    <p>123 Tech Street, Digital City, 12345</p>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Your Email" type="email" />
                  <Input placeholder="Subject" />
                  <textarea
                    className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    placeholder="Your Message"
                  />
                  <Button className="w-full">Send Message</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-muted">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold">About UpBuy</h3>
              <p className="mt-4 text-sm text-muted-foreground">
                Your trusted destination for premium tech products. We deliver quality, reliability, and excellent customer service.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/products" className="text-muted-foreground hover:text-primary">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="text-muted-foreground hover:text-primary">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="/deals" className="text-muted-foreground hover:text-primary">
                    Deals
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Customer Service</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="text-muted-foreground hover:text-primary">
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="text-muted-foreground hover:text-primary">
                    Returns
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} UpBuy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
