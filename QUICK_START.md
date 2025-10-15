# Quick Start Guide

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Visit http://localhost:3000**

## Project Structure

```
campbell-films/
├── app/                    # All pages
│   ├── page.tsx           # Homepage (/)
│   ├── about/             # About page (/about)
│   ├── contact/           # Contact page (/contact)
│   ├── info/              # Pricing & FAQ (/info)
│   ├── portfolio/         # Portfolio with tabs (/portfolio)
│   ├── wedding/           # Wedding gallery (/wedding)
│   └── lifestyle/         # Lifestyle gallery (/lifestyle)
├── components/            # Reusable components
└── public/images/         # Add your images here
```

## Next Steps

### 1. Add Your Images

Replace placeholders in:
- `components/home/Gallery.tsx` - Homepage gallery
- `components/PortfolioGallery.tsx` - Portfolio images
- `app/about/page.tsx` - Profile image

### 2. Add Hero Video

1. Add video to `/public/video/hero.mp4`
2. Uncomment video element in `components/home/Hero.tsx`

### 3. Update Contact Info

Edit these files:
- `components/Footer.tsx` - Email and social links
- `app/contact/page.tsx` - Contact email

### 4. Set Pricing

Edit `components/info/PricingSection.tsx` to add actual prices

### 5. Deploy

```bash
npm run build
npm start
```

Or deploy to Vercel:
```bash
npx vercel
```

## Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Need Help?

Check the full README.md for detailed documentation.
