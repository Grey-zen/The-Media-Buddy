export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  longDescription: string;
  icon: string;

  seo: {
    title: string;
    description: string;
  };

  hero: {
    headline: string;
    subheadline: string;
  };

  benefits: string[];

  capabilities: {
    title: string;
    description: string;
  }[];

  process: {
    number: string;
    title: string;
    description: string;
  }[];

  idealFor: string[];

  faqs: {
    question: string;
    answer: string;
  }[];

  relatedServices: string[];
};

export const services: Service[] = [
  {
    slug: "seo",
    title: "Search Engine Optimization",
    shortTitle: "SEO",
    eyebrow: "Search Visibility",

    description:
      "Build stronger organic visibility and attract people who are actively searching for what your business offers.",

    longDescription:
      "Our SEO approach combines technical improvements, on-page optimization, content strategy, local search and ongoing performance analysis to create a stronger foundation for sustainable organic growth.",

    icon: "Search",

    seo: {
      title:
        "SEO Services | Search Engine Optimization | The Media Buddy",
      description:
        "Improve search visibility, organic traffic and digital presence with practical SEO strategies from The Media Buddy.",
    },

    hero: {
      headline:
        "Get Found By The People Looking For You.",
      subheadline:
        "A practical SEO strategy built around search intent, technical health, useful content and measurable organic growth.",
    },

    benefits: [
      "Improve organic search visibility",
      "Reach higher-intent audiences",
      "Build a stronger technical foundation",
      "Create search-focused content opportunities",
      "Improve local search presence",
      "Track and continuously optimize performance",
    ],

    capabilities: [
      {
        title: "Technical SEO",
        description:
          "Improve crawlability, indexing, site structure, performance and other technical foundations that support search visibility.",
      },
      {
        title: "On-Page SEO",
        description:
          "Optimize page structure, headings, metadata, internal linking and content around relevant search intent.",
      },
      {
        title: "Local SEO",
        description:
          "Strengthen local discovery and help customers find relevant business information when searching nearby.",
      },
      {
        title: "Content Strategy",
        description:
          "Identify useful content opportunities that can answer customer questions and support organic visibility.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Audit",
        description:
          "Understand the current technical, content and search visibility situation.",
      },
      {
        number: "02",
        title: "Strategy",
        description:
          "Identify priorities, opportunities and a practical roadmap based on business goals.",
      },
      {
        number: "03",
        title: "Optimization",
        description:
          "Implement technical, on-page, content and local search improvements.",
      },
      {
        number: "04",
        title: "Measure",
        description:
          "Review search performance, identify opportunities and continuously improve the strategy.",
      },
    ],

    idealFor: [
      "Local businesses",
      "Service businesses",
      "Professional organizations",
      "Growing brands",
      "Businesses launching a new website",
      "Businesses with declining organic traffic",
    ],

    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "SEO is a long-term process and results vary depending on competition, website condition, industry and the starting point. We focus on measurable progress rather than promising unrealistic timelines.",
      },
      {
        question: "Do you only work on Google rankings?",
        answer:
          "Search visibility is broader than a single ranking position. We consider technical health, relevant organic traffic, search intent, local discovery and the overall quality of the search experience.",
      },
      {
        question: "Can you work with an existing website?",
        answer:
          "Yes. An existing website can be audited and improved without necessarily requiring a complete rebuild.",
      },
    ],

    relatedServices: [
      "web-development",
      "content-marketing",
      "analytics",
    ],
  },

  {
    slug: "google-ads",
    title: "Google Ads Management",
    shortTitle: "Google Ads",
    eyebrow: "Performance Advertising",

    description:
      "Reach high-intent customers with carefully structured Google Ads campaigns designed around measurable business goals.",

    longDescription:
      "We build and optimize Google Ads campaigns around search intent, audience targeting, landing page experience, conversion tracking and continuous performance analysis.",

    icon: "MousePointerClick",

    seo: {
      title:
        "Google Ads Management Services | The Media Buddy",
      description:
        "Run smarter Google Ads campaigns with structured targeting, conversion tracking and ongoing performance optimization.",
    },

    hero: {
      headline:
        "Reach Customers When Intent Is Highest.",
      subheadline:
        "Google Ads campaigns built around the searches, audiences and actions that matter to your business.",
    },

    benefits: [
      "Reach high-intent searchers",
      "Control campaign targeting",
      "Improve advertising efficiency",
      "Create measurable conversion paths",
      "Test keywords and ad messaging",
      "Track campaign performance",
    ],

    capabilities: [
      {
        title: "Search Campaigns",
        description:
          "Create focused campaigns around relevant keywords and customer search intent.",
      },
      {
        title: "Campaign Structure",
        description:
          "Organize campaigns, ad groups, targeting and budgets around clear business objectives.",
      },
      {
        title: "Conversion Tracking",
        description:
          "Measure meaningful actions so campaign decisions are based on more than clicks.",
      },
      {
        title: "Optimization",
        description:
          "Continuously review search terms, audiences, ads, bids and landing-page performance.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Research",
        description:
          "Understand the market, audience, search behavior and campaign objectives.",
      },
      {
        number: "02",
        title: "Build",
        description:
          "Create campaign structure, targeting, ads, keywords and conversion tracking.",
      },
      {
        number: "03",
        title: "Launch",
        description:
          "Launch campaigns with controlled budgets and carefully defined objectives.",
      },
      {
        number: "04",
        title: "Optimize",
        description:
          "Analyze performance and continuously improve campaign efficiency.",
      },
    ],

    idealFor: [
      "Local businesses",
      "Lead generation",
      "Service businesses",
      "E-commerce businesses",
      "New product launches",
      "Businesses needing faster visibility",
    ],

    faqs: [
      {
        question: "How much should I spend on Google Ads?",
        answer:
          "There is no universal budget. The right starting point depends on your market, average customer value, competition, conversion rates and campaign objectives.",
      },
      {
        question: "Can you manage an existing Google Ads account?",
        answer:
          "Yes. Existing campaigns can be audited before restructuring or optimizing them.",
      },
      {
        question: "Do you provide conversion tracking?",
        answer:
          "Conversion tracking can be included as part of the campaign setup so performance can be evaluated against meaningful business actions.",
      },
    ],

    relatedServices: [
      "seo",
      "web-development",
      "analytics",
    ],
  },

  {
    slug: "meta-ads",
    title: "Meta Ads Management",
    shortTitle: "Meta Ads",
    eyebrow: "Social Advertising",

    description:
      "Build targeted Facebook and Instagram advertising campaigns using audience strategy, creative testing and performance optimization.",

    longDescription:
      "Our Meta advertising approach combines campaign strategy, audience research, creative testing, retargeting and performance analysis to create more effective social advertising systems.",

    icon: "Megaphone",

    seo: {
      title:
        "Meta Ads Management Services | Facebook & Instagram Ads | The Media Buddy",
      description:
        "Grow your business with strategic Facebook and Instagram advertising, audience targeting and creative testing.",
    },

    hero: {
      headline:
        "Turn Attention Into Action.",
      subheadline:
        "Strategic Facebook and Instagram advertising built around audiences, creative and measurable outcomes.",
    },

    benefits: [
      "Reach relevant audiences",
      "Test multiple creative concepts",
      "Build retargeting systems",
      "Generate qualified leads",
      "Promote products and services",
      "Measure campaign performance",
    ],

    capabilities: [
      {
        title: "Audience Strategy",
        description:
          "Identify relevant audience segments and build campaigns around customer intent and behavior.",
      },
      {
        title: "Creative Testing",
        description:
          "Test different messaging, formats and creative directions to understand what resonates.",
      },
      {
        title: "Lead Generation",
        description:
          "Build campaigns designed to generate enquiries, leads or other defined conversion actions.",
      },
      {
        title: "Retargeting",
        description:
          "Reconnect with people who have already interacted with your brand or digital properties.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Audience",
        description:
          "Understand the people most likely to respond to the offer.",
      },
      {
        number: "02",
        title: "Creative",
        description:
          "Develop campaign messaging and creative concepts suited to the audience.",
      },
      {
        number: "03",
        title: "Launch",
        description:
          "Set up campaigns, targeting, budgets and tracking.",
      },
      {
        number: "04",
        title: "Test & Improve",
        description:
          "Use campaign data to identify winning audiences and creative combinations.",
      },
    ],

    idealFor: [
      "Consumer brands",
      "Local businesses",
      "E-commerce businesses",
      "Lead generation",
      "Events and campaigns",
      "Growing brands",
    ],

    faqs: [
      {
        question: "Should I use Google Ads or Meta Ads?",
        answer:
          "It depends on the customer journey and business objective. Google often captures existing search intent, while Meta can be powerful for discovery, demand generation and audience-based campaigns.",
      },
      {
        question: "Do you create ad creatives?",
        answer:
          "Creative strategy and campaign assets can be part of the service depending on the project scope.",
      },
      {
        question: "Can Meta Ads generate leads?",
        answer:
          "Yes. Campaigns can be structured around lead forms, landing pages, messages or other conversion paths depending on the business.",
      },
    ],

    relatedServices: [
      "social-media",
      "web-development",
      "analytics",
    ],
  },

  {
    slug: "social-media",
    title: "Social Media Marketing",
    shortTitle: "Social Media",
    eyebrow: "Social Growth",

    description:
      "Build a consistent and useful social presence through strategy, content, creative direction and audience engagement.",

    longDescription:
      "We help businesses approach social media with a clear purpose instead of simply posting content. Strategy, content planning, creative direction and performance insights work together to create a stronger presence.",

    icon: "Share2",

    seo: {
      title:
        "Social Media Marketing Services | The Media Buddy",
      description:
        "Build a stronger social media presence with strategy, content planning, creative direction and performance-focused marketing.",
    },

    hero: {
      headline:
        "Build A Brand People Remember.",
      subheadline:
        "Social media strategy that connects content, creativity and audience engagement with your wider business goals.",
    },

    benefits: [
      "Create a consistent digital presence",
      "Improve audience engagement",
      "Strengthen brand communication",
      "Develop content systems",
      "Support paid social campaigns",
      "Learn from content performance",
    ],

    capabilities: [
      {
        title: "Content Strategy",
        description:
          "Create a content direction based on audience needs, brand positioning and business objectives.",
      },
      {
        title: "Content Planning",
        description:
          "Build practical content calendars and repeatable systems for consistent publishing.",
      },
      {
        title: "Creative Direction",
        description:
          "Develop visual and messaging concepts that make the brand feel consistent across platforms.",
      },
      {
        title: "Performance Insights",
        description:
          "Review engagement and content performance to understand what deserves more attention.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Understand",
        description:
          "Learn about the brand, audience, positioning and goals.",
      },
      {
        number: "02",
        title: "Plan",
        description:
          "Create content pillars, themes and a practical publishing direction.",
      },
      {
        number: "03",
        title: "Create",
        description:
          "Develop content concepts and creative assets aligned with the strategy.",
      },
      {
        number: "04",
        title: "Learn",
        description:
          "Use audience response and performance data to improve future content.",
      },
    ],

    idealFor: [
      "Local businesses",
      "Personal brands",
      "Consumer brands",
      "Professional services",
      "Restaurants & hospitality",
      "Growing businesses",
    ],

    faqs: [
      {
        question: "Which social platforms should my business use?",
        answer:
          "The right platforms depend on your audience, industry, content strengths and business objectives. More platforms do not automatically mean better results.",
      },
      {
        question: "Do you create social media content?",
        answer:
          "Content strategy and creative production can be included depending on the project scope and requirements.",
      },
      {
        question: "Can social media support SEO?",
        answer:
          "Social media and SEO serve different primary purposes, but strong content and brand visibility can support the broader digital presence around a business.",
      },
    ],

    relatedServices: [
      "meta-ads",
      "content-marketing",
      "seo",
    ],
  },

  {
    slug: "web-development",
    title: "Web Design & Development",
    shortTitle: "Web Development",
    eyebrow: "Digital Experiences",

    description:
      "Create modern, responsive websites designed around usability, performance, brand credibility and conversion.",

    longDescription:
      "We build digital experiences that combine visual design, responsive development, performance and conversion-focused thinking. Websites are treated as an important part of the wider marketing system.",

    icon: "Code2",

    seo: {
      title:
        "Web Design & Development Services | The Media Buddy",
      description:
        "Build modern, responsive and performance-focused websites designed around users, brands and business goals.",
    },

    hero: {
      headline:
        "Your Website Should Do More Than Look Good.",
      subheadline:
        "Modern websites designed to communicate clearly, perform quickly and create better digital experiences.",
    },

    benefits: [
      "Modern responsive design",
      "Clear information architecture",
      "Conversion-focused experiences",
      "Performance-conscious development",
      "Mobile-first usability",
      "SEO-friendly foundations",
    ],

    capabilities: [
      {
        title: "Website Strategy",
        description:
          "Plan page structure, user journeys, content hierarchy and conversion opportunities before development.",
      },
      {
        title: "UI & UX Design",
        description:
          "Create clean interfaces that communicate the brand clearly and make important actions easier.",
      },
      {
        title: "Frontend Development",
        description:
          "Build responsive and maintainable interfaces using modern web technologies.",
      },
      {
        title: "Performance",
        description:
          "Consider loading experience, responsive behavior and technical quality throughout the build.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Discover",
        description:
          "Understand the business, audience, goals and technical requirements.",
      },
      {
        number: "02",
        title: "Design",
        description:
          "Create the visual direction, page architecture and user experience.",
      },
      {
        number: "03",
        title: "Develop",
        description:
          "Turn the approved design into a responsive production-ready website.",
      },
      {
        number: "04",
        title: "Launch & Improve",
        description:
          "Test the experience, deploy the website and identify future optimization opportunities.",
      },
    ],

    idealFor: [
      "Business websites",
      "Service businesses",
      "Landing pages",
      "Corporate websites",
      "Campaign websites",
      "Website redesigns",
    ],

    faqs: [
      {
        question: "Can you redesign an existing website?",
        answer:
          "Yes. We can review an existing website and recommend whether targeted improvements or a complete redesign makes more sense.",
      },
      {
        question: "Will the website work on mobile devices?",
        answer:
          "Responsive behavior is considered throughout the design and development process so the experience works across modern screen sizes.",
      },
      {
        question: "Can you help with website deployment?",
        answer:
          "Yes. Deployment, hosting configuration and related technical setup can be included depending on the project.",
      },
    ],

    relatedServices: [
      "seo",
      "content-marketing",
      "analytics",
    ],
  },

  {
    slug: "content-marketing",
    title: "Content Marketing",
    shortTitle: "Content",
    eyebrow: "Content Strategy",

    description:
      "Create useful, relevant and search-friendly content that supports your brand, audience and wider digital strategy.",

    longDescription:
      "Content works best when it has a purpose. We develop content strategies around audience questions, search opportunities, brand communication and the actions you want people to take.",

    icon: "FileText",

    seo: {
      title:
        "Content Marketing Services | Content Strategy | The Media Buddy",
      description:
        "Create strategic, useful and search-friendly content that supports SEO, brand communication and digital growth.",
    },

    hero: {
      headline:
        "Create Content With A Reason.",
      subheadline:
        "Content strategy designed to answer real questions, support search visibility and move audiences closer to action.",
    },

    benefits: [
      "Build useful content systems",
      "Support organic search visibility",
      "Answer customer questions",
      "Strengthen brand communication",
      "Create reusable content opportunities",
      "Support campaign objectives",
    ],

    capabilities: [
      {
        title: "Content Strategy",
        description:
          "Identify the topics, formats and themes most relevant to your audience and business.",
      },
      {
        title: "SEO Content",
        description:
          "Develop content around useful search topics and user intent.",
      },
      {
        title: "Website Copy",
        description:
          "Create clear messaging that explains what the business does and why customers should care.",
      },
      {
        title: "Content Planning",
        description:
          "Build structured publishing plans that make consistent content easier to manage.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Research",
        description:
          "Understand the audience, business, competitors and relevant topics.",
      },
      {
        number: "02",
        title: "Plan",
        description:
          "Prioritize content opportunities around business and audience needs.",
      },
      {
        number: "03",
        title: "Create",
        description:
          "Develop useful content with clear structure and purpose.",
      },
      {
        number: "04",
        title: "Optimize",
        description:
          "Review performance and improve the content system over time.",
      },
    ],

    idealFor: [
      "Business websites",
      "SEO campaigns",
      "Professional services",
      "Personal brands",
      "B2B businesses",
      "Growing digital brands",
    ],

    faqs: [
      {
        question: "Does content marketing only mean blogging?",
        answer:
          "No. Content can include website pages, guides, articles, social content, landing pages and other formats depending on the strategy.",
      },
      {
        question: "Can content help SEO?",
        answer:
          "Useful content aligned with search intent can support organic search visibility, especially when combined with strong technical and on-page SEO.",
      },
      {
        question: "How often should a business publish content?",
        answer:
          "There is no universal publishing frequency. Quality, relevance, consistency and the ability to maintain the system matter more than publishing simply for volume.",
      },
    ],

    relatedServices: [
      "seo",
      "social-media",
      "web-development",
    ],
  },

  {
    slug: "analytics",
    title: "Analytics & Performance",
    shortTitle: "Analytics",
    eyebrow: "Data & Measurement",

    description:
      "Understand what is happening across your digital presence through tracking, reporting and performance analysis.",

    longDescription:
      "Good digital marketing decisions require useful information. We help businesses establish better measurement, understand performance and identify areas where digital activity can improve.",

    icon: "BarChart3",

    seo: {
      title:
        "Digital Analytics & Performance Services | The Media Buddy",
      description:
        "Measure digital performance with analytics, conversion tracking, reporting and practical data-driven insights.",
    },

    hero: {
      headline:
        "Know What Is Working.",
      subheadline:
        "Turn digital activity into clearer insights with better tracking, reporting and performance analysis.",
    },

    benefits: [
      "Understand digital performance",
      "Track meaningful conversions",
      "Improve reporting clarity",
      "Identify growth opportunities",
      "Support better campaign decisions",
      "Connect activity with business goals",
    ],

    capabilities: [
      {
        title: "Analytics Setup",
        description:
          "Establish useful measurement foundations for websites and digital campaigns.",
      },
      {
        title: "Conversion Tracking",
        description:
          "Track important actions so marketing performance can be evaluated more meaningfully.",
      },
      {
        title: "Performance Reporting",
        description:
          "Turn raw data into understandable reports focused on useful business metrics.",
      },
      {
        title: "Optimization Insights",
        description:
          "Use performance patterns to identify opportunities for improvement.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Measure",
        description:
          "Understand what data is currently available and what is missing.",
      },
      {
        number: "02",
        title: "Configure",
        description:
          "Set up or improve the tracking needed for meaningful measurement.",
      },
      {
        number: "03",
        title: "Analyze",
        description:
          "Review performance patterns and identify important insights.",
      },
      {
        number: "04",
        title: "Improve",
        description:
          "Turn insights into practical marketing and website decisions.",
      },
    ],

    idealFor: [
      "Growing businesses",
      "Advertising campaigns",
      "SEO campaigns",
      "Lead generation",
      "E-commerce",
      "Businesses without clear reporting",
    ],

    faqs: [
      {
        question: "Why is analytics important?",
        answer:
          "Analytics helps you understand how people interact with your digital properties and whether your marketing activity is contributing to meaningful outcomes.",
      },
      {
        question: "Can you improve existing tracking?",
        answer:
          "Yes. Existing analytics and tracking configurations can be reviewed to identify gaps or opportunities for improvement.",
      },
      {
        question: "Do you provide regular reports?",
        answer:
          "Reporting can be included depending on the project scope and the level of ongoing performance management required.",
      },
    ],

    relatedServices: [
      "google-ads",
      "seo",
      "web-development",
    ],
  },

  {
    slug: "creative",
    title: "Brand & Creative",
    shortTitle: "Creative",
    eyebrow: "Creative Direction",

    description:
      "Develop stronger digital communication through creative strategy, campaign concepts, visual direction and advertising assets.",

    longDescription:
      "Creative work should support a clear message. We combine visual thinking, brand communication and campaign objectives to create digital assets that are designed to communicate rather than simply decorate.",

    icon: "PenTool",

    seo: {
      title:
        "Brand & Creative Services | Digital Creative | The Media Buddy",
      description:
        "Develop stronger digital creative through campaign concepts, visual direction, advertising assets and brand communication.",
    },

    hero: {
      headline:
        "Make Your Brand Easier To Remember.",
      subheadline:
        "Creative direction that connects visual communication with your audience, message and marketing goals.",
    },

    benefits: [
      "Create stronger visual communication",
      "Build consistent campaign creative",
      "Improve digital brand presentation",
      "Support advertising campaigns",
      "Develop reusable creative systems",
      "Connect design with strategy",
    ],

    capabilities: [
      {
        title: "Creative Strategy",
        description:
          "Define the message, audience and creative direction before producing campaign assets.",
      },
      {
        title: "Campaign Creative",
        description:
          "Develop creative concepts designed around specific marketing objectives.",
      },
      {
        title: "Visual Direction",
        description:
          "Create a consistent visual language across digital campaigns and brand touchpoints.",
      },
      {
        title: "Ad Creative",
        description:
          "Develop advertising assets designed for different formats, platforms and audiences.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Understand",
        description:
          "Learn about the brand, audience, offer and campaign objective.",
      },
      {
        number: "02",
        title: "Concept",
        description:
          "Explore creative directions and messaging ideas.",
      },
      {
        number: "03",
        title: "Create",
        description:
          "Develop polished digital creative assets.",
      },
      {
        number: "04",
        title: "Refine",
        description:
          "Use feedback and performance insights to improve the creative direction.",
      },
    ],

    idealFor: [
      "Digital campaigns",
      "Social media",
      "Paid advertising",
      "Growing brands",
      "Product launches",
      "Business promotions",
    ],

    faqs: [
      {
        question: "Can creative be part of an advertising campaign?",
        answer:
          "Yes. Creative strategy and campaign assets can be developed alongside advertising strategy when required.",
      },
      {
        question: "Do you only create social media designs?",
        answer:
          "No. Creative work can support websites, paid advertising, social media, campaigns and other digital communication needs.",
      },
      {
        question: "Can you work with an existing brand identity?",
        answer:
          "Yes. Creative direction can be developed around an existing brand system rather than requiring a complete rebrand.",
      },
    ],

    relatedServices: [
      "meta-ads",
      "social-media",
      "web-development",
    ],
  },
];

export const serviceSlugs = services.map(
  (service) => service.slug,
);

export function getServiceBySlug(
  slug: string,
): Service | undefined {
  return services.find(
    (service) => service.slug === slug,
  );
}
