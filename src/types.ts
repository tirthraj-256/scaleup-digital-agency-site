export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  deliverables: string[];
  icon: string;
  badge: string;
  highlightMetric: string;
  fullOverview: string;
  imageUrl?: string;
}

export interface WhyUsItem {
  number: string;
  title: string;
  description: string;
  tag: string;
}

export interface ProcessStep {
  step: string;
  name: string;
  description: string;
  deliverable: string;
}

export interface AudienceSegment {
  id: string;
  title: string;
  description: string;
  focusAreas: string[];
  imageUrl?: string;
}

export interface ConceptualMetric {
  title: string;
  subtitle: string;
  indicator: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export type GalleryCategory =
  | 'All'
  | 'Paid Ads'
  | 'Social Media'
  | 'Content Studio'
  | 'Graphic Design'
  | 'SEO'
  | 'Branding';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Paid Ads' | 'Social Media' | 'Content Studio' | 'Graphic Design' | 'SEO' | 'Branding';
  serviceId: string;
  serviceTitle: string;
  badge: string;
  metric: string;
  clientIndustry: string;
  description: string;
  deliverables: string[];
  imageUrl: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  clientRole: string;
  businessName: string;
  businessType: 'E-Commerce' | 'Healthcare & Clinic' | 'B2B & Real Estate' | 'Local Brand';
  avatarUrl: string;
  rating: number;
  reviewText: string;
  resultMetric: string;
  serviceUsed: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Paid Ads & ROI' | 'Social & Content' | 'Process & Reporting';
}

export interface CalculatorIndustry {
  id: string;
  name: string;
  iconName: string;
  avgCpl: number; // in INR
  roasMultiplier: number;
  reachMultiplier: number; // reach per 1000 INR
  recommendedMix: string[];
}

export interface AuditFormData {
  name: string;
  businessName: string;
  websiteOrHandle: string;
  phone: string;
  email: string;
  primaryGoal: string;
  monthlyBudget: string;
}

export interface PricingPackageItem {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  tagline: string;
  priceInr: string;
  pricePeriod: string;
  targetAudience: string;
  deliverables: string[];
  highlight: string;
  whatsappPreset: string;
}

export interface ComparisonItem {
  feature: string;
  typicalAgency: string;
  scaleupAgency: string;
}


