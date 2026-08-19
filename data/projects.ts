export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  location?: string;

  shortDescription: string;
  description: string;

  services: string[];

  technologies: string[];

  results: {
    label: string;
    value: string;
    description: string;
  }[];

  challenge: string;
  solution: string;

  highlights: string[];

  media: {
    thumbnail: string;
    images: string[];
    video?: string;
  };

  testimonial?: {
    quote: string;
    name: string;
    role: string;
  };

  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "digital-growth-campaign",
    title: "Digital Growth Campaign",
    client: "Business Growth Project",
    category: "Digital Marketing",
    year: "2026",
    location: "India",

    shortDescription:
      "A multi-channel digital marketing campaign designed to improve online visibility, audience reach and lead generation.",

    description:
      "A complete digital marketing project combining search visibility, paid advertising, social media and conversion-focused digital experiences.",

    services: [
      "SEO",
      "Google Ads",
      "Meta Ads",
      "Social Media Marketing",
      "Analytics & Performance",
    ],

    technologies: [
      "Google Ads",
      "Meta Ads",
      "Google Analytics",
      "Search Console",
      "Modern Web Technologies",
    ],

    results: [
      {
        label: "Visibility",
        value: "Growing",
        description:
          "Improved overall digital visibility across key channels.",
      },
      {
        label: "Reach",
        value: "Expanded",
        description:
          "Reached a broader and more relevant audience.",
      },
      {
        label: "Leads",
        value: "Improved",
        description:
          "Created stronger pathways for enquiries and conversions.",
      },
    ],

    challenge:
      "The business needed a stronger and more consistent digital presence while improving the connection between marketing activity and measurable business outcomes.",

    solution:
      "We developed a connected digital marketing approach covering search, paid advertising, social media and performance measurement instead of treating every channel as a separate activity.",

    highlights: [
      "Multi-channel digital strategy",
      "Search visibility improvements",
      "Paid advertising campaign structure",
      "Social media strategy",
      "Performance measurement",
      "Conversion-focused optimization",
    ],

    media: {
      thumbnail:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",

      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80",
      ],

      video: "",
    },

    featured: true,
  },

  {
    slug: "search-visibility-project",
    title: "Search Visibility Project",
    client: "Local Business",
    category: "SEO",
    year: "2026",
    location: "Jhansi, India",

    shortDescription:
      "An SEO-focused project built around improving organic visibility, technical foundations and local search presence.",

    description:
      "A search optimization project focused on making the business easier to discover through relevant search queries and improving the quality of its digital foundation.",

    services: [
      "SEO",
      "Local SEO",
      "Technical SEO",
      "Content Strategy",
      "Analytics & Performance",
    ],

    technologies: [
      "Google Search Console",
      "Google Analytics",
      "SEO Tools",
      "Structured Data",
      "Modern Web Technologies",
    ],

    results: [
      {
        label: "Organic Visibility",
        value: "Improved",
        description:
          "Strengthened the website's presence across relevant searches.",
      },
      {
        label: "Technical Health",
        value: "Optimized",
        description:
          "Improved important technical and on-page foundations.",
      },
      {
        label: "Local Discovery",
        value: "Stronger",
        description:
          "Created a stronger foundation for local search discovery.",
      },
    ],

    challenge:
      "The business had an opportunity to improve its search visibility but needed a clearer technical and content strategy.",

    solution:
      "We focused on technical SEO, on-page improvements, search intent, local visibility and useful content opportunities.",

    highlights: [
      "Technical SEO audit",
      "On-page optimization",
      "Search intent research",
      "Local SEO improvements",
      "Content opportunities",
      "Performance monitoring",
    ],

    media: {
      thumbnail:
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1200&q=80",

      images: [
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1600&q=80",
      ],

      video: "",
    },

    featured: true,
  },

  {
    slug: "performance-advertising-campaign",
    title: "Performance Advertising Campaign",
    client: "Lead Generation Campaign",
    category: "Paid Advertising",
    year: "2026",
    location: "India",

    shortDescription:
      "A performance advertising campaign combining Google Ads and Meta Ads with structured targeting and conversion measurement.",

    description:
      "A paid media project designed around audience targeting, campaign structure, creative testing and measurable conversion actions.",

    services: [
      "Google Ads",
      "Meta Ads",
      "Creative Strategy",
      "Conversion Tracking",
      "Analytics",
    ],

    technologies: [
      "Google Ads",
      "Meta Ads Manager",
      "Google Analytics",
      "Conversion Tracking",
    ],

    results: [
      {
        label: "Campaign Reach",
        value: "Expanded",
        description:
          "Connected campaigns with a broader relevant audience.",
      },
      {
        label: "Targeting",
        value: "Refined",
        description:
          "Improved campaign structure and audience targeting.",
      },
      {
        label: "Measurement",
        value: "Connected",
        description:
          "Created clearer measurement around campaign activity.",
      },
    ],

    challenge:
      "The campaign needed a more structured approach to audience targeting, creative testing and performance measurement.",

    solution:
      "We created a connected paid media strategy with clearer campaign structures, audience segmentation, creative testing and conversion tracking.",

    highlights: [
      "Campaign architecture",
      "Audience research",
      "Google Ads strategy",
      "Meta Ads strategy",
      "Creative testing",
      "Conversion tracking",
    ],

    media: {
      thumbnail:
        "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=80",

      images: [
        "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80",
      ],

      video: "",
    },

    featured: true,
  },

  {
    slug: "modern-business-website",
    title: "Modern Business Website",
    client: "Business Website Project",
    category: "Web Development",
    year: "2026",
    location: "India",

    shortDescription:
      "A modern responsive website focused on clear communication, premium presentation and conversion-focused user experience.",

    description:
      "A website project combining modern UI design, responsive development, performance considerations and digital marketing foundations.",

    services: [
      "Web Design",
      "Web Development",
      "UI/UX",
      "SEO",
      "Performance Optimization",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
    ],

    results: [
      {
        label: "Experience",
        value: "Modernized",
        description:
          "Created a cleaner and more engaging digital experience.",
      },
      {
        label: "Responsive",
        value: "Optimized",
        description:
          "Designed the experience for modern desktop and mobile screens.",
      },
      {
        label: "Foundation",
        value: "Scalable",
        description:
          "Created a maintainable foundation for future digital growth.",
      },
    ],

    challenge:
      "The existing digital presence needed a more modern experience with clearer messaging, stronger presentation and better usability.",

    solution:
      "We designed and developed a responsive website with a premium visual system, structured content and conversion-focused user journeys.",

    highlights: [
      "Modern UI design",
      "Responsive development",
      "Conversion-focused structure",
      "SEO-friendly foundation",
      "Performance-conscious implementation",
      "Scalable architecture",
    ],

    media: {
      thumbnail:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",

      images: [
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80",
      ],

      video: "",
    },

    featured: true,
  },

  {
    slug: "social-brand-growth",
    title: "Social Brand Growth",
    client: "Brand Marketing Project",
    category: "Social Media",
    year: "2026",
    location: "India",

    shortDescription:
      "A social media strategy designed to create a more consistent brand presence and stronger audience communication.",

    description:
      "A social media project focused on content strategy, creative direction, audience communication and performance insights.",

    services: [
      "Social Media Marketing",
      "Content Strategy",
      "Creative Direction",
      "Meta Ads",
    ],

    technologies: [
      "Instagram",
      "Facebook",
      "Meta Ads Manager",
      "Analytics",
    ],

    results: [
      {
        label: "Brand Presence",
        value: "Strengthened",
        description:
          "Created a more consistent and recognizable social presence.",
      },
      {
        label: "Content",
        value: "Structured",
        description:
          "Developed a clearer content direction and publishing system.",
      },
      {
        label: "Engagement",
        value: "Improved",
        description:
          "Focused content around audience relevance and communication.",
      },
    ],

    challenge:
      "The brand needed a more consistent social media presence and a clearer connection between content and business objectives.",

    solution:
      "We created a structured content strategy supported by creative direction, audience insights and paid social opportunities.",

    highlights: [
      "Social media strategy",
      "Content planning",
      "Creative direction",
      "Audience research",
      "Campaign support",
      "Performance insights",
    ],

    media: {
      thumbnail:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",

      images: [
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1600&q=80",
      ],

      video: "",
    },

    featured: false,
  },

  {
    slug: "content-strategy-project",
    title: "Content Strategy Project",
    client: "Content Marketing Project",
    category: "Content Marketing",
    year: "2026",
    location: "India",

    shortDescription:
      "A content strategy designed to connect audience questions, search opportunities and business communication.",

    description:
      "A structured content marketing project focused on developing useful content opportunities that support the broader digital strategy.",

    services: [
      "Content Marketing",
      "SEO",
      "Content Strategy",
      "Website Copy",
    ],

    technologies: [
      "Content Strategy",
      "SEO Research",
      "Analytics",
      "Search Console",
    ],

    results: [
      {
        label: "Content Direction",
        value: "Structured",
        description:
          "Created clearer content priorities and publishing themes.",
      },
      {
        label: "Search Opportunities",
        value: "Identified",
        description:
          "Found relevant topics aligned with audience search intent.",
      },
      {
        label: "Messaging",
        value: "Improved",
        description:
          "Created clearer communication around products and services.",
      },
    ],

    challenge:
      "The business needed a clearer content direction instead of creating disconnected pieces of content without a larger strategy.",

    solution:
      "We mapped audience needs, business objectives and search opportunities into a structured content strategy.",

    highlights: [
      "Audience research",
      "Content planning",
      "Search intent",
      "Website messaging",
      "SEO content opportunities",
      "Content roadmap",
    ],

    media: {
      thumbnail:
        "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1200&q=80",

      images: [
        "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80",
      ],

      video: "",
    },

    featured: false,
  },
];

export const projectSlugs = projects.map(
  (project) => project.slug,
);

export function getProjectBySlug(
  slug: string,
): Project | undefined {
  return projects.find(
    (project) => project.slug === slug,
  );
}

export const featuredProjects = projects.filter(
  (project) => project.featured,
);

export const projectCategories = [
  "All",
  ...Array.from(
    new Set(projects.map((project) => project.category)),
  ),
];
