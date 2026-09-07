import type { MetadataRoute } from "next";

// Injected by project-writer.ts from the planned page list — deterministic,
// not AI-authored, so it always matches the routes that actually exist.
const SITE_URL = "https://example.com";
const ROUTES: string[] = ["/","/ai-marketing-employee","/ai-marketing-employee/seo-aeo","/ai-marketing-employee/social-media","/ai-marketing-employee/google-ads","/ai-marketing-employee/content","/ai-marketing-employee/website-growth","/ai-marketing-employee/super-growth","/solutions","/pricing","/about-us","/team","/results","/contact","/blog","/blog/[slug]","/services/seo","/services/aeo-geo","/services/local-seo","/services/google-business-profile","/services/content-marketing","/services/google-ads","/services/meta-ads","/services/social-media-marketing","/services/web-design","/services/web-development","/services/custom-programming","/services/crm-automation","/services/reporting-dashboards","/services/website-maintenance","/services/online-reputation-management","/industries","/industries/dental","/industries/healthcare","/industries/home-services-marketing","/industries/roofing-marketing","/industries/construction-marketing","/industries/fitness-marketing","/industries/aesthetics-marketing","/industries/real-estate-marketing","/industries/professional-services-marketing","/industries/ecommerce-marketing","/industries/automotive","/industries/law-firm-marketing","/privacy-policy","/terms-of-service","/sitemap","/thank-you","/404"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route === "/" ? "" : route}`,
    lastModified: new Date(),
  }));
}
