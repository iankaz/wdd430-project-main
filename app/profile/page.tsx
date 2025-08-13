"use client"

import React, { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Button from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { User, MapPin, Globe, Phone, Edit, Save, X } from "lucide-react"

interface UserProfile {
  id: string
  email: string
  name: string
  role: string
  profile: {
    bio: string
    location: string
    specialties: string[]
    avatar: string
    website: string
    phone: string
  }
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    location: "",
    website: "",
    phone: "",
    specialties: [] as string[]
  })

  useEffect(() => {
    loadProfile()
  }, [])

  const loadProfile = async () => {
    try {
      const token = localStorage.getItem("authToken") || sessionStorage.getItem("authToken")
      if (!token) {
        setError("Please log in to view your profile")
        setLoading(false)
        return
      }

      const response = await fetch("/api/users/profile", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })

      if (!response.ok) {
        throw new Error("Failed to load profile")
      }

      const userProfile = await response.json()
      setProfile(userProfile)
      setFormData({
        name: userProfile.name,
        bio: userProfile.profile.bio,
        location: userProfile.profile.location,
        website: userProfile.profile.website,
        phone: userProfile.profile.phone,
        specialties: userProfile.profile.specialties
      })
    } catch (err) {
      setError("Failed to load profile")
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    try {
      setSaving(true)
      setError(null)
      setSuccess(null)

      const token = localStorage.getItem("authToken") || sessionStorage.getItem("authToken")
      if (!token) {
        setError("Please log in to update your profile")
        return
      }

      const response = await fetch("/api/users/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error("Failed to update profile")
      }

      const result = await response.json()
      setProfile(result.user)
      setSuccess("Profile updated successfully!")
      setEditing(false)
    } catch (err) {
      setError("Failed to update profile")
    } finally {
      setSaving(false)
    }
  }

  const handleCancel = () => {
    if (profile) {
      setFormData({
        name: profile.name,
        bio: profile.profile.bio,
        location: profile.profile.location,
        website: profile.profile.website,
        phone: profile.profile.phone,
        specialties: profile.profile.specialties
      })
    }
    setEditing(false)
  }

  const addSpecialty = (specialty: string) => {
    if (specialty.trim() && !formData.specialties.includes(specialty.trim())) {
      setFormData(prev => ({
        ...prev,
        specialties: [...prev.specialties, specialty.trim()]
      }))
    }
  }

  const removeSpecialty = (specialty: string) => {
    setFormData(prev => ({
      ...prev,
      specialties: prev.specialties.filter(s => s !== specialty)
    }))
  }

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center">Loading profile...</div>
      </div>
    )
  }

  if (error && !profile) {
    return (
      <div className="container mx-auto p-6">
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    )
  }

  if (!profile) {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center">Profile not found</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Profile Settings</h1>
        {!editing ? (
          <Button onClick={() => setEditing(true)}>
            <Edit className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button onClick={handleSave} disabled={saving}>
              <Save className="mr-2 h-4 w-4" />
              {saving ? "Saving..." : "Save Changes"}
            </Button>
            <Button variant="outline" onClick={handleCancel}>
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
          </div>
        )}
      </div>

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert className="mb-6">
          <AlertDescription>{success}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Profile Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 flex items-center justify-center mb-4">
                <User className="w-12 h-12 text-gray-500" />
              </div>
              <h3 className="text-lg font-semibold">{profile.name}</h3>
              <p className="text-sm text-muted-foreground">{profile.email}</p>
              <Badge variant="secondary" className="mt-2">
                {profile.role}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Profile Details */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Profile Details</CardTitle>
            <CardDescription>
              Manage your personal information and preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h4 className="font-medium">Basic Information</h4>
              
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  disabled={!editing}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={formData.bio}
                  onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                  disabled={!editing}
                  placeholder="Tell us about yourself and your craft..."
                  rows={3}
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="font-medium">Contact Information</h4>
              
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    disabled={!editing}
                    className="pl-10"
                    placeholder="City, State/Country"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <div className="relative">
                  <Globe className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="website"
                    value={formData.website}
                    onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                    disabled={!editing}
                    className="pl-10"
                    placeholder="https://yourwebsite.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    disabled={!editing}
                    className="pl-10"
                    placeholder="+1-555-0123"
                  />
                </div>
              </div>
            </div>

            {/* Specialties */}
            {profile.role === "seller" && (
              <div className="space-y-4">
                <h4 className="font-medium">Specialties</h4>
                
                <div className="space-y-2">
                  <Label>Current Specialties</Label>
                  <div className="flex flex-wrap gap-2">
                    {formData.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary">
                        {specialty}
                        {editing && (
                          <button
                            onClick={() => removeSpecialty(specialty)}
                            className="ml-2 text-red-500 hover:text-red-700"
                          >
                            ×
                          </button>
                        )}
                      </Badge>
                    ))}
                  </div>
                </div>

                {editing && (
                  <div className="space-y-2">
                    <Label htmlFor="newSpecialty">Add Specialty</Label>
                    <div className="flex gap-2">
                      <Input
                        id="newSpecialty"
                        placeholder="e.g., Ceramics, Woodworking"
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault()
                            addSpecialty((e.target as HTMLInputElement).value)
                            ;(e.target as HTMLInputElement).value = ""
                          }
                        }}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          const input = document.getElementById("newSpecialty") as HTMLInputElement
                          addSpecialty(input.value)
                          input.value = ""
                        }}
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 