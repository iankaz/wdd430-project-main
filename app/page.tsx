import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Button from "@/components/ui/button"
import { Users, CheckSquare, Calendar, BarChart3, ShoppingBag, Heart, Star } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[rgb(232,238,243)] to-beige-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[rgb(40,50,70)] mb-6">
            Welcome to <span className="text-[rgb(70,90,120)]">ArtisanCraft Hub</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your marketplace for unique, artisan-made treasures. Discover, connect, and support local creators!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="bg-[rgb(70,90,120)] hover:bg-[rgb(60,75,100)] text-white">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Browse Crafts
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button size="lg" variant="outline" className="border-[rgb(70,90,120)] text-[rgb(70,90,120)] hover:bg-[rgb(232,238,243)]">
                <Users className="mr-2 h-5 w-5" />
                Join as Artisan
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose ArtisanCraft Hub?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle className="text-xl">Handmade with Love</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Every item is carefully crafted by talented artisans who pour their passion into their work.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle className="text-xl">Unique & Authentic</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Discover one-of-a-kind pieces that tell a story and add character to your life.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle className="text-xl">Support Local Artists</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Connect directly with artisans and support their creative journey and livelihood.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-teal-100 mb-8 text-lg">
            Whether you're an artisan looking to showcase your work or a customer seeking unique treasures, 
            we're here to connect you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register">
              <Button size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-gray-100">
                Start Selling
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-teal-700">
                Start Shopping
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
