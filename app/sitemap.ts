import { MetadataRoute } from 'next';
import { SITE_INFO } from '@/constants/site';
import { PROJECTS } from '@/constants/projects';
import { ROUTES } from '@/constants/routes';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [ROUTES.Home,ROUTES.Projects,ROUTES.Resume].map((route) => ({
    url: `${SITE_INFO.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === ROUTES.Home ? 1 : 0.8,
  }));

  const projectRoutes = PROJECTS.map((project) => ({
    url: `${SITE_INFO.url}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));
  

  return [...routes, ...projectRoutes];
}
