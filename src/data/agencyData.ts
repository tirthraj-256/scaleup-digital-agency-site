import {
  ServiceItem,
  WhyUsItem,
  ProcessStep,
  AudienceSegment,
  ConceptualMetric,
  GalleryItem,
  GalleryCategory,
  TestimonialItem,
  FaqItem,
  CalculatorIndustry,
  PricingPackageItem,
  ComparisonItem,
} from '../types';


export const AGENCY_INFO = {
  name: 'Scaleup Marketing',
  shortName: 'Scaleup',
  tagline: 'Grow Your Brand. Scale Your Business.',
  phone: '+91 99099 92573',
  phoneRaw: '+919909992573',
  email: 'asha.ankoliya02@gmail.com',
  whatsappMessage: 'Hi Scaleup Marketing, I’d like to discuss digital marketing services for my business.',
  whatsappUrl: 'https://wa.me/919909992573?text=Hi%20Scaleup%20Marketing%2C%20I%E2%80%99d%20like%20to%20discuss%20digital%20marketing%20services%20for%20my%20business.',
  trustLabel: 'DIGITAL MARKETING • BRANDING • GROWTH',
  heroHeadline: 'Turn Your Digital Presence Into Real Growth.',
  heroSupportingText: 'Scaleup Marketing helps businesses build powerful brands, attract the right audience, generate quality leads, and scale through strategic digital marketing.',
  valueStripHeadline: 'We combine strategy, creativity and performance marketing to help brands scale.',
  aboutHeadline: 'Built to Make Brands Grow.',
  aboutContentParagraph1: 'Scaleup Marketing is a growth-focused digital marketing agency helping businesses strengthen their online presence, connect with their audience, generate leads, and build memorable brands.',
  aboutContentParagraph2: 'From social media management and paid advertising to SEO, content creation and branding, we create digital strategies designed around measurable business goals.',
  servicesHeading: 'Everything You Need to Scale Digitally.',
  servicesSubheading: 'From building your brand to generating leads, we provide end-to-end digital marketing solutions.',
  whyUsHeading: 'Why Scaleup?',
  processHeading: 'How We Scale Your Brand',
  metricsHeading: 'Marketing Built Around Growth.',
  metricsMessage: 'We focus on the metrics that matter to your business.',
  whoWeHelpHeading: 'Built for Ambitious Businesses.',
  whoWeHelpDescription: 'Whether you\'re launching a new brand or looking to accelerate an existing one, Scaleup builds digital strategies around where you want to go next.',
  ctaHeading: 'Ready to Scale Your Brand?',
  ctaSubheading: 'Let’s build a digital presence that attracts attention, generates leads and drives growth.',
  contactHeading: 'Let’s Talk About Your Growth.',
  copyright: '© 2026 Scaleup Marketing. All rights reserved.'
};

