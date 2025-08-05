import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Button from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Search, Filter, Star, ThumbsUp, MessageCircle } from "lucide-react"

// Mock review data
const reviews = [
  {
    id: 1,
    customer: "Jennifer Smith",
    product: "Handmade Ceramic Mug",
    artisan: "Sarah's Pottery",
    rating: 5,
    date: "2024-01-15",
    title: "Absolutely beautiful craftsmanship!",
    content: "This mug is not only functional but a work of art. The glaze is stunning and the craftsmanship is impeccable. I love using it every morning for my coffee. Highly recommend!",
    helpful: 12,
    verified: true,
    image: "/placeholder-user.jpg"
  },
  {
    id: 2,
    customer: "Michael Brown",
    product: "Wooden Cutting Board",
    artisan: "Mike's Woodworks",
    rating: 4,
    date: "2024-01-12",
    title: "Great quality, perfect size",
    content: "The cutting board is well-made and the perfect size for my kitchen. The wood is beautiful and it's clear that care was taken in the craftsmanship. Only giving 4 stars because it arrived a day late.",
    helpful: 8,
    verified: true,
    image: "/placeholder-user.jpg"
  },
  {
    id: 3,
    customer: "Emily Davis",
    product: "Knitted Winter Scarf",
    artisan: "Emily's Yarns",
    rating: 5,
    date: "2024-01-10",
    title: "So soft and warm!",
    content: "This scarf is incredibly soft and keeps me warm during the cold winter months. The color is exactly as pictured and the knitting is perfect. I've already ordered another one!",
    helpful: 15,
    verified: true,
    image: "/placeholder-user.jpg"
  },
  {
    id: 4,
    customer: "David Wilson",
    product: "Leather Wallet",
    artisan: "David's Leather",
    rating: 5,
    date: "2024-01-08",
    title: "Exceptional leather quality",
    content: "The leather is supple and the stitching is perfect. This wallet has a classic design that will last for years. The craftsmanship is outstanding and it's clear this was made with care.",
    helpful: 6,
    verified: true,
    image: "/placeholder-user.jpg"
  },
  {
    id: 5,
    customer: "Lisa Rodriguez",
    product: "Handmade Soap Set",
    artisan: "Natural Essentials",
    rating: 4,
    date: "2024-01-05",
    title: "Lovely natural soaps",
    content: "The soaps smell amazing and leave my skin feeling soft. I love that they're made with natural ingredients. The packaging was also beautiful. Would definitely recommend!",
    helpful: 9,
    verified: true,
    image: "/placeholder-user.jpg"
  },
  {
    id: 6,
    customer: "Alex Thompson",
    product: "Ceramic Plant Pot",
    artisan: "Green Thumb Crafts",
    rating: 5,
    date: "2024-01-03",
    title: "Perfect for my plants",
    content: "This pot is beautiful and the perfect size for my indoor plants. The drainage hole works well and the glaze is stunning. My plants are thriving in their new home!",
    helpful: 4,
    verified: true,
    image: "/placeholder-user.jpg"
  }
]

const ratingStats = {
  average: 4.7,
  total: 156,
  distribution: {
    5: 89,
    4: 45,
    3: 15,
    2: 4,
    1: 3
  }
}

const categories = ["All", "Kitchenware", "Accessories", "Beauty", "Home & Garden", "Jewelry", "Textiles"]

export default function ReviewsPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-gray-900">Customer Reviews</h1>
        <p className="text-xl text-gray-600">See what our customers are saying about handmade treasures</p>
      </div>

      {/* Rating Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Overall Rating</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600">{ratingStats.average}</div>
              <div className="flex items-center justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(ratingStats.average)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Based on {ratingStats.total} reviews
              </p>
            </div>
            <div className="flex-1 space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => {
                const count = ratingStats.distribution[rating as keyof typeof ratingStats.distribution] || 0
                const percentage = (count / ratingStats.total) * 100
                return (
                  <div key={rating} className="flex items-center space-x-2">
                    <span className="text-sm w-8">{rating}★</span>
                    <Progress value={percentage} className="flex-1 h-2" />
                    <span className="text-sm text-muted-foreground w-12">{count}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search reviews..."
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
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="rating-high">Highest Rated</SelectItem>
              <SelectItem value="rating-low">Lowest Rated</SelectItem>
              <SelectItem value="helpful">Most Helpful</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={review.image} alt={review.customer} />
                  <AvatarFallback>{review.customer.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{review.customer}</h3>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <span>{review.product}</span>
                        <span>•</span>
                        <span>by {review.artisan}</span>
                        {review.verified && (
                          <>
                            <span>•</span>
                            <Badge variant="secondary" className="text-xs">Verified Purchase</Badge>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {new Date(review.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">{review.title}</h4>
                    <p className="text-gray-600">{review.content}</p>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <Button variant="ghost" size="sm" className="h-auto p-0">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      Helpful ({review.helpful})
                    </Button>
                    <Button variant="ghost" size="sm" className="h-auto p-0">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      Reply
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" size="lg">
          Load More Reviews
        </Button>
      </div>
    </div>
  );
} 