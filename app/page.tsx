import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, CheckSquare, Calendar, BarChart3 } from "lucide-react"
import Link from "next/link"
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Handcrafted Haven | Unique Artisan Marketplace</title>
        <meta name="description" content="Discover, connect, and support local creators at Handcrafted Haven. Shop unique, handmade treasures from talented artisans." />
      </Head>
      <section>
        <h1>Welcome to Handcrafted Haven</h1>
        <p>Your marketplace for unique, artisan-made treasures. Discover, connect, and support local creators!</p>
      </section>
    </>
  );
}
