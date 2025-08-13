import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Button from "@/components/ui/button"
import { Users, CheckSquare, Calendar, BarChart3, ShoppingBag, Heart, Star } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EEE5DD] to-[#9F8B7A]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#005151] mb-6">
            Welcome to <span className="text-[#005151]">ArtisanCraft Hub</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your marketplace for unique, artisan-made treasures. Discover, connect, and support local creators!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="bg-[#005151] hover:bg-[#003D3D] text-white">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Browse Crafts
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button size="lg" variant="outline" className="border-[#005151] text-[#005151] hover:bg-[#EEE5DD]">
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#005151] mb-4">Why Choose ArtisanCraft Hub?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We connect passionate artisans with customers who appreciate the beauty and quality of handmade crafts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-[#EEE5DD] rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-[#005151]" />
                </div>
                <CardTitle className="text-xl">Handmade with Love</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Every item is carefully crafted by skilled artisans who pour their passion into every piece.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-[#EEE5DD] rounded-full flex items-center justify-center mb-4">
                  <CheckSquare className="h-6 w-6 text-[#005151]" />
                </div>
                <CardTitle className="text-xl">Quality Guaranteed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We ensure every product meets our high standards for quality and craftsmanship.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-[#EEE5DD] rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#005151]" />
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#005151]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-[#EEE5DD] mb-8 text-lg">
            Whether you're an artisan looking to showcase your work or a customer seeking unique treasures, 
            we're here to connect you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register">
              <Button size="lg" variant="secondary" className="bg-white text-[#005151] hover:bg-[#EEE5DD]">
                Start Selling
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-[#003D3D]">
                Start Shopping
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
