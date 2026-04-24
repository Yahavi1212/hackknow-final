export interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  subcategory: string;
  image: string;
  rating: number;
  reviews: number;
  sales: number;
  isNew?: boolean;
  isBestseller?: boolean;
  tags: string[];
  author: string;
  date: string;
  isFree?: boolean;
}

export interface Category {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  itemCount: number;
  subcategories: { name: string; slug: string }[];
}

export const categories: Category[] = [
  {
    id: "cat-1",
    title: "Themes & Templates",
    slug: "themes-templates",
    description: "Premium website templates, WordPress themes, and landing page designs for every industry.",
    image: "/images/categories/themes-templates.png",
    itemCount: 2450,
    subcategories: [
      { name: "Portfolio", slug: "portfolio" },
      { name: "Business", slug: "business" },
      { name: "Ecommerce", slug: "ecommerce" },
      { name: "Landing Pages", slug: "landing-pages" },
      { name: "Agency", slug: "agency" },
      { name: "Blog", slug: "blog" },
    ],
  },
  {
    id: "cat-2",
    title: "Excel & Sheets",
    slug: "excel-sheets",
    description: "Professional Excel templates, Google Sheets, and spreadsheet solutions for business and personal use.",
    image: "/images/categories/excel-sheets.png",
    itemCount: 1890,
    subcategories: [
      { name: "Finance", slug: "finance" },
      { name: "Budget", slug: "budget" },
      { name: "Invoice", slug: "invoice" },
      { name: "HR", slug: "hr" },
      { name: "Business", slug: "business" },
      { name: "Tracker", slug: "tracker" },
    ],
  },
  {
    id: "cat-3",
    title: "PowerPoint Decks",
    slug: "powerpoint-decks",
    description: "Stunning presentation templates, pitch decks, and slide designs to captivate your audience.",
    image: "/images/categories/powerpoint-decks.png",
    itemCount: 1250,
    subcategories: [
      { name: "Business", slug: "business" },
      { name: "Pitch Deck", slug: "pitch-deck" },
      { name: "Education", slug: "education" },
      { name: "Marketing", slug: "marketing" },
      { name: "Creative", slug: "creative" },
    ],
  },
  {
    id: "cat-4",
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "Complete marketing toolkits, social media templates, and campaign assets for modern marketers.",
    image: "/images/categories/digital-marketing.png",
    itemCount: 3100,
    subcategories: [
      { name: "Social Media", slug: "social-media" },
      { name: "Email Marketing", slug: "email-marketing" },
      { name: "SEO Tools", slug: "seo-tools" },
      { name: "Ad Templates", slug: "ad-templates" },
      { name: "Analytics", slug: "analytics" },
    ],
  },
  {
    id: "cat-5",
    title: "HR & Finance",
    slug: "hr-finance",
    description: "Professional dashboards, financial models, HR management tools, and business intelligence solutions.",
    image: "/images/categories/hr-finance.png",
    itemCount: 1780,
    subcategories: [
      { name: "Dashboards", slug: "dashboards" },
      { name: "Payroll", slug: "payroll" },
      { name: "Recruitment", slug: "recruitment" },
      { name: "Financial Models", slug: "financial-models" },
      { name: "KPI Trackers", slug: "kpi-trackers" },
    ],
  },
  {
    id: "cat-6",
    title: "Social Media Kits",
    slug: "social-media",
    description: "Ready-to-use Instagram, TikTok, YouTube, and LinkedIn content templates and branding kits.",
    image: "/images/categories/social-media.png",
    itemCount: 2320,
    subcategories: [
      { name: "Instagram", slug: "instagram" },
      { name: "TikTok", slug: "tiktok" },
      { name: "YouTube", slug: "youtube" },
      { name: "LinkedIn", slug: "linkedin" },
      { name: "Branding Kits", slug: "branding-kits" },
    ],
  },
  {
    id: "cat-7",
    title: "Free Resources",
    slug: "free-resources",
    description: "Download free templates, worksheets, planners, and digital assets to boost your productivity.",
    image: "/images/categories/free-resources.png",
    itemCount: 850,
    subcategories: [
      { name: "Free Excel", slug: "free-excel" },
      { name: "Free Dashboards", slug: "free-dashboards" },
      { name: "Free Templates", slug: "free-templates" },
      { name: "Free PDF", slug: "free-pdf" },
      { name: "Free Prompts", slug: "free-prompts" },
    ],
  },
];

