import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import { ThemeProvider } from '@/components/theme-provider'
import Button from '@/components/ui/button'
import { ShoppingBag, User, LogIn, UserPlus } from 'lucide-react'

export const metadata: Metadata = {
  title: 'ArtisanCraft Hub - Handmade Craft Marketplace',
  description: 'Discover, connect, and support local creators at ArtisanCraft Hub. Shop unique, handmade treasures from talented artisans.',
  generator: 'Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link href="/" className="flex items-center space-x-2">
                  <ShoppingBag className="h-8 w-8 text-teal-600" />
                  <span className="text-xl font-bold text-teal-600">ArtisanCraft Hub</span>
                </Link>
              </div>
              
              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/products" className="text-sm font-medium transition-colors hover:text-teal-600">
                  Products
                </Link>
                <Link href="/sellers" className="text-sm font-medium transition-colors hover:text-teal-600">
                  Sellers
                </Link>
                <Link href="/reviews" className="text-sm font-medium transition-colors hover:text-teal-600">
                  Reviews
                </Link>
                <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-teal-600">
                  Dashboard
                </Link>
              </nav>

              <div className="flex items-center space-x-4">
                <Link href="/auth/login">
                  <Button variant="ghost" size="sm">
                    <LogIn className="mr-2 h-4 w-4" />
                    Login
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Register
                  </Button>
                </Link>
              </div>
            </div>
          </header>
          
          <main className="flex-1">{children}</main>
          
          <footer className="border-t bg-background">
            <div className="container py-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">ArtisanCraft Hub</h3>
                  <p className="text-sm text-muted-foreground">
                    Connecting artisans with customers who appreciate handmade crafts.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/products" className="text-muted-foreground hover:text-foreground">Products</Link></li>
                    <li><Link href="/sellers" className="text-muted-foreground hover:text-foreground">Sellers</Link></li>
                    <li><Link href="/reviews" className="text-muted-foreground hover:text-foreground">Reviews</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-4">Support</h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/help" className="text-muted-foreground hover:text-foreground">Help Center</Link></li>
                    <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact Us</Link></li>
                    <li><Link href="/faq" className="text-muted-foreground hover:text-foreground">FAQ</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-4">Legal</h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                    <li><Link href="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
                  </ul>
                </div>
              </div>
              <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
                © 2024 ArtisanCraft Hub. All rights reserved.
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
