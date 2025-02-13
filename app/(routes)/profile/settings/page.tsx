'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import {
  Bell,
  Lock,
  Mail,
  Moon,
  Smartphone,
  Sun,
  User,
  Globe,
  CreditCard,
  Shield,
  Eye,
  BellRing,
  Languages,
  Palette
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { fadeIn, staggerContainer, slideIn, scaleIn, cardHover } from '@/lib/animations';

const MotionCard = motion(Card);

export default function SettingsPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <motion.div
      className="bg-background"
      variants={fadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <motion.div 
          className="space-y-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Header */}
          <motion.div variants={fadeIn}>
            <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
            <p className="mt-2 text-muted-foreground">
              Manage your account settings and preferences
            </p>
          </motion.div>

          {/* Account Settings */}
          <MotionCard
            variants={slideIn}
            whileHover={cardHover}
          >
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Account Settings</h2>
                <p className="text-sm text-muted-foreground">
                  Update your personal information and email preferences
                </p>
              </div>
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.2 }}
              >
                <User className="h-5 w-5 text-muted-foreground" />
              </motion.div>
            </CardHeader>
            <CardContent className="space-y-6">
              <motion.div 
                className="grid gap-4 sm:grid-cols-2"
                variants={staggerContainer}
              >
                <motion.div variants={fadeIn} className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </motion.div>
                <motion.div variants={fadeIn} className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </motion.div>
                <motion.div variants={fadeIn} className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </motion.div>
                <motion.div variants={fadeIn} className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                </motion.div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button>Save Changes</Button>
              </motion.div>
            </CardContent>
          </MotionCard>

          {/* Notifications */}
          <MotionCard
            variants={slideIn}
            whileHover={cardHover}
          >
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Notifications</h2>
                <p className="text-sm text-muted-foreground">
                  Choose how you want to be notified
                </p>
              </div>
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.2 }}
              >
                <Bell className="h-5 w-5 text-muted-foreground" />
              </motion.div>
            </CardHeader>
            <CardContent className="space-y-6">
              <motion.div 
                className="space-y-4"
                variants={staggerContainer}
              >
                <motion.div variants={fadeIn} className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive order updates and promotions
                    </p>
                  </div>
                  <Switch defaultChecked />
                </motion.div>
                <motion.div variants={fadeIn} className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Get notified about new deals and offers
                    </p>
                  </div>
                  <Switch defaultChecked />
                </motion.div>
                <motion.div variants={fadeIn} className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>SMS Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive shipping updates via SMS
                    </p>
                  </div>
                  <Switch />
                </motion.div>
              </motion.div>
            </CardContent>
          </MotionCard>

          {/* Privacy & Security */}
          <MotionCard
            variants={slideIn}
            whileHover={cardHover}
          >
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Privacy & Security</h2>
                <p className="text-sm text-muted-foreground">
                  Manage your privacy settings and security preferences
                </p>
              </div>
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.2 }}
              >
                <Shield className="h-5 w-5 text-muted-foreground" />
              </motion.div>
            </CardHeader>
            <CardContent className="space-y-6">
              <motion.div 
                className="space-y-4"
                variants={staggerContainer}
              >
                <motion.div variants={fadeIn} className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <Switch defaultChecked />
                </motion.div>
                <motion.div variants={fadeIn} className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Activity Log</Label>
                    <p className="text-sm text-muted-foreground">
                      Track all activities on your account
                    </p>
                  </div>
                  <Button variant="outline" size="sm">View Log</Button>
                </motion.div>
                <motion.div variants={fadeIn} className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Password</Label>
                    <p className="text-sm text-muted-foreground">
                      Last changed 3 months ago
                    </p>
                  </div>
                  <Button variant="outline" size="sm">Change Password</Button>
                </motion.div>
              </motion.div>
            </CardContent>
          </MotionCard>

          {/* Appearance */}
          <MotionCard
            variants={slideIn}
            whileHover={cardHover}
          >
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Appearance</h2>
                <p className="text-sm text-muted-foreground">
                  Customize how UpBuy looks on your device
                </p>
              </div>
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.2 }}
              >
                <Palette className="h-5 w-5 text-muted-foreground" />
              </motion.div>
            </CardHeader>
            <CardContent className="space-y-6">
              <motion.div 
                className="space-y-4"
                variants={staggerContainer}
              >
                <motion.div variants={fadeIn} className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Theme</Label>
                    <p className="text-sm text-muted-foreground">
                      Choose between light and dark mode
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant={theme === 'light' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setTheme('light')}
                        className="w-24"
                      >
                        <Sun className="mr-2 h-4 w-4" />
                        Light
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant={theme === 'dark' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setTheme('dark')}
                        className="w-24"
                      >
                        <Moon className="mr-2 h-4 w-4" />
                        Dark
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
                <motion.div variants={fadeIn} className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Language</Label>
                    <p className="text-sm text-muted-foreground">
                      Select your preferred language
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Globe className="mr-2 h-4 w-4" />
                    English (US)
                  </Button>
                </motion.div>
              </motion.div>
            </CardContent>
          </MotionCard>

          {/* Danger Zone */}
          <MotionCard
            variants={slideIn}
            whileHover={cardHover}
            className="border-destructive"
          >
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-destructive">Danger Zone</h2>
                <p className="text-sm text-muted-foreground">
                  Irreversible and destructive actions
                </p>
              </div>
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.2 }}
              >
                <Shield className="h-5 w-5 text-destructive" />
              </motion.div>
            </CardHeader>
            <CardContent className="space-y-6">
              <motion.div 
                className="space-y-4"
                variants={staggerContainer}
              >
                <motion.div variants={fadeIn} className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Delete Account</Label>
                    <p className="text-sm text-muted-foreground">
                      Permanently delete your account and all data
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="destructive" size="sm">Delete Account</Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </CardContent>
          </MotionCard>
        </motion.div>
      </div>
    </motion.div>
  );
} 