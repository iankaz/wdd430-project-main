"use client"

import React, { useState } from "react"
import RegistrationForm from "@/components/auth/RegistrationForm"
import Link from "next/link"
import Button from "@/components/ui/button"

export default function RegisterPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleRegister = async (data: { email: string; password: string; confirmPassword: string }) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email, password: data.password }),
      })
      if (!response.ok) {
        throw new Error("Registration failed")
      }
      const result = await response.json()
      alert("Registration successful for " + result.email)
    } catch (err) {
      setError("Registration failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-beige-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <RegistrationForm onSubmit={handleRegister} loading={loading} error={error} />
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/auth/login">
              <Button variant="link" className="p-0 text-teal-600 hover:text-teal-700">
                Sign in here
              </Button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
