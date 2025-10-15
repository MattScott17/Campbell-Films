# Deployment Guide

## Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Method 1: Deploy via GitHub

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will auto-detect Next.js and configure everything
6. Click "Deploy"

Your site will be live in 2-3 minutes!

### Method 2: Deploy via CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts and your site will deploy automatically.

### Custom Domain

After deployment:
1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your custom domain (e.g., campbellfilms.com)
4. Follow DNS configuration instructions

## Netlify

1. Build your site:
   ```bash
   npm run build
   ```

2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `.next` folder
4. Or connect your GitHub repo for automatic deployments

## Other Platforms

### AWS Amplify
```bash
npm install -g @aws-amplify/cli
amplify init
amplify add hosting
amplify publish
```

### DigitalOcean App Platform
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `.next`
4. Deploy

## Environment Variables

If you add any environment variables (API keys, etc.):

1. Create `.env.local` file (already in .gitignore)
2. Add your variables:
   ```
   NEXT_PUBLIC_EMAIL_API_KEY=your_key_here
   ```
3. In Vercel/Netlify, add the same variables in the dashboard

## Pre-Deployment Checklist

- [ ] Replace placeholder images with actual photos
- [ ] Add hero video or update Hero component
- [ ] Update email addresses in Footer and Contact page
- [ ] Update Instagram/TikTok URLs in Footer
- [ ] Set actual pricing in Info page
- [ ] Test contact form submission
- [ ] Test all navigation links
- [ ] Check mobile responsiveness
- [ ] Run `npm run build` to verify no errors
- [ ] Test on different browsers

## Post-Deployment

### Analytics

Add Google Analytics:
1. Get tracking ID from analytics.google.com
2. Add to `app/layout.tsx`:
   ```tsx
   <Script
     src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
     strategy="afterInteractive"
   />
   ```

### SEO

Update meta tags in each page for better SEO:
```tsx
export const metadata: Metadata = {
  title: "Your Page Title",
  description: "Your page description",
  openGraph: {
    images: ['/og-image.jpg'],
  },
};
```

### Performance

After deployment, check:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

## Troubleshooting

### Build Fails
- Clear cache: `rm -rf .next node_modules && npm install`
- Check for TypeScript errors: `npm run lint`

### Images Not Loading
- Ensure images are in `/public/images/`
- Check image paths (case-sensitive)

### Styling Issues
- Verify Tailwind config is correct
- Check that globals.css is imported in layout.tsx

## Need Help?

Check Next.js deployment docs: https://nextjs.org/docs/deployment
