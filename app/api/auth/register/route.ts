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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password, name, role = "buyer" } = body

    // Validate input
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: "Email, password, and name are required" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Validate password strength
    if (password.length < 8) {
      return NextResponse.json(
        { error: "Password must be at least 8 characters long" },
        { status: 400 }
      )
    }

    // Check if user already exists
    if (findUserByEmail(email)) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 409 }
      )
    }

    // Hash password
    const saltRounds = 12
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    // Create user object
    const newUser = {
      id: Date.now().toString(), // Generate unique ID
      email,
      password: hashedPassword,
      name,
      role,
      createdAt: new Date().toISOString(),
      profile: {
        bio: "",
        location: "",
        specialties: [],
        avatar: "/placeholder-user.jpg",
        website: "",
        phone: ""
      }
    }

    // Store user
    mockUsers.push(newUser)
    console.log("Registered new user:", newUser.email)

    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: newUser.id, 
        email: newUser.email,
        role: newUser.role 
      },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    )

    // Return success response
    return NextResponse.json({
      message: "User registered successfully",
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        role: newUser.role
      },
      token
    })

  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json(
      { error: "Registration failed" },
      { status: 500 }
    )
  }
}
