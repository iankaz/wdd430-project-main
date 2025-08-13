import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Button from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Heart, ShoppingCart, Star } from "lucide-react"

// Mock product data
const products = [
  {
    id: 1,
    name: "Handmade Ceramic Mug",
    artisan: "Sarah's Pottery",
    price: 45,
    rating: 4.8,
    reviews: 24,
    image: "/placeholder.jpg",
    category: "Kitchenware",
    description: "Beautiful handcrafted ceramic mug with unique glaze patterns."
  },
  {
    id: 2,
    name: "Wooden Cutting Board",
    artisan: "Mike's Woodworks",
    price: 85,
    rating: 4.9,
    reviews: 18,
    image: "/placeholder.jpg",
    category: "Kitchenware",
    description: "Premium hardwood cutting board with food-safe finish."
  },
  {
    id: 3,
    name: "Knitted Winter Scarf",
    artisan: "Emily's Yarns",
    price: 32,
    rating: 4.7,
    reviews: 31,
    image: "/placeholder.jpg",
    category: "Accessories",
    description: "Warm and cozy hand-knitted scarf in soft wool."
  },
  {
    id: 4,
    name: "Leather Wallet",
    artisan: "David's Leather",
    price: 68,
    rating: 4.6,
    reviews: 15,
    image: "/placeholder.jpg",
    category: "Accessories",
    description: "Hand-stitched leather wallet with multiple card slots."
  },
  {
    id: 5,
    name: "Handmade Soap Set",
    artisan: "Natural Essentials",
    price: 28,
    rating: 4.9,
    reviews: 42,
    image: "/placeholder.jpg",
    category: "Beauty",
    description: "Natural handmade soaps with essential oils."
  },
  {
    id: 6,
    name: "Ceramic Plant Pot",
    artisan: "Green Thumb Crafts",
    price: 55,
    rating: 4.5,
    reviews: 12,
    image: "/placeholder.jpg",
    category: "Home & Garden",
    description: "Beautiful ceramic plant pot with drainage hole."
  }
]

const categories = ["All", "Kitchenware", "Accessories", "Beauty", "Home & Garden", "Jewelry", "Textiles"]

export default function ProductsPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-gray-900">Discover Handmade Treasures</h1>
        <p className="text-xl text-gray-600">Find unique, artisan-crafted items from talented creators</p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            className="pl-10"
          />
        </div>
        <div className="flex gap-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category.toLowerCase()}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="group hover:shadow-lg transition-shadow">
            <CardHeader className="p-0">
              <div className="relative aspect-square overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <Badge variant="secondary" className="text-xs">
                  {product.category}
                </Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                  {product.rating} ({product.reviews})
                </div>
              </div>
              
              <CardTitle className="text-lg mb-1 line-clamp-1">{product.name}</CardTitle>
              <CardDescription className="text-sm mb-2 line-clamp-2">
                {product.description}
              </CardDescription>
              
              <p className="text-sm text-muted-foreground mb-3">by {product.artisan}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-[#005151]">${product.price}</span>
                <Button size="sm" className="bg-[#005151] hover:bg-[#003D3D]">
                  <ShoppingCart className="mr-1 h-3 w-3" />
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" size="lg">
          Load More Products
        </Button>
      </div>
    </div>
  );
} 