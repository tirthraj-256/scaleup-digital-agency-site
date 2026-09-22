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
