import type { MetadataRoute } from 'next'

const BASE_URL = 'https://joelpaolo.design'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '/', changeFrequency: 'monthly' as const, priority: 1 },
    { path: '/case-studies', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/case-studies/mm-ia', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/case-studies/procare-curriculum', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/design-systems', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/ai-projects', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/ai-projects/moove-schedule-autopilot', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/about', changeFrequency: 'monthly' as const, priority: 0.6 },
  ]

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
