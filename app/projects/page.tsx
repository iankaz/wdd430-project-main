import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Button from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Calendar, Users, Target, Clock, Heart, MessageCircle, Share2 } from "lucide-react"

// Mock project data
const projects = [
  {
    id: 1,
    title: "Handcrafted Ceramic Collection",
    artisan: "Sarah Johnson",
    artisanImage: "/placeholder-user.jpg",
    description: "A collection of handcrafted ceramic pieces including mugs, bowls, and decorative items with unique glaze patterns inspired by nature.",
    category: "Ceramics",
    status: "In Progress",
    progress: 75,
    targetDate: "2024-02-15",
    backers: 45,
    targetBackers: 60,
    funding: 2250,
    targetFunding: 3000,
    image: "/placeholder.jpg",
    tags: ["Ceramics", "Kitchenware", "Home Decor"],
    updates: 3,
    comments: 12
  },
  {
    id: 2,
    title: "Sustainable Wooden Kitchen Set",
    artisan: "Mike Chen",
    artisanImage: "/placeholder-user.jpg",
    description: "A complete set of sustainable wooden kitchen accessories including cutting boards, utensils, and storage containers made from responsibly sourced materials.",
    category: "Woodworking",
    status: "Funding",
    progress: 45,
    targetDate: "2024-03-01",
    backers: 28,
    targetBackers: 50,
    funding: 1800,
    targetFunding: 4000,
    image: "/placeholder.jpg",
    tags: ["Woodworking", "Kitchenware", "Sustainable"],
    updates: 2,
    comments: 8
  },
  {
    id: 3,
    title: "Artisan Knitwear Collection",
    artisan: "Emily Davis",
    artisanImage: "/placeholder-user.jpg",
    description: "A seasonal collection of hand-knitted accessories including scarves, hats, and mittens using premium natural fibers and traditional patterns.",
    category: "Textiles",
    status: "Completed",
    progress: 100,
    targetDate: "2024-01-20",
    backers: 67,
    targetBackers: 40,
    funding: 3350,
    targetFunding: 2000,
    image: "/placeholder.jpg",
    tags: ["Knitting", "Accessories", "Winter"],
    updates: 5,
    comments: 23
  },
  {
    id: 4,
    title: "Hand-stitched Leather Goods",
    artisan: "David Wilson",
    artisanImage: "/placeholder-user.jpg",
    description: "A line of hand-stitched leather goods including wallets, belts, and bags using traditional techniques and premium leather.",
    category: "Leatherwork",
    status: "Planning",
    progress: 25,
    targetDate: "2024-04-01",
    backers: 15,
    targetBackers: 30,
    funding: 750,
    targetFunding: 3000,
    image: "/placeholder.jpg",
    tags: ["Leatherwork", "Accessories", "Traditional"],
    updates: 1,
    comments: 5
  },
  {
    id: 5,
    title: "Natural Soap & Beauty Collection",
    artisan: "Lisa Rodriguez",
    artisanImage: "/placeholder-user.jpg",
    description: "A complete line of natural handmade soaps, lotions, and beauty products using organic ingredients and essential oils.",
    category: "Beauty",
    status: "In Progress",
    progress: 60,
    targetDate: "2024-02-28",
    backers: 38,
    targetBackers: 45,
    funding: 1900,
    targetFunding: 3200,
    image: "/placeholder.jpg",
    tags: ["Soap Making", "Beauty", "Natural"],
    updates: 4,
    comments: 15
  },
  {
    id: 6,
    title: "Garden Ceramics Collection",
    artisan: "Alex Thompson",
    artisanImage: "/placeholder-user.jpg",
    description: "A beautiful collection of ceramic plant pots and garden accessories designed to enhance any indoor or outdoor space.",
    category: "Ceramics",
    status: "Funding",
    progress: 30,
    targetDate: "2024-03-15",
    backers: 22,
    targetBackers: 35,
    funding: 900,
    targetFunding: 3000,
    image: "/placeholder.jpg",
    tags: ["Ceramics", "Garden", "Plant Pots"],
    updates: 2,
    comments: 9
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-800"
    case "In Progress":
      return "bg-[rgb(210,220,230)] text-[rgb(70,90,120)]" // Blue-gray
    case "Funding":
      return "bg-[rgb(245,245,245)] text-[rgb(80,80,80)]" // Grey
    case "Planning":
      return "bg-gray-100 text-gray-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function ProjectsPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-gray-900">Artisan Projects</h1>
        <p className="text-xl text-gray-600">Discover and support amazing handmade projects from talented artisans</p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="group hover:shadow-lg transition-shadow">
            <CardHeader className="p-0">
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2">
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2 mb-3">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={project.artisanImage} alt={project.artisan} />
                  <AvatarFallback className="text-xs">{project.artisan.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">{project.artisan}</span>
              </div>
              
              <CardTitle className="text-lg mb-2 line-clamp-1">{project.title}</CardTitle>
              <CardDescription className="text-sm mb-3 line-clamp-2">
                {project.description}
              </CardDescription>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              {/* Progress */}
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div>
                  <div className="text-muted-foreground">Funding</div>
                  <div className="font-semibold">${project.funding.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">of ${project.targetFunding.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Backers</div>
                  <div className="font-semibold">{project.backers}</div>
                  <div className="text-xs text-muted-foreground">of {project.targetBackers}</div>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(project.targetDate).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="h-3 w-3 mr-1" />
                    {project.comments}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                    Support
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" size="lg">
          Load More Projects
        </Button>
      </div>
    </div>
  );
}