export const VALUE_STRIP_ITEMS = [
  { label: 'Strategy', detail: 'Targeted roadmaps built around commercial business goals' },
  { label: 'Creativity', detail: 'Compelling narratives and arresting visual identities' },
  { label: 'Performance', detail: 'Continuous conversion optimization and analytical rigor' },
  { label: 'Growth', detail: 'Scalable frameworks built for compounding customer acquisition' }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'social-media-management',
    title: 'Social Media Management',
    badge: 'Organic Presence',
    highlightMetric: 'Consistent Engagement',
    shortDescription: 'Build a consistent and engaging social presence that keeps your brand active, relevant and connected with your audience.',
    deliverables: [
      'Instagram & Facebook management',
      'Content planning',
      'Posting & scheduling',
      'Community management',
      'Monthly content calendars'
    ],
    icon: 'Share2',
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
    fullOverview: 'We take complete ownership of your brand\'s day-to-day social channels. By blending cohesive visual aesthetics with structured posting schedules and authentic audience interactions, we ensure your brand remains top-of-mind every single day.'
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    badge: 'Audience Reach',
    highlightMetric: 'Virality & Growth',
    shortDescription: 'Turn social platforms into powerful channels for visibility, engagement and growth.',
    deliverables: [
      'Instagram growth strategy',
      'Facebook marketing',
      'Reels strategy',
      'Engagement campaigns',
      'Brand awareness'
    ],
    icon: 'TrendingUp',
    imageUrl: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=800&q=80',
    fullOverview: 'Beyond maintaining a profile, our social media marketing programs actively capture new market share. We tap into algorithm dynamics, high-performing Reels formats, and organic amplification to build an engaged community around your company.'
  },
  {
    id: 'paid-advertising',
    title: 'Paid Advertising',
    badge: 'Direct Response',
    highlightMetric: 'Measurable ROI',
    shortDescription: 'Reach the right audience with data-driven advertising campaigns designed to generate measurable results.',
    deliverables: [
      'Meta Ads (Facebook & Instagram)',
      'Google Ads',
      'Lead generation campaigns',
      'Retargeting campaigns',
      'Ad optimization'
    ],
    icon: 'Target',
    imageUrl: '/images/performance-ads-roi.jpg',
    fullOverview: 'Maximize your advertising budget with precision-targeted PPC and paid social campaigns. We build full-funnel architectures—from high-intent prospecting to multi-touch retargeting—relentlessly testing creative copy, audiences, and bid strategies.'
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation',
    badge: 'Sales Pipeline',
    highlightMetric: 'High-Intent Inquiries',
    shortDescription: 'Convert attention into qualified leads with strategic campaigns and optimized conversion journeys.',
    deliverables: [
      'Lead generation strategy',
      'Landing-page campaigns',
      'WhatsApp leads',
      'Lead forms',
      'Lead nurturing & follow-ups'
    ],
    icon: 'Users',
    imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80',
    fullOverview: 'Attracting eyeballs is meaningless without conversions. We engineer streamlined conversion pathways—including high-converting landing pages, instant WhatsApp lead routing, and automated follow-ups—that turn interest into sales conversations.'
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    badge: 'Media Production',
    highlightMetric: 'High Retention',
    shortDescription: 'Create content that captures attention, communicates your value and strengthens your brand.',
    deliverables: [
      'Reels',
      'Promotional videos',
      'Social media posts',
      'Carousels',
      'Creative campaigns'
    ],
    icon: 'Video',
    imageUrl: '/images/creative-content-studio.jpg',
    fullOverview: 'We conceptualize and script modern, scroll-stopping creative assets. From fast-paced short-form video and explainer Reels to multi-slide educational carousels, our content tells your brand story with clarity and momentum.'
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    badge: 'Visual Craft',
    highlightMetric: 'Distinctive Aesthetic',
    shortDescription: 'Make your brand visually memorable with creative designs built for digital platforms.',
    deliverables: [
      'Social media creatives',
      'Posters & banners',
      'Ad creatives',
      'Brand identity',
      'Business presentations'
    ],
    icon: 'Palette',
    imageUrl: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=800&q=80',
    fullOverview: 'First impressions matter online. Our graphic design team crafts pixel-perfect assets customized for modern feeds, ad formats, and pitch decks. Every graphic adheres to clear typography, balanced color harmonies, and brand guidelines.'
  },
  {
    id: 'seo',
    title: 'SEO',
    badge: 'Search Dominance',
    highlightMetric: 'Organic Inflow',
    shortDescription: 'Improve your visibility on search engines and help your business get discovered by the right customers.',
    deliverables: [
      'Keyword research',
      'On-page SEO',
      'Local SEO',
      'Google Business Profile optimization',
      'SEO content strategy'
    ],
    icon: 'Search',
    imageUrl: '/images/seo-search-ranking.jpg',
    fullOverview: 'Ensure high-intent buyers discover your brand when searching for your products or services. We optimize your technical foundation, conduct competitive keyword clustering, enhance your local search profile, and execute authoritative content strategies.'
  },
  {
    id: 'branding',
    title: 'Branding',
    badge: 'Core Identity',
    highlightMetric: 'Lasting Trust',
    shortDescription: 'Build a consistent brand identity that people recognize, remember and trust.',
    deliverables: [
      'Logo design',
      'Brand colors',
      'Typography',
      'Brand guidelines',
      'Social media identity'
    ],
    icon: 'Sparkles',
    imageUrl: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80',
    fullOverview: 'Great brands are unmistakable. We build cohesive visual and strategic identities from the ground up: memorable logo marks, harmonious color palettes, expressive typography systems, and practical guidelines for consistent brand execution.'
  }
];

