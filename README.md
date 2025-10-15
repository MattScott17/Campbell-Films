# Campbell Films

A modern, elegant film photography website for Campbell Films - Zoe's photography business specializing in Super 8 videography and 35mm film photography.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with custom film-inspired color palette
- **React 19** - Latest React features

## Color Palette

The website features a warm, nostalgic, film-inspired color palette:

- **Cream**: `#fdfcfa` to `#d9bd94`
- **Warm Beige**: `#faf8f5` to `#b8a482`
- **Soft Brown**: `#f5f1ed` to `#8c7456`

## Project Structure

```
campbell-films/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── contact/             # Contact page with form
│   ├── info/                # Info & pricing page
│   ├── portfolio/           # Portfolio with tabbed gallery
│   ├── wedding/             # Wedding portfolio
│   ├── lifestyle/           # Lifestyle portfolio
│   ├── layout.tsx           # Root layout with navigation
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── home/               # Homepage components
│   │   ├── Hero.tsx
│   │   ├── IntroSection.tsx
│   │   ├── Gallery.tsx
│   │   ├── WhyFilmSection.tsx
│   │   └── BucketListSection.tsx
│   ├── info/               # Info page components
│   │   ├── PricingSection.tsx
│   │   └── FAQSection.tsx
│   ├── Navigation.tsx      # Header navigation
│   ├── Footer.tsx          # Footer component
│   ├── ContactForm.tsx     # Contact form
│   └── PortfolioGallery.tsx # Reusable gallery component
└── public/                 # Static assets
    └── images/             # Image directory (add your photos here)
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## Customization Guide

### Adding Images

Replace placeholder gradients with actual images:

1. Add images to `/public/images/` directory
2. Update image paths in components:
   - Homepage gallery: `components/home/Gallery.tsx`
   - Portfolio galleries: `components/PortfolioGallery.tsx`
   - About page profile: `app/about/page.tsx`

### Adding Video Background

To add a video background to the hero section:

1. Add your video file to `/public/video/`
2. Update `components/home/Hero.tsx` - uncomment the video element and update the path

### Updating Contact Information

Update email and social media links in:
- `components/Footer.tsx`
- `app/contact/page.tsx`

### Modifying Color Scheme

Edit the color palette in `tailwind.config.ts`:
```typescript
colors: {
  cream: { /* your colors */ },
  warmBeige: { /* your colors */ },
  softBrown: { /* your colors */ },
}
```

### Adding Pricing

Update pricing packages in `components/info/PricingSection.tsx`

### Customizing Content

All text content is directly in the component files. Search for the text you want to change and update it in place.

## Page Features

### Homepage (`/`)
- Video background hero with title overlay
- "Hi I'm Zoe" introduction section
- Recent work gallery grid
- "Why Super8/Film" informational section
- Bucket list destinations

### About (`/about`)
- Full bio with profile image
- Services offered
- Photography approach and philosophy

### Contact (`/contact`)
- Split-screen layout
- Contact form with name, email, phone, message fields
- Contact information display

### Info (`/info`)
- Three pricing package cards (Essential, Classic, Complete)
- Interactive FAQ accordion with 5 questions

### Portfolio (`/portfolio`)
- Tabbed interface (Wedding / Lifestyle)
- Responsive gallery grid

### Wedding (`/wedding`)
- Dedicated wedding portfolio gallery

### Lifestyle (`/lifestyle`)
- Dedicated lifestyle portfolio gallery

## Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Build for Production

```bash
npm run build
npm start
```

## Deployment

The site is ready to deploy to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform supporting Next.js

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [vercel.com](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

## Form Integration

The contact form currently shows an alert on submission. To integrate with a backend:

1. **Email services:** SendGrid, Mailgun, Resend
2. **Form handlers:** Formspree, Web3Forms
3. **API routes:** Create `/app/api/contact/route.ts`

Example with API route:
```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.json();
  // Send email using your preferred service
  return Response.json({ success: true });
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - All Rights Reserved

## Contact

For questions about this website, contact the developer or Zoe at Campbell Films.
