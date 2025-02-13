'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import {
  Bell,
  Moon,
  Sun,
  Trash2,
  Shield,
  User,
  Globe,
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function SettingsPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="container mx-auto px-4 py-8"
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="mt-2 text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </motion.div>

      <div className="mt-8 grid gap-6">
        {/* Account Settings */}
        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <h2 className="text-xl font-semibold">Account Settings</h2>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label>Display Name</Label>
                  <Input placeholder="Your display name" />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Notifications */}
        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                <h2 className="text-xl font-semibold">Notifications</h2>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive email about your account activity
                  </p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Push Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive push notifications about orders and promotions
                  </p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Privacy & Security */}
        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <h2 className="text-xl font-semibold">Privacy & Security</h2>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <Switch />
              </div>
              <Button variant="outline">Change Password</Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Appearance */}
        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Sun className="h-5 w-5 dark:hidden" />
                <Moon className="hidden h-5 w-5 dark:block" />
                <h2 className="text-xl font-semibold">Appearance</h2>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Toggle between light and dark mode
                  </p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Language</Label>
                  <p className="text-sm text-muted-foreground">
                    Choose your preferred language
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  <span>English</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Danger Zone */}
        <motion.div variants={itemVariants}>
          <Card className="border-destructive">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Trash2 className="h-5 w-5 text-destructive" />
                <h2 className="text-xl font-semibold text-destructive">Danger Zone</h2>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Once you delete your account, there is no going back. Please be certain.
              </p>
              <Button variant="destructive" className="mt-4">
                Delete Account
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
} 