"use client"

import React, { useState } from "react"
import LoginForm from "@/components/auth/LoginForm"
import Link from "next/link"
import Button from "@/components/ui/button"

export default function LoginPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleLogin = async (data: { email: string; password: string; rememberMe: boolean }) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          email: data.email, 
          password: data.password 
        }),
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Login failed")
      }
      
      const result = await response.json()
      
      // Store token in localStorage (in production, use secure httpOnly cookies)
      if (data.rememberMe) {
        localStorage.setItem("authToken", result.token)
        localStorage.setItem("user", JSON.stringify(result.user))
      } else {
        sessionStorage.setItem("authToken", result.token)
        sessionStorage.setItem("user", JSON.stringify(result.user))
      }
      
      alert("Login successful for " + result.user.name)
      // TODO: Redirect to dashboard or previous page
      
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EEE5DD] to-[#9F8B7A] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <LoginForm onSubmit={handleLogin} loading={loading} error={error} />
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/auth/register">
              <Button variant="link" className="p-0 text-[#005151] hover:text-[#003D3D]">
                Create one here
              </Button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
