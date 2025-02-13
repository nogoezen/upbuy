'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  User,
  Package,
  Settings,
  Heart,
  MapPin,
  CreditCard,
  Bell,
  Shield,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock user data (replace with real data from your auth system)
const userData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
  joinDate: '2024-01-01',
  recentOrders: [
    {
      id: 'ORD-001',
      date: '2024-02-15',
      status: 'Delivered',
      total: 299.99,
      items: 2,
    },
    {
      id: 'ORD-002',
      date: '2024-02-10',
      status: 'In Transit',
      total: 149.99,
      items: 1,
    },
    {
      id: 'ORD-003',
      date: '2024-02-05',
      status: 'Processing',
      total: 499.99,
      items: 3,
    },
  ],
  savedAddresses: [
    {
      id: 1,
      type: 'Home',
      address: '123 Main St, City, Country',
      isDefault: true,
    },
    {
      id: 2,
      type: 'Work',
      address: '456 Office Ave, Business District',
      isDefault: false,
    },
  ],
};

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('overview');

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'bg-green-500';
      case 'in transit':
        return 'bg-blue-500';
      case 'processing':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-12">
          {/* Sidebar */}
          <div className="md:col-span-3">
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="relative mx-auto h-24 w-24">
                    <Image
                      src={userData.avatar}
                      alt={userData.name}
                      className="rounded-full object-cover"
                      fill
                    />
                  </div>
                  <h2 className="mt-4 text-xl font-semibold">{userData.name}</h2>
                  <p className="text-sm text-muted-foreground">{userData.email}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Member since {new Date(userData.joinDate).toLocaleDateString()}
                  </p>
                </div>

                <div className="mt-6 space-y-2">
                  <Button
                    variant={activeTab === 'overview' ? 'default' : 'ghost'}
                    className="w-full justify-start"
                    onClick={() => setActiveTab('overview')}
                  >
                    <User className="mr-2 h-4 w-4" />
                    Overview
                  </Button>
                  <Button
                    variant={activeTab === 'orders' ? 'default' : 'ghost'}
                    className="w-full justify-start"
                    onClick={() => setActiveTab('orders')}
                  >
                    <Package className="mr-2 h-4 w-4" />
                    Orders
                  </Button>
                  <Button
                    variant={activeTab === 'wishlist' ? 'default' : 'ghost'}
                    className="w-full justify-start"
                    onClick={() => setActiveTab('wishlist')}
                  >
                    <Heart className="mr-2 h-4 w-4" />
                    Wishlist
                  </Button>
                  <Button
                    variant={activeTab === 'addresses' ? 'default' : 'ghost'}
                    className="w-full justify-start"
                    onClick={() => setActiveTab('addresses')}
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Addresses
                  </Button>
                  <Button
                    variant={activeTab === 'payments' ? 'default' : 'ghost'}
                    className="w-full justify-start"
                    onClick={() => setActiveTab('payments')}
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Payment Methods
                  </Button>
                  <Button
                    variant={activeTab === 'notifications' ? 'default' : 'ghost'}
                    className="w-full justify-start"
                    onClick={() => setActiveTab('notifications')}
                  >
                    <Bell className="mr-2 h-4 w-4" />
                    Notifications
                  </Button>
                  <Button
                    variant={activeTab === 'security' ? 'default' : 'ghost'}
                    className="w-full justify-start"
                    onClick={() => setActiveTab('security')}
                  >
                    <Shield className="mr-2 h-4 w-4" />
                    Security
                  </Button>
                  <Button
                    variant={activeTab === 'settings' ? 'default' : 'ghost'}
                    className="w-full justify-start"
                    onClick={() => setActiveTab('settings')}
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-9">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Recent Orders */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <h3 className="text-lg font-semibold">Recent Orders</h3>
                    <Link href="/profile/orders">
                      <Button variant="ghost" size="sm">View All</Button>
                    </Link>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {userData.recentOrders.map((order) => (
                        <div
                          key={order.id}
                          className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                        >
                          <div>
                            <p className="font-medium">{order.id}</p>
                            <p className="text-sm text-muted-foreground">
                              {new Date(order.date).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">
                              ${order.total.toFixed(2)}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {order.items} items
                            </p>
                          </div>
                          <Badge
                            className={cn(
                              'ml-4',
                              getStatusColor(order.status)
                            )}
                          >
                            {order.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Saved Addresses */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <h3 className="text-lg font-semibold">Saved Addresses</h3>
                    <Button variant="ghost" size="sm">Add New</Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {userData.savedAddresses.map((address) => (
                        <div
                          key={address.id}
                          className="flex items-start justify-between border-b pb-4 last:border-0 last:pb-0"
                        >
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-medium">{address.type}</p>
                              {address.isDefault && (
                                <Badge variant="secondary">Default</Badge>
                              )}
                            </div>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {address.address}
                            </p>
                          </div>
                          <Button variant="ghost" size="sm">Edit</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Account Stats */}
                <div className="grid gap-4 sm:grid-cols-3">
                  <Card>
                    <CardContent className="p-6">
                      <Package className="h-8 w-8 text-primary" />
                      <h4 className="mt-2 font-semibold">Total Orders</h4>
                      <p className="text-2xl font-bold">12</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <Heart className="h-8 w-8 text-primary" />
                      <h4 className="mt-2 font-semibold">Wishlist Items</h4>
                      <p className="text-2xl font-bold">5</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <CreditCard className="h-8 w-8 text-primary" />
                      <h4 className="mt-2 font-semibold">Saved Cards</h4>
                      <p className="text-2xl font-bold">2</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Other tabs can be implemented similarly */}
            {activeTab !== 'overview' && (
              <Card>
                <CardContent className="p-6">
                  <p className="text-center text-muted-foreground">
                    This section is under development.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 