export const products: Product[] = [
  {
    id: "p1",
    title: "Modern Resume CV Template",
    slug: "modern-resume-cv-template",
    description: "Professional, ATS-friendly resume template with clean typography and modern design. Includes 3 color variations and cover letter template.",
    price: 12,
    originalPrice: 18,
    category: "themes-templates",
    subcategory: "portfolio",
    image: "/images/products/product-1.png",
    rating: 4.8,
    reviews: 234,
    sales: 1847,
    isBestseller: true,
    tags: ["resume", "cv", "template", "job"],
    author: "Design Studio",
    date: "2026-03-15",
  },
  {
    id: "p2",
    title: "SaaS Analytics Dashboard UI Kit",
    slug: "saas-analytics-dashboard-ui-kit",
    description: "Complete SaaS dashboard UI kit with 50+ screens, charts, data visualizations, and component library. Figma and Sketch files included.",
    price: 49,
    originalPrice: 79,
    category: "themes-templates",
    subcategory: "business",
    image: "/images/products/product-2.png",
    rating: 4.9,
    reviews: 156,
    sales: 923,
    isNew: true,
    isBestseller: true,
    tags: ["saas", "dashboard", "ui-kit", "figma"],
    author: "UI Masters",
    date: "2026-04-10",
  },
  {
    id: "p3",
    title: "Minimalist Logo Bundle",
    slug: "minimalist-logo-bundle",
    description: "Collection of 50+ minimalist logo templates in vector format. Fully editable, scalable, and perfect for any brand identity project.",
    price: 29,
    category: "digital-marketing",
    subcategory: "branding-kits",
    image: "/images/products/product-3.png",
    rating: 4.7,
    reviews: 312,
    sales: 2156,
    isBestseller: true,
    tags: ["logo", "branding", "vector", "minimal"],
    author: "BrandCraft",
    date: "2026-02-20",
  },
  {
    id: "p4",
    title: "Business Growth Plan Template",
    slug: "business-growth-plan-template",
    description: "Comprehensive business plan template with financial projections, market analysis, and growth strategy sections. 40+ editable slides.",
    price: 35,
    originalPrice: 45,
    category: "powerpoint-decks",
    subcategory: "business",
    image: "/images/products/product-4.png",
    rating: 4.6,
    reviews: 189,
    sales: 876,
    tags: ["business-plan", "powerpoint", "strategy", "finance"],
    author: "BizTools",
    date: "2026-01-28",
  },
  {
    id: "p5",
    title: "Social Media Content Calendar",
    slug: "social-media-content-calendar",
    description: "Complete social media content calendar with posting schedules, content pillars, and campaign trackers for all major platforms.",
    price: 19,
    category: "social-media",
    subcategory: "instagram",
    image: "/images/products/product-5.png",
    rating: 4.8,
    reviews: 267,
    sales: 1432,
    isNew: true,
    tags: ["social-media", "calendar", "content", "planner"],
    author: "SocialPro",
    date: "2026-04-05",
  },
  {
    id: "p6",
    title: "Ecommerce Website Template",
    slug: "ecommerce-website-template",
    description: "Fully responsive ecommerce website template with product pages, cart, checkout flow, and admin dashboard. Built with modern HTML/CSS.",
    price: 59,
    originalPrice: 89,
    category: "themes-templates",
    subcategory: "ecommerce",
    image: "/images/products/product-6.png",
    rating: 4.9,
    reviews: 198,
    sales: 756,
    isNew: true,
    tags: ["ecommerce", "website", "template", "responsive"],
    author: "WebWizards",
    date: "2026-04-12",
  },
  {
    id: "p7",
    title: "3D UI Icon Pack (500+)",
    slug: "3d-ui-icon-pack",
    description: "Massive collection of 500+ 3D-style UI icons in SVG, PNG, and Figma formats. Vibrant gradients, perfect for modern app interfaces.",
    price: 24,
    category: "digital-marketing",
    subcategory: "ad-templates",
    image: "/images/products/product-7.png",
    rating: 4.7,
    reviews: 423,
    sales: 2890,
    isBestseller: true,
    tags: ["icons", "3d", "ui", "figma"],
    author: "IconForge",
    date: "2026-02-15",
  },
  {
    id: "p8",
    title: "Project Management Notion Template",
    slug: "project-management-notion-template",
    description: "All-in-one project management workspace for Notion with Kanban boards, Gantt charts, task trackers, and team collaboration tools.",
    price: 15,
    originalPrice: 25,
    category: "excel-sheets",
    subcategory: "tracker",
    image: "/images/products/product-8.png",
    rating: 4.5,
    reviews: 145,
    sales: 678,
    isFree: false,
    tags: ["notion", "project-management", "productivity", "template"],
    author: "ProductivityHub",
    date: "2026-03-22",
  },
  {
    id: "p9",
    title: "HR Analytics Dashboard",
    slug: "hr-analytics-dashboard",
    description: "Professional HR analytics dashboard with employee metrics, payroll visualization, recruitment tracking, and performance analytics.",
    price: 39,
    category: "hr-finance",
    subcategory: "dashboards",
    image: "/images/products/product-2.png",
    rating: 4.6,
    reviews: 98,
    sales: 432,
    tags: ["hr", "dashboard", "analytics", "excel"],
    author: "DataDriven",
    date: "2026-03-01",
  },
  {
    id: "p10",
    title: "Monthly Budget Tracker",
    slug: "monthly-budget-tracker",
    description: "Easy-to-use monthly budget tracker with automated calculations, expense categorization, savings goals, and visual reports.",
    price: 0,
    category: "excel-sheets",
    subcategory: "budget",
    image: "/images/products/product-8.png",
    rating: 4.4,
    reviews: 567,
    sales: 4520,
    isFree: true,
    tags: ["budget", "excel", "tracker", "free"],
    author: "FinanceFree",
    date: "2026-01-15",
  },
  {
    id: "p11",
    title: "Startup Pitch Deck Pro",
    slug: "startup-pitch-deck-pro",
    description: "Investor-grade pitch deck template with 25+ slides covering problem, solution, market size, traction, team, and financials.",
    price: 45,
    originalPrice: 65,
    category: "powerpoint-decks",
    subcategory: "pitch-deck",
    image: "/images/products/product-4.png",
    rating: 4.9,
    reviews: 201,
    sales: 1123,
    isBestseller: true,
    tags: ["pitch-deck", "startup", "investor", "powerpoint"],
    author: "PitchPerfect",
    date: "2026-02-28",
  },
  {
    id: "p12",
    title: "Instagram Story Templates Pack",
    slug: "instagram-story-templates-pack",
    description: "100+ fully editable Instagram story templates in Canva and PSD formats. Perfect for influencers, brands, and content creators.",
    price: 22,
    category: "social-media",
    subcategory: "instagram",
    image: "/images/products/product-7.png",
    rating: 4.8,
    reviews: 389,
    sales: 2567,
    isNew: true,
    tags: ["instagram", "stories", "templates", "social"],
    author: "InstaDesign",
    date: "2026-04-18",
  },
];

export const getBestsellers = () => products.filter((p) => p.isBestseller);
export const getNewArrivals = () => products.filter((p) => p.isNew);
export const getFreeProducts = () => products.filter((p) => p.isFree);
export const getProductsByCategory = (slug: string) =>
  products.filter((p) => p.category === slug);
export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);
export const getRelatedProducts = (product: Product, limit = 4) =>
  products
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.category === product.category || p.tags.some((t) => product.tags.includes(t)))
    )
    .slice(0, limit);
