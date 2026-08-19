import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Building2,
  FileText,
  Globe2,
  HeartPulse,
  Home,
  Megaphone,
  Palette,
  Search,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Target,
  Users,
  Video,
  Wrench,
} from "lucide-react";

export interface NavigationItem {
  label: string;
  href?: string;
  description?: string;
  icon?: LucideIcon;
  featured?: boolean;
}

export interface NavigationMenu {
  label: string;
  href?: string;
  items?: NavigationItem[];
}

export const navigation: NavigationMenu[] = [
  {
    label: "Home",
    href: "/",
  },

  {
    label: "Services",
    items: [
      {
        label: "Search Engine Optimization",
        href: "/services/seo",
        description: "Build long-term organic visibility and search growth.",
        icon: Search,
      },
      {
        label: "Google Ads",
        href: "/services/google-ads",
        description: "Reach high-intent customers with performance campaigns.",
        icon: Target,
      },
      {
        label: "Meta Ads",
        href: "/services/meta-ads",
        description: "Grow reach, leads and conversions across Meta platforms.",
        icon: Megaphone,
      },
      {
        label: "Social Media Marketing",
        href: "/services/social-media",
        description: "Build a stronger brand and engage your audience.",
        icon: Users,
      },
      {
        label: "Website Design & Development",
        href: "/services/web-development",
        description: "Modern, responsive websites designed for growth.",
        icon: Globe2,
      },
      {
        label: "Content Marketing",
        href: "/services/content-marketing",
        description: "Create useful content that attracts and converts.",
        icon: FileText,
      },
      {
        label: "Email Marketing",
        href: "/services/email-marketing",
        description: "Build relationships and increase customer retention.",
        icon: Smartphone,
      },
      {
        label: "Analytics & Reporting",
        href: "/services/analytics",
        description: "Turn marketing data into actionable insights.",
        icon: BarChart3,
      },
      {
        label: "Marketing Automation",
        href: "/services/marketing-automation",
        description: "Automate repetitive marketing workflows and processes.",
        icon: Bot,
      },
      {
        label: "AI-assisted Marketing",
        href: "/services/ai-marketing",
        description: "Use AI where it creates meaningful marketing value.",
        icon: Sparkles,
      },
      {
        label: "View All Services",
        href: "/services",
        icon: Wrench,
        featured: true,
      },
    ],
  },

  {
    label: "Industries",
    items: [
      {
        label: "Government",
        href: "/industries/government",
        description: "Digital solutions for government organizations and projects.",
        icon: Building2,
      },
      {
        label: "Education",
        href: "/industries/education",
        description: "Help educational brands reach and engage more people.",
        icon: FileText,
      },
      {
        label: "Healthcare",
        href: "/industries/healthcare",
        description: "Build trusted digital experiences for healthcare brands.",
        icon: HeartPulse,
      },
      {
        label: "Real Estate",
        href: "/industries/real-estate",
        description: "Generate visibility, leads and opportunities online.",
        icon: Building2,
      },
      {
        label: "E-commerce",
        href: "/industries/ecommerce",
        description: "Increase traffic, conversions and online revenue.",
        icon: ShoppingBag,
      },
      {
        label: "Local Business",
        href: "/industries/local-business",
        description: "Help local businesses become easier to discover online.",
        icon: Home,
      },
      {
        label: "View All Industries",
        href: "/industries",
        icon: BriefcaseBusiness,
        featured: true,
      },
    ],
  },

  {
    label: "Our Work",
    items: [
      {
        label: "Projects",
        href: "/work",
        description: "Explore selected digital marketing and technology projects.",
        icon: BriefcaseBusiness,
      },
      {
        label: "Case Studies",
        href: "/work/case-studies",
        description: "See the strategy, execution and outcomes behind our work.",
        icon: BarChart3,
      },
      {
        label: "Client Results",
        href: "/work/results",
        description: "Explore measurable growth and campaign outcomes.",
        icon: Target,
      },
      {
        label: "Project Videos",
        href: "/work/videos",
        description: "Watch project demos, campaigns and visual case studies.",
        icon: Video,
      },
      {
        label: "View All Work",
        href: "/work",
        icon: Palette,
        featured: true,
      },
    ],
  },

  {
    label: "Company",
    items: [
      {
        label: "About Us",
        href: "/company/about",
        description: "Learn about The Media Buddy and how we work.",
        icon: Users,
      },
      {
        label: "Our Process",
        href: "/company/process",
        description: "Discover our simple approach to digital growth.",
        icon: Wrench,
      },
      {
        label: "Our Team",
        href: "/company/team",
        description: "Meet the people behind our digital work.",
        icon: Users,
      },
      {
        label: "Careers",
        href: "/company/careers",
        description: "Explore opportunities to work with us.",
        icon: BriefcaseBusiness,
      },
      {
        label: "Contact Us",
        href: "/contact",
        description: "Let's discuss your next digital project.",
        icon: Smartphone,
        featured: true,
      },
    ],
  },

  {
    label: "Resources",
    items: [
      {
        label: "Blog",
        href: "/resources/blog",
        description: "Digital marketing insights, ideas and strategies.",
        icon: FileText,
      },
      {
        label: "SEO Guides",
        href: "/resources/guides/seo",
        description: "Practical guides for improving search visibility.",
        icon: Search,
      },
      {
        label: "Marketing Guides",
        href: "/resources/guides/marketing",
        description: "Useful guides for modern digital marketing.",
        icon: Megaphone,
      },
      {
        label: "FAQs",
        href: "/resources/faqs",
        description: "Answers to common digital marketing questions.",
        icon: FileText,
      },
      {
        label: "Free Resources",
        href: "/resources/free",
        description: "Useful tools and resources for growing online.",
        icon: Sparkles,
        featured: true,
      },
    ],
  },

  {
    label: "Contact",
    href: "/contact",
  },
];