export const WHY_US_ITEMS: WhyUsItem[] = [
  {
    number: '01',
    title: 'Strategy First',
    description: 'Every campaign starts with a clear strategy aligned with your business goals.',
    tag: 'Strategic Alignment'
  },
  {
    number: '02',
    title: 'Creative That Connects',
    description: 'We create content and campaigns designed to capture attention and communicate your brand.',
    tag: 'Emotional Resonance'
  },
  {
    number: '03',
    title: 'Performance Focused',
    description: 'We focus on meaningful outcomes such as leads, engagement, visibility and growth.',
    tag: 'Outcome Driven'
  },
  {
    number: '04',
    title: 'Data Driven',
    description: 'We use campaign data and insights to continuously improve performance.',
    tag: 'Continuous Optimization'
  },
  {
    number: '05',
    title: 'End-to-End Support',
    description: 'From content and branding to advertising and SEO, we bring multiple digital capabilities together.',
    tag: 'Holistic Execution'
  },
  {
    number: '06',
    title: 'Built for Growth',
    description: 'Our goal is not just to maintain your digital presence — it is to help your business scale.',
    tag: 'Sustainable Scaling'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    name: 'Discover',
    description: 'Understand your business, audience and goals.',
    deliverable: 'Audience persona mapping & brand audit'
  },
  {
    step: '02',
    name: 'Strategize',
    description: 'Build a customized digital marketing strategy.',
    deliverable: 'Quarterly roadmap, channel mix & KPIs'
  },
  {
    step: '03',
    name: 'Create',
    description: 'Develop content, creatives, campaigns and brand assets.',
    deliverable: 'High-converting ad creatives & calendar assets'
  },
  {
    step: '04',
    name: 'Launch',
    description: 'Execute campaigns across the right digital channels.',
    deliverable: 'Precision targeting & live channel rollout'
  },
  {
    step: '05',
    name: 'Optimize & Scale',
    description: 'Analyze performance, improve campaigns and scale what works.',
    deliverable: 'Weekly iteration cycles & budget scaling'
  }
];

export const CONCEPTUAL_METRICS: ConceptualMetric[] = [
  {
    title: 'Reach',
    subtitle: 'Audience Expansion',
    indicator: 'Broadening Market Horizon',
    description: 'Expanding your brand footprint to prospective buyers across high-impact discovery channels.'
  },
  {
    title: 'Engagement',
    subtitle: 'Brand Connection',
    indicator: 'Active Community Dialogue',
    description: 'Turning passive scrollers into interested, loyal participants who interact with your message.'
  },
  {
    title: 'Leads',
    subtitle: 'Inquiry Pipeline',
    indicator: 'High-Intent Opportunities',
    description: 'Attracting decision-makers who genuinely want and need your specific products and services.'
  },
  {
    title: 'Conversions',
    subtitle: 'Bottom-Line Impact',
    indicator: 'Profitable Action',
    description: 'Streamlining user journeys so interest translates directly into commercial transactions and inquiries.'
  },
  {
    title: 'Brand Growth',
    subtitle: 'Compounding Value',
    indicator: 'Market Authority',
    description: 'Establishing memorable market positioning that generates organic recall, trust, and resilience.'
  }
];

export const AUDIENCE_SEGMENTS: AudienceSegment[] = [
  {
    id: 'startups',
    title: 'Startups',
    description: 'Early-stage innovators who need fast market validation, polished digital brand identity, and rapid initial traction.',
    focusAreas: ['Brand Launch', 'Fast Testing', 'Traction Marketing'],
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'small-businesses',
    title: 'Small Businesses',
    description: 'Established local and regional businesses looking to build a modern digital pipeline and outpace competitors.',
    focusAreas: ['Local Presence', 'Lead Acquisition', 'Social Consistency'],
    imageUrl: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'local-businesses',
    title: 'Local Businesses',
    description: 'Brick-and-mortar storefronts, clinics, and professional services that need nearby customers walking through the door.',
    focusAreas: ['Google Business Profile', 'Local SEO', 'Targeted Geofencing'],
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'd2c-brands',
    title: 'D2C Brands',
    description: 'Direct-to-consumer product brands requiring high-velocity content, paid social ads, and optimized repeat retention.',
    focusAreas: ['Reels & Video', 'Meta Advertising', 'Conversion Rates'],
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'service-businesses',
    title: 'Service Businesses',
    description: 'Consultants, agencies, contractors, and B2B services wanting high-intent inquiries sent straight to their phone and inbox.',
    focusAreas: ['Inquiry Forms', 'WhatsApp Funnels', 'Search Intent'],
    imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'growing-brands',
    title: 'Growing Brands',
    description: 'Brands in expansion mode ready to scale advertising spend, build multichannel dominance, and institutionalize their reach.',
    focusAreas: ['Multichannel Scaling', 'Omnichannel Strategy', 'Brand Equity'],
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
  }
];

