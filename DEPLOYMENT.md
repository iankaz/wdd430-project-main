# ArtisanCraft Hub - Deployment Guide

## Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or pnpm package manager
- Git repository access

### Local Development

1. **Install Dependencies**
   ```bash
   npm install --legacy-peer-deps
   # or
   pnpm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Production Build

1. **Build the Application**
   ```bash
   npm run build
   # or
   pnpm build
   ```

2. **Start Production Server**
   ```bash
   npm start
   # or
   pnpm start
   ```

## Vercel Deployment

### Automatic Deployment

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Import your repository

2. **Configure Project**
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`

3. **Environment Variables** (Optional)
   ```env
   NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
   ```

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically deploy on every push to main branch

### Manual Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

## GitHub Pages Deployment

1. **Add GitHub Pages Script**
   ```json
   {
     "scripts": {
       "export": "next build && next export",
       "deploy": "npm run export && touch out/.nojekyll"
     }
   }
   ```

2. **Create GitHub Action**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [ main ]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v2
           with:
             node-version: '18'
         - run: npm ci
         - run: npm run build
         - run: npm run export
         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

## Netlify Deployment

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Connect your GitHub repository

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Deploy**
   - Netlify will automatically deploy on every push

## Environment Configuration

### Development
Create `.env.local`:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Production
Set environment variables in your deployment platform:
```env
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

## Troubleshooting

### Common Issues

1. **Build Errors**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules .next
   npm install --legacy-peer-deps
   npm run build
   ```

2. **Port Already in Use**
   ```bash
   # Use different port
   npm run dev -- -p 3001
   ```

3. **Dependency Conflicts**
   ```bash
   # Use legacy peer deps
   npm install --legacy-peer-deps
   ```

### Performance Optimization

1. **Enable Compression**
   ```javascript
   // next.config.mjs
   const nextConfig = {
     compress: true,
     poweredByHeader: false
   }
   ```

2. **Image Optimization**
   ```javascript
   // next.config.mjs
   const nextConfig = {
     images: {
       domains: ['your-domain.com'],
       formats: ['image/webp', 'image/avif']
     }
   }
   ```

## Monitoring

### Vercel Analytics
- Enable Vercel Analytics in project settings
- Monitor performance and user behavior

### Error Tracking
- Add Sentry or similar error tracking
- Monitor application errors in production

## Security

### Environment Variables
- Never commit sensitive data to repository
- Use environment variables for secrets
- Rotate secrets regularly

### HTTPS
- Enable HTTPS in production
- Use secure headers
- Implement CSP policies

## Support

For deployment issues:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review platform-specific guides
3. Create an issue in the repository

---

**Happy Deploying! 🚀** 