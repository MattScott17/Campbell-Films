import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://filmsbycampbell.com'
  return [
    { url: base,                lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/portfolio`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/info`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`,   lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${base}/san-diego-wedding-photography`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/san-diego-super-8-wedding-film`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ]
}
