import { NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

// In production, use environment variables
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"
const JWT_EXPIRES_IN = "7d"

// Mock user storage - in production, this would be a database
// This simulates a simple in-memory user store
let mockUsers: any[] = []

// Helper function to find user by email
function findUserByEmail(email: string) {
  return mockUsers.find(user => user.email === email)
}

// Helper function to create a test user if none exist
function ensureTestUserExists() {
  if (mockUsers.length === 0) {
    // Create a default test user
    const testUser = {
      id: "1",
      email: "test@example.com",
      password: bcrypt.hashSync("password123", 12), // Hash the password
      name: "Test User",
      role: "seller",
      createdAt: new Date().toISOString(),
      profile: {
        bio: "Passionate artisan creating unique handmade crafts",
        location: "San Francisco, CA",
        specialties: ["Ceramics", "Woodworking", "Textiles"],
        avatar: "/placeholder-user.jpg",
        website: "https://example.com",
        phone: "+1-555-0123"
      }
    }
    mockUsers.push(testUser)
    console.log("Created test user:", testUser.email)
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Ensure we have at least one test user
    ensureTestUserExists()

    // Find user by email
    const user = findUserByEmail(email)
    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      )
    }

    // Validate password
    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      )
    }

    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: user.id, 
        email: user.email,
        role: user.role 
      },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    )

    // Return success with token
    return NextResponse.json({
      message: "Login successful",
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      },
      token
    })

  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
} 