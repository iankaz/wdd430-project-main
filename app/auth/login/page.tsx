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
      // TODO: Call backend API to login user
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      alert("Login successful for " + data.email)
    } catch (err) {
      setError("Login failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-beige-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <LoginForm onSubmit={handleLogin} loading={loading} error={error} />
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/auth/register">
              <Button variant="link" className="p-0 text-teal-600 hover:text-teal-700">
                Create one here
              </Button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
