import { NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

// Mock products data - replace with database in production
let mockProducts = [
  {
    id: "1",
    name: "Handcrafted Ceramic Mug",
    description: "Beautiful hand-thrown ceramic mug with unique glaze patterns",
    price: 25.99,
    category: "Ceramics",
    artisan: "Sarah Johnson",
    artisanId: "1",
    image: "/placeholder.jpg",
    rating: 4.8,
    reviews: 12,
    stock: 15,
    status: "active",
    createdAt: "2024-01-15T10:00:00Z"
  },
  {
    id: "2",
    name: "Wooden Cutting Board",
    description: "Sustainable wooden cutting board made from responsibly sourced materials",
    price: 45.00,
    category: "Woodworking",
    artisan: "Mike Chen",
    artisanId: "2",
    image: "/placeholder.jpg",
    rating: 4.9,
    reviews: 8,
    stock: 8,
    status: "active",
    createdAt: "2024-01-10T14:30:00Z"
  }
]

// Mock user storage reference - in production, this would be a database
// This simulates a simple in-memory user store
let mockUsers: any[] = []

// Helper function to verify JWT token
function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET) as any
  } catch (error) {
    return null
  }
}

// Helper function to find user by ID
function findUserById(id: string) {
  return mockUsers.find(user => user.id === id)
}

// GET - List products (with optional filtering)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const artisanId = searchParams.get("artisanId")
    const status = searchParams.get("status")

    let filteredProducts = [...mockProducts]

    // Apply filters
    if (category) {
      filteredProducts = filteredProducts.filter(p => p.category === category)
    }
    if (artisanId) {
      filteredProducts = filteredProducts.filter(p => p.artisanId === artisanId)
    }
    if (status) {
      filteredProducts = filteredProducts.filter(p => p.status === status)
    }

    return NextResponse.json({
      products: filteredProducts,
      total: filteredProducts.length
    })

  } catch (error) {
    console.error("Get products error:", error)
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    )
  }
}

// POST - Create new product (seller only)
export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization")
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Authorization token required" },
        { status: 401 }
      )
    }

    const token = authHeader.substring(7)
    const decoded = verifyToken(token)
    
    if (!decoded) {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 401 }
      )
    }

    // Check if user is a seller
    if (decoded.role !== "seller") {
      return NextResponse.json(
        { error: "Only sellers can create products" },
        { status: 403 }
      )
    }

    const body = await request.json()
    const { name, description, price, category, image, stock } = body

    // Validate required fields
    if (!name || !description || !price || !category) {
      return NextResponse.json(
        { error: "Name, description, price, and category are required" },
        { status: 400 }
      )
    }

    // Validate price
    if (price <= 0) {
      return NextResponse.json(
        { error: "Price must be greater than 0" },
        { status: 400 }
      )
    }

    // Find user to get their name
    const user = findUserById(decoded.userId)
    const artisanName = user ? user.name : "Unknown Artisan"

    // Create new product
    const newProduct = {
      id: Date.now().toString(),
      name,
      description,
      price: parseFloat(price),
      category,
      artisan: artisanName,
      artisanId: decoded.userId,
      image: image || "/placeholder.jpg",
      rating: 0,
      reviews: 0,
      stock: stock || 0,
      status: "active",
      createdAt: new Date().toISOString()
    }

    mockProducts.push(newProduct)

    return NextResponse.json({
      message: "Product created successfully",
      product: newProduct
    }, { status: 201 })

  } catch (error) {
    console.error("Create product error:", error)
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    )
  }
} 