export const SERVICE_OPTIONS = [
  'Social Media Management',
  'Social Media Marketing',
  'Paid Advertising',
  'Lead Generation',
  'Content Creation',
  'Graphic Design',
  'SEO',
  'Branding',
  'Other'
];

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  'All',
  'Paid Ads',
  'Social Media',
  'Content Studio',
  'Graphic Design',
  'SEO',
  'Branding'
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'paid-ads-d2c',
    title: 'High-ROAS Meta & Google Scaling Funnel',
    category: 'Paid Ads',
    serviceId: 'paid-advertising',
    serviceTitle: 'Paid Advertising',
    badge: 'Performance Marketing',
    metric: '4.4x ROAS • $180K+ Revenue',
    clientIndustry: 'D2C Lifestyle & Apparel',
    description: 'Multi-tier prospecting and dynamic retargeting campaigns across Meta Ads and Google Shopping with continuous creative A/B testing.',
    deliverables: [
      'Meta Advantage+ Shopping Campaigns',
      'Google Search & Performance Max',
      'High-Converting Ad Creative Angles',
      'Full-Funnel Retargeting Architecture'
    ],
    imageUrl: '/images/performance-ads-roi.jpg'
  },
  {
    id: 'social-brand-growth',
    title: 'Organic Instagram & Reels Community Engine',
    category: 'Social Media',
    serviceId: 'social-media-management',
    serviceTitle: 'Social Media Management',
    badge: 'Viral Reach',
    metric: '+140K Followers • 3.2M Impressions',
    clientIndustry: 'Hospitality & Specialty Cafe',
    description: 'Complete social media management featuring daily viral reels, aesthetic carousel curation, and community interaction workflows.',
    deliverables: [
      'Monthly Strategic Content Calendar',
      'Short-Form Reels Production & Hooks',
      'Cohesive Grid Aesthetics & Typography',
      'Active Daily Community Engagement'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'content-studio-production',
    title: 'Commercial Video Production & High-Retention Reels',
    category: 'Content Studio',
    serviceId: 'content-creation',
    serviceTitle: 'Content Creation',
    badge: 'Studio Production',
    metric: '82% Avg Watch Time • 1.8M Organic Views',
    clientIndustry: 'Fitness & Wellness Brand',
    description: 'On-location 4K cinematography, storyboard scripting, kinetic motion typography, and sound design tailored for high audience retention.',
    deliverables: [
      'Hook-Driven Scripting & Storyboards',
      '4K Commercial Location Shooting',
      'Kinetic Subtitles & Micro-Animations',
      'Sound Design & Master Color Grade'
    ],
    imageUrl: '/images/creative-content-studio.jpg'
  },
  {
    id: 'graphic-design-creatives',
    title: 'High-Converting Social Creatives & Brand Banners',
    category: 'Graphic Design',
    serviceId: 'graphic-design',
    serviceTitle: 'Graphic Design',
    badge: 'Visual Craft',
    metric: '+68% Click-Through Rate',
    clientIndustry: 'SaaS & Digital Services',
    description: 'Eye-catching promotional banners, multi-slide educational carousels, and digital ad graphics designed with strategic visual hierarchy.',
    deliverables: [
      'Social Media Feed & Story Packs',
      'Promotional Event & Launch Banners',
      'Iterative Ad Creative Variations',
      'Brand Presentation Decks'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'seo-search-dominance',
    title: 'National Search Ranking & Traffic Acceleration',
    category: 'SEO',
    serviceId: 'seo',
    serviceTitle: 'SEO',
    badge: 'Search Engine Optimization',
    metric: '#1 Rankings • +310% Organic Inflow',
    clientIndustry: 'Healthcare & Professional Services',
    description: 'Technical SEO cleanup, comprehensive keyword cluster architecture, Google Business Profile dominance, and authoritative content creation.',
    deliverables: [
      'High-Intent Keyword Clustering',
      'Core Web Vitals & Technical Optimization',
      'Google Business Profile Domination',
      'Authoritative SEO Content Strategy'
    ],
    imageUrl: '/images/seo-search-ranking.jpg'
  },
  {
    id: 'branding-visual-identity',
    title: 'Complete Brand Identity & Modern Design System',
    category: 'Branding',
    serviceId: 'branding',
    serviceTitle: 'Branding',
    badge: 'Brand Identity',
    metric: 'Full Identity Suite & Guidelines',
    clientIndustry: 'Modern Architectural Studio',
    description: 'Comprehensive brand identity development: distinctive logo mark, bespoke color harmonies, typographic guidelines, and collateral execution.',
    deliverables: [
      'Primary & Responsive Logo Marks',
      'Bespoke Color Palette & Typography System',
      'Comprehensive Brand Guidelines Book',
      'Stationery & Digital Collateral Suite'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'lead-gen-funnel',
    title: 'High-Intent WhatsApp & Lead Capture Funnel',
    category: 'Paid Ads',
    serviceId: 'lead-generation',
    serviceTitle: 'Lead Generation',
    badge: 'Conversion Pipeline',
    metric: '520+ Qualified Leads • $3.20 CPL',
    clientIndustry: 'Real Estate & Luxury Properties',
    description: 'Instant lead capture landing page, click-to-WhatsApp targeted campaigns, and automated routing sequence for rapid sales conversations.',
    deliverables: [
      'High-Converting Mobile Landing Experience',
      'Meta Click-to-WhatsApp Direct Ads',
      'Instant Lead Notification Pipeline',
      'Qualification Quiz & Form Optimization'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'creator-campaign-reels',
    title: 'Viral Product Showcase & Influencer Campaign',
    category: 'Content Studio',
    serviceId: 'social-media-marketing',
    serviceTitle: 'Social Media Marketing',
    badge: 'Content Strategy',
    metric: '4.1M Views • 65K Saves',
    clientIndustry: 'Consumer Tech & Smart Living',
    description: 'Dynamic product unboxing, user problem-solving hooks, and trending audio synchronization engineered for maximum algorithmic distribution.',
    deliverables: [
      'Attention-Grabbing Hook Frameworks',
      'Studio Macro Product Videography',
      'Trending Audio & Pacing Synchronization',
      'Cross-Platform Adaptation (IG & TikTok)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'luxury-product-branding',
    title: 'Boutique Packaging & Digital Brand Experience',
    category: 'Branding',
    serviceId: 'branding',
    serviceTitle: 'Branding',
    badge: 'Packaging & Identity',
    metric: 'Unmistakable Brand Presence',
    clientIndustry: 'Artisanal Skincare & Wellness',
    description: 'Minimalist, luxurious packaging design, physical container typography, social media layout templates, and digital storefront styling.',
    deliverables: [
      'Physical Packaging & Label Die-lines',
      '3D Realistic Product Mockup Suite',
      'Social Media Launch Grid Guidelines',
      'Digital Storefront Aesthetic Guidance'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=1000&q=80'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    clientName: 'Vikram Patel',
    clientRole: 'Co-Founder & CEO',
    businessName: 'LuxeLiving D2C Decor',
    businessType: 'E-Commerce',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    reviewText: 'Scaleup transformed our Meta and Google Ads. Within 60 days, our Return on Ad Spend climbed from 1.8x to a steady 4.6x, and our monthly orders exceeded 1,200. Their creative video team is unbelievable.',
    resultMetric: '4.6x ROAS • +260% Orders',
    serviceUsed: 'Paid Advertising & Content Studio'
  },
  {
    id: 'test-2',
    clientName: 'Dr. Ananya Sharma',
    clientRole: 'Director & Chief Surgeon',
    businessName: 'Aura Aesthetics & Dental',
    businessType: 'Healthcare & Clinic',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    reviewText: 'We went from struggling for consistent patient inquiries to over 70+ qualified consultation appointments per week through their WhatsApp lead funnel and local Google SEO. Unmatched professionalism.',
    resultMetric: '70+ Inquiries/Wk • #1 Local SEO',
    serviceUsed: 'Lead Generation & Local SEO'
  },
  {
    id: 'test-3',
    clientName: 'Rajesh Mehta',
    clientRole: 'Managing Director',
    businessName: 'Apex Skyline Developers',
    businessType: 'B2B & Real Estate',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    reviewText: 'Scaleup delivered exceptional high-intent buyers for our luxury residential launch. Their targeted Meta campaign cut our cost per qualified lead by 42% compared to our previous agency.',
    resultMetric: '-42% CPL • 340+ High-Intent Buyers',
    serviceUsed: 'Paid Ads & WhatsApp Funnels'
  },
  {
    id: 'test-4',
    clientName: 'Pooja Singhania',
    clientRole: 'Founder & Head Designer',
    businessName: 'Velvet Knot Couture',
    businessType: 'E-Commerce',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    reviewText: 'Our Instagram grew organically by 65,000 active followers in 4 months. Their daily Reels concepts went viral multiple times, bringing in direct DM inquiries and international orders.',
    resultMetric: '+65K Followers • 2.8M Views',
    serviceUsed: 'Social Media Management & Reels'
  },
  {
    id: 'test-5',
    clientName: 'Karan Shah',
    clientRole: 'Founder',
    businessName: 'Roast & Beans Artisan Cafe',
    businessType: 'Local Brand',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    reviewText: 'Every weekend our cafe has a queue outside thanks to the hyper-local video campaigns and food influencer collaborations managed by Scaleup. Their weekly reporting gives complete clarity.',
    resultMetric: '+180% Footfall • 1.2M Local Reach',
    serviceUsed: 'Social Media Marketing & Video'
  },
  {
    id: 'test-6',
    clientName: 'Sameer Dave',
    clientRole: 'COO',
    businessName: 'CloudStack SaaS Solutions',
    businessType: 'B2B & Real Estate',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    reviewText: 'Scaleup restructured our B2B search campaigns on Google and redesigned our landing pages. Our demo booking conversion rate increased by 85% in the first quarter.',
    resultMetric: '+85% Demo Conversions',
    serviceUsed: 'SEO & Paid Advertising'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'How quickly can we expect to see measurable results?',
    answer: 'For Paid Advertising (Meta & Google Ads) and Lead Generation campaigns, measurable lead inflow and conversions typically begin within 5 to 10 days of launch. For organic Social Media Management and SEO, consistent compounding growth and search dominance typically build momentum over 60 to 90 days.'
  },
  {
    id: 'faq-2',
    category: 'Paid Ads & ROI',
    question: 'What minimum ad budget do you recommend for paid campaigns?',
    answer: 'We recommend starting with a monthly advertising budget of at least ₹20,000 to ₹35,000 (approx. $300–$500) for local or single-market campaigns, and ₹60,000+ ($800+) for national D2C or multi-city lead generation to allow effective algorithmic learning and audience testing.'
  },
  {
    id: 'faq-3',
    category: 'Social & Content',
    question: 'Do you create all the ad creatives, videos, and copywriting in-house?',
    answer: 'Yes, 100%! We provide end-to-end creative execution: high-converting copywriting, storyboard scripting, custom graphic designs, short-form Reels editing with kinetic motion graphics, and audio synchronization. You approve everything before it goes live.'
  },
  {
    id: 'faq-4',
    category: 'Process & Reporting',
    question: 'How will I stay updated on our campaign performance?',
    answer: 'You will receive weekly performance snapshots directly via WhatsApp and email, along with monthly deep-dive strategy calls. We focus on real commercial KPIs: cost-per-lead (CPL), Return on Ad Spend (ROAS), total inquiries, and pipeline value—not just vanity metrics.'
  },
  {
    id: 'faq-5',
    category: 'Paid Ads & ROI',
    question: 'How do you ensure leads are qualified and not spam?',
    answer: 'We design multi-step qualification funnels, conditional logic forms, and direct click-to-WhatsApp verification pathways with targeted exclusionary audience filters. This filters out tire-kickers and delivers genuine decision-makers.'
  },
  {
    id: 'faq-6',
    category: 'General',
    question: 'Are there any long-term lock-in contracts?',
    answer: 'No rigid lock-in contracts. We work on flexible monthly growth agreements. Our client retention rate is over 92% because our performance speaks for itself month after month.'
  },
  {
    id: 'faq-7',
    category: 'Process & Reporting',
    question: 'What is the onboarding process and how soon can we start?',
    answer: 'Onboarding is seamless and takes less than 48 hours: 1) Initial discovery call & asset access, 2) Tailored 30-day growth roadmap, 3) Creative production & ad setup, 4) Live campaign launch and real-time optimization.'
  },
  {
    id: 'faq-8',
    category: 'Social & Content',
    question: 'Can you work with our existing branding and in-house team?',
    answer: 'Absolutely. We frequently collaborate with internal sales and marketing teams, seamlessly integrating with your existing brand guidelines, CRM systems, and tone of voice.'
  }
];

export const CALCULATOR_INDUSTRIES: CalculatorIndustry[] = [
  {
    id: 'ecommerce',
    name: 'E-Commerce & D2C',
    iconName: 'ShoppingBag',
    avgCpl: 180,
    roasMultiplier: 4.2,
    reachMultiplier: 850,
    recommendedMix: ['Meta Advantage+ Shopping Ads', 'Dynamic Retargeting', 'High-Retention Reels', 'Email/WhatsApp Abandoned Cart']
  },
  {
    id: 'clinic',
    name: 'Clinics & Healthcare',
    iconName: 'HeartPulse',
    avgCpl: 240,
    roasMultiplier: 5.8,
    reachMultiplier: 620,
    recommendedMix: ['Google Local Search Ads', 'WhatsApp Direct Booking', 'Doctor Trust Video Reels', 'Local SEO & GBP Domination']
  },
  {
    id: 'realestate',
    name: 'Real Estate & Property',
    iconName: 'Building',
    avgCpl: 450,
    roasMultiplier: 8.5,
    reachMultiplier: 480,
    recommendedMix: ['High-Intent Meta Lead Forms', 'Brochure Instant WhatsApp Routing', '3D Walkthrough Creatives', 'Google Search PPC']
  },
  {
    id: 'b2b',
    name: 'B2B & SaaS Services',
    iconName: 'Briefcase',
    avgCpl: 520,
    roasMultiplier: 6.2,
    reachMultiplier: 390,
    recommendedMix: ['Search Intent PPC', 'LinkedIn & Meta Retargeting', 'Interactive Demo Landing Pages', 'B2B Case Study Creatives']
  },
  {
    id: 'local',
    name: 'Local Business & Cafe',
    iconName: 'Store',
    avgCpl: 120,
    roasMultiplier: 3.8,
    reachMultiplier: 950,
    recommendedMix: ['Hyper-Local Geotargeted Ads', 'Instagram Viral Food Reels', 'Offer Coupons on WhatsApp', 'Google Maps 5-Star Reviews']
  }
];

export const LIVE_NOTIFICATIONS = [
  {
    id: 'n1',
    business: 'Surat D2C Apparel Brand',
    achievement: 'Achieved 4.8x Meta ROAS with 280+ orders this week',
    time: '4 mins ago',
    tag: 'E-Commerce'
  },
  {
    id: 'n2',
    business: 'Dental & Skin Clinic',
    achievement: 'Generated 42 qualified patient bookings via WhatsApp Funnel',
    time: '18 mins ago',
    tag: 'Healthcare'
  },
  {
    id: 'n3',
    business: 'Luxury Real Estate Group',
    achievement: 'Captured 85 high-net-worth investor inquiries at ₹320 CPL',
    time: '32 mins ago',
    tag: 'Real Estate'
  },
  {
    id: 'n4',
    business: 'Artisan Cafe & Bakery',
    achievement: 'Gained +14,000 local Instagram followers in 3 weeks',
    time: '49 mins ago',
    tag: 'Social Media'
  }
];

export const MARQUEE_ITEMS = [
  '⚡ 4.8x Average Client ROAS',
  '✦ 50+ Ambitious Brands Scaled',
  '🔥 12M+ Monthly Reach Generated',
  '★ Meta & Google Certified Agency',
  '💬 Direct 1-on-1 WhatsApp Reporting',
  '🚀 92% Client Retention Rate',
  '🎯 Custom High-Intent Funnels',
  '✨ In-House 4K Content Studio'
];

export const PRICING_PACKAGES: PricingPackageItem[] = [
  {
    id: 'starter',
    name: 'Brand Foundations',
    tagline: 'Ideal for local businesses & emerging brands building active social presence & trust.',
    priceInr: '₹24,999',
    pricePeriod: '/ month',
    targetAudience: 'Local Businesses • Startups • Solo Founders',
    deliverables: [
      '12 Custom High-Converting Reels & Posts',
      'Strategic Monthly Content Calendar',
      'Instagram & Facebook Complete Management',
      'Hashtag Strategy & Bio Optimization',
      'Community Engagement & DM Assistance',
      'Bi-Weekly WhatsApp Performance Updates'
    ],
    highlight: 'Builds Consistent Brand Authority',
    whatsappPreset: 'Hi Scaleup Marketing, I would like to get started with the Brand Foundations package (₹24,999/mo).'
  },
  {
    id: 'growth',
    name: 'Performance Growth Engine',
    badge: 'Most Popular',
    popular: true,
    tagline: 'Engineered for scaling D2C, clinics & service businesses ready for consistent daily sales & leads.',
    priceInr: '₹49,999',
    pricePeriod: '/ month',
    targetAudience: 'D2C Brands • Doctors & Clinics • Real Estate • High-Ticket Services',
    deliverables: [
      'Everything in Brand Foundations',
      'Meta Ads (FB/IG) & Google Search Campaign Setup',
      'High-Intent Click-to-WhatsApp Funnel Architecture',
      '20 High-Retention Video Reels & Motion Creatives',
      'A/B Split Testing for Ad Hooks & Copy',
      'Conversion Landing Page Optimization',
      'Weekly Dedicated Strategy Call & Real-Time Dashboard'
    ],
    highlight: 'Full-Funnel Customer Acquisition',
    whatsappPreset: 'Hi Scaleup Marketing, I want to scale my business with the Performance Growth Engine package (₹49,999/mo).'
  },
  {
    id: 'scale',
    name: 'Omnichannel Dominance',
    badge: 'Enterprise Scaling',
    tagline: 'Complete hands-off growth partner for established businesses scaling aggressively across all channels.',
    priceInr: '₹89,999',
    pricePeriod: '/ month',
    targetAudience: 'Established Brands • Multi-Location Chains • High-Growth E-Commerce',
    deliverables: [
      'Everything in Performance Growth Engine',
      'Full Omnichannel Ads (Meta + Google + YouTube)',
      'Daily 4K Commercial Video & Reels Production',
      'National & Local SEO Google Search Domination',
      'CRM & Automated Lead Routing Integration',
      'Influencer Collab & UGC Content Direction',
      'Dedicated Senior Growth Director & Priority 24/7 Slack/WhatsApp'
    ],
    highlight: 'Total Market Leadership',
    whatsappPreset: 'Hi Scaleup Marketing, I am interested in the Omnichannel Dominance enterprise package (₹89,999/mo).'
  }
];

export const AGENCY_COMPARISON: ComparisonItem[] = [
  {
    feature: 'Core Strategy & Alignment',
    typicalAgency: 'Generic templates with disconnected vanity metrics like follower counts.',
    scaleupAgency: 'Commercial ROI first — focused on qualified leads, lower CPL, and profitable revenue.'
  },
  {
    feature: 'Content & Video Production',
    typicalAgency: 'Stock images, basic templates, or requires you to film all video content yourself.',
    scaleupAgency: 'In-house high-retention scripting, motion graphics, audio sync, and studio-grade reels.'
  },
  {
    feature: 'Communication & Updates',
    typicalAgency: 'Delayed monthly PDF reports sent via email with confusing technical jargon.',
    scaleupAgency: 'Direct 1-on-1 WhatsApp access with weekly transparent metric snapshots.'
  },
  {
    feature: 'Ad Funnels & Conversion',
    typicalAgency: 'Basic "Boost Post" buttons or unoptimized traffic campaigns.',
    scaleupAgency: 'Full-funnel architectures: Retargeting, Click-to-WhatsApp direct routing, and high-converting landing pages.'
  },
  {
    feature: 'Contract Flexibility',
    typicalAgency: 'Locked into rigid 6–12 month binding contracts with zero performance accountability.',
    scaleupAgency: 'Flexible monthly growth agreements. 92%+ client retention backed purely by results.'
  }
];


