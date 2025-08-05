import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Button from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Star, MapPin, Users, Package } from "lucide-react"

// Mock seller data
const sellers = [
  {
    id: 1,
    name: "Sarah's Pottery",
    artisan: "Sarah Johnson",
    location: "Portland, OR",
    rating: 4.8,
    reviews: 156,
    products: 24,
    followers: 1200,
    image: "/placeholder-user.jpg",
    description: "Handcrafted ceramic pieces with unique glazes and modern designs.",
    specialties: ["Ceramics", "Kitchenware", "Home Decor"],
    joined: "2022"
  },
  {
    id: 2,
    name: "Mike's Woodworks",
    artisan: "Mike Chen",
    location: "Austin, TX",
    rating: 4.9,
    reviews: 89,
    products: 18,
    followers: 850,
    image: "/placeholder-user.jpg",
    description: "Premium hardwood cutting boards and kitchen accessories.",
    specialties: ["Woodworking", "Kitchenware", "Cutting Boards"],
    joined: "2021"
  },
  {
    id: 3,
    name: "Emily's Yarns",
    artisan: "Emily Davis",
    location: "Seattle, WA",
    rating: 4.7,
    reviews: 203,
    products: 31,
    followers: 2100,
    image: "/placeholder-user.jpg",
    description: "Hand-knitted accessories and home textiles in soft, natural fibers.",
    specialties: ["Knitting", "Accessories", "Textiles"],
    joined: "2020"
  },
  {
    id: 4,
    name: "David's Leather",
    artisan: "David Wilson",
    location: "Denver, CO",
    rating: 4.6,
    reviews: 67,
    products: 15,
    followers: 650,
    image: "/placeholder-user.jpg",
    description: "Hand-stitched leather goods with timeless designs.",
    specialties: ["Leatherwork", "Accessories", "Wallets"],
    joined: "2023"
  },
  {
    id: 5,
    name: "Natural Essentials",
    artisan: "Lisa Rodriguez",
    location: "San Francisco, CA",
    rating: 4.9,
    reviews: 178,
    products: 28,
    followers: 1500,
    image: "/placeholder-user.jpg",
    description: "Natural handmade soaps and beauty products with essential oils.",
    specialties: ["Soap Making", "Beauty", "Natural Products"],
    joined: "2021"
  },
  {
    id: 6,
    name: "Green Thumb Crafts",
    artisan: "Alex Thompson",
    location: "Nashville, TN",
    rating: 4.5,
    reviews: 42,
    products: 12,
    followers: 380,
    image: "/placeholder-user.jpg",
    description: "Beautiful ceramic plant pots and garden accessories.",
    specialties: ["Ceramics", "Garden", "Plant Pots"],
    joined: "2023"
  }
]

const categories = ["All", "Ceramics", "Woodworking", "Knitting", "Leatherwork", "Soap Making", "Garden"]

export default function SellersPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-gray-900">Meet Our Artisans</h1>
        <p className="text-xl text-gray-600">Discover talented creators and their unique handmade crafts</p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search artisans..."
            className="pl-10"
          />
        </div>
        <div className="flex gap-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Specialty" />
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
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="products">Most Products</SelectItem>
              <SelectItem value="followers">Most Followers</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Sellers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sellers.map((seller) => (
          <Card key={seller.id} className="group hover:shadow-lg transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={seller.image} alt={seller.artisan} />
                  <AvatarFallback>{seller.artisan.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
              </div>
              <CardTitle className="text-xl">{seller.name}</CardTitle>
              <CardDescription className="text-sm">by {seller.artisan}</CardDescription>
              <div className="flex items-center justify-center text-sm text-muted-foreground">
                <MapPin className="h-3 w-3 mr-1" />
                {seller.location}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600 text-center">{seller.description}</p>
              
              <div className="flex flex-wrap gap-1 justify-center">
                {seller.specialties.map((specialty) => (
                  <Badge key={specialty} variant="secondary" className="text-xs">
                    {specialty}
                  </Badge>
                ))}
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center text-sm">
                <div>
                  <div className="flex items-center justify-center text-muted-foreground mb-1">
                    <Star className="h-3 w-3 mr-1" />
                    Rating
                  </div>
                  <div className="font-semibold">{seller.rating}</div>
                  <div className="text-xs text-muted-foreground">({seller.reviews} reviews)</div>
                </div>
                <div>
                  <div className="flex items-center justify-center text-muted-foreground mb-1">
                    <Package className="h-3 w-3 mr-1" />
                    Products
                  </div>
                  <div className="font-semibold">{seller.products}</div>
                </div>
                <div>
                  <div className="flex items-center justify-center text-muted-foreground mb-1">
                    <Users className="h-3 w-3 mr-1" />
                    Followers
                  </div>
                  <div className="font-semibold">{seller.followers}</div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  View Profile
                </Button>
                <Button className="flex-1 bg-teal-600 hover:bg-teal-700">
                  Follow
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" size="lg">
          Load More Artisans
        </Button>
      </div>
    </div>
  );
} 