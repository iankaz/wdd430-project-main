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
- **Authentication:** Custom authentication system
- **Deployment:** Vercel-ready

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

### ✅ **Completed Features:**

#### 1. **Landing Page**
- Hero section showcasing handmade crafts
- Featured artisans and their work
- Call-to-action for both artisans and customers
- Responsive navigation with modern design
- Professional footer with links

#### 2. **User Authentication**
- User registration with email validation
- User login with remember me functionality
- Form validation and error handling
- Responsive authentication forms
- API endpoints for registration

#### 3. **Artisan Dashboard**
- Profile management and craft showcase
- Sales analytics and insights
- Recent orders tracking
- Performance metrics
- Quick actions for common tasks

#### 4. **Product Catalog**
- Product browsing with categories
- Search and filter functionality
- Product cards with ratings and reviews
- Add to cart functionality
- Responsive product grid

#### 5. **Artisan Profiles**
- Artisan showcase with specialties
- Rating and review system
- Follower functionality
- Location and contact information
- Portfolio display

#### 6. **Customer Reviews**
- Comprehensive review system
- Rating distribution visualization
- Verified purchase badges
- Helpful vote system
- Review filtering and sorting

#### 7. **Project Showcase**
- Artisan project funding platform
- Progress tracking and updates
- Backer statistics
- Project categories and tags
- Support and sharing features

#### 8. **Responsive Design**
- Mobile-first approach
- Tablet and desktop optimization
- Touch-friendly interfaces
- Consistent design across devices

## Repository Information
- **Repository URL:** https://github.com/iankaz/wdd430-project
- **Project Board:** [To be provided after GitHub project setup]
- **Live Demo:** [To be provided after deployment]

## Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/iankaz/wdd430-project
   cd wdd430-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure
```
wdd430-project/
├── app/
│   ├── page.tsx              # Landing page
│   ├── layout.tsx            # Root layout with navigation
│   ├── globals.css           # Global styles and theme
│   ├── auth/
│   │   ├── login/
│   │   │   └── page.tsx      # Login page
│   │   └── register/
│   │       └── page.tsx      # Registration page
│   ├── dashboard/
│   │   └── page.tsx          # Artisan dashboard
│   ├── products/
│   │   └── page.tsx          # Product catalog
│   ├── sellers/
│   │   └── page.tsx          # Artisan profiles
│   ├── reviews/
│   │   └── page.tsx          # Customer reviews
│   ├── projects/
│   │   └── page.tsx          # Project showcase
│   └── api/
│       └── auth/
│           └── register/
│               └── route.ts  # Registration API
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── auth/
│   │   ├── LoginForm.tsx     # Login form component
│   │   └── RegistrationForm.tsx # Registration form component
│   └── theme-provider.tsx    # Theme provider
├── lib/
│   └── utils.ts              # Utility functions
├── public/                   # Static assets
├── tailwind.config.ts        # Tailwind configuration
├── next.config.mjs           # Next.js configuration
└── README.md                 # This file
```

## Key Features

### **Authentication System**
- Secure user registration and login
- Form validation with real-time feedback
- Responsive design for all devices
- Error handling and user feedback

### **Product Management**
- Comprehensive product catalog
- Advanced search and filtering
- Product ratings and reviews
- Shopping cart functionality

### **Artisan Tools**
- Dashboard with analytics
- Order management
- Customer communication
- Performance tracking

### **Community Features**
- Artisan profiles and portfolios
- Customer review system
- Project funding platform
- Social features (following, sharing)

## Future Enhancements
- **Database Integration:** PostgreSQL with Prisma ORM
- **Real-time Features:** WebSocket integration for live updates
- **Payment Processing:** Stripe integration for secure transactions
- **File Upload:** Image upload and management system
- **Advanced Analytics:** Detailed reporting and insights
- **Mobile App:** React Native mobile application
- **Email Notifications:** Transactional email system
- **SEO Optimization:** Meta tags and structured data

## Deployment

### **Vercel Deployment**
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### **Environment Variables**
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@artisancrafthub.com or create an issue in the GitHub repository.

---

**Built with ❤️ for the handmade craft community**
