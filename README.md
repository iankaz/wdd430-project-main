# ArtisanCraft Hub - Handmade Craft Marketplace

## WDD 430: Web Full-Stack Development - Group Project
**Student:** Ian Kazembe
**Course:** WDD 430 - Web Full-Stack Development
**Semester:** Winter 2024

## Project Overview

ArtisanCraft Hub is a comprehensive marketplace platform designed to connect artisans with customers who appreciate handmade crafts. This application enables artisans to showcase their work and customers to discover unique, handcrafted items.

### Purpose
- Provide artisans with a platform to showcase their handmade crafts
- Enable customers to discover and purchase unique handmade items
- Facilitate direct communication between artisans and customers
- Support the handmade craft community with a modern, user-friendly platform

### Technology Stack
- **Frontend:** Next.js 14, React, TypeScript
- **Styling:** Tailwind CSS, shadcn/ui components
- **Backend:** Next.js API Routes, Server Actions
- **Database:** PostgreSQL (planned integration)
- **Authentication:** NextAuth.js (planned)
- **Deployment:** Vercel

## Design Theme

### Color Palette
- **Primary:** Dark Teal (#005151) - Trust, craftsmanship, authenticity
- **Secondary:** Warm Beige (#9F8B7AF) - Warmth, natural, handmade feel
- **Accent:** Light Cream (#EEE5DD) - Clean, elegant, premium
- **Background:** White (#FFFFFF) - Clean, modern, accessible

### Typography
- **Headings:** EDU NSW ACT Hand (cursive) - Artistic, personal, handmade feel
- **Body:** Roboto Variable - Readable, modern, accessible
- **UI Elements:** Mulish - Clean, professional, consistent

### Design Principles
- **Clean & Modern:** Minimalist design with plenty of white space
- **Responsive:** Mobile-first approach with responsive layouts
- **Accessible:** High contrast ratios, semantic HTML, ARIA labels
- **Consistent:** Unified component library and design system

## Features Implemented

### 1. Landing Page
- Hero section showcasing handmade crafts
- Featured artisans and their work
- Call-to-action for both artisans and customers
- Responsive navigation
- Professional footer

### 2. Artisan Dashboard
- Profile management and craft showcase
- Inventory and order management
- Customer messaging center
- Sales analytics and insights

### 3. Customer Browse Page
- Craft item browsing with categories
- Search and filter functionality
- Artisan profiles and reviews
- Shopping cart and checkout process

## Repository Information
- **Repository URL:** https://github.com/iankaz/wdd430-project
- **Project Board:** [To be provided after GitHub project setup]
- **Live Demo:** [To be provided after deployment]

## Local Development Setup

1. Clone the repository:
   \`\`\`bash
   git clone [repository-url]
   cd taskflow-project
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure
\`\`\`
taskflow-project/
├── app/
│   ├── page.tsx              # Landing page
│   ├── dashboard/
│   │   └── page.tsx          # Dashboard
│   ├── projects/
│   │   └── page.tsx          # Projects listing
│   └── layout.tsx            # Root layout
├── components/
│   └── ui/                   # shadcn/ui components
├── lib/
│   └── utils.ts              # Utility functions
└── README.md                 # This file
\`\`\`

## Future Enhancements
- User authentication and authorization
- Database integration for data persistence
- Real-time updates with WebSockets
- File upload and sharing capabilities
- Advanced analytics and reporting
- Mobile application
- Third-party integrations (Slack, GitHub, etc.)
