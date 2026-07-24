import type { MetadataRoute } from "next";
import { getProjects } from "@/content/site";

const siteUrl = "https://msiidf-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projetos", "/sobre", "/fluxo-de-trabalho", "/contato"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes = getProjects("pt").map((project) => ({
    url: `${siteUrl}/projetos/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
