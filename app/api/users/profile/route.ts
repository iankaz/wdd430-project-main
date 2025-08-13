import { NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

// Mock user storage - in production, this would be a database
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

// Helper function to find user index by ID
function findUserIndexById(id: string) {
  return mockUsers.findIndex(user => user.id === id)
}

// GET - Retrieve user profile
export async function GET(request: NextRequest) {
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

    // Find user by ID
    const user = findUserById(decoded.userId)
    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      )
    }

    // Return user profile (excluding sensitive data)
    return NextResponse.json({
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      profile: user.profile
    })

  } catch (error) {
    console.error("Get profile error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

// PUT - Update user profile
export async function PUT(request: NextRequest) {
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

    const body = await request.json()
    const { name, bio, location, specialties, website, phone } = body

    // Find user by ID
    const userIndex = findUserIndexById(decoded.userId)
    if (userIndex === -1) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      )
    }

    // Update user profile
    const updatedUser = {
      ...mockUsers[userIndex],
      name: name || mockUsers[userIndex].name,
      profile: {
        ...mockUsers[userIndex].profile,
        bio: bio || mockUsers[userIndex].profile.bio,
        location: location || mockUsers[userIndex].profile.location,
        specialties: specialties || mockUsers[userIndex].profile.specialties,
        website: website || mockUsers[userIndex].profile.website,
        phone: phone || mockUsers[userIndex].profile.phone
      }
    }

    mockUsers[userIndex] = updatedUser

    // Return updated profile
    return NextResponse.json({
      message: "Profile updated successfully",
      user: {
        id: updatedUser.id,
        email: updatedUser.email,
        name: updatedUser.name,
        role: updatedUser.role,
        profile: updatedUser.profile
      }
    })

  } catch (error) {
    console.error("Update profile error:", error)
    return NextResponse.json(
      { error: "Failed to update profile" },
      { status: 500 }
    )
  }
} 