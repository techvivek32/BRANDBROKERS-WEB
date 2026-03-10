// Database document interfaces
export interface Service {
  _id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  email: string;
  linkedin?: string;
  bio: string;
  image: string;
}

export interface Client {
  _id: string;
  name: string;
  logo: string;
  website: string;
}

export interface CaseStudy {
  _id: string;
  title: string;
  client: string;
  description: string;
  strategy?: string;
  results?: string;
  stats: Array<{
    label: string;
    value: string;
  }>;
  images: string[];
  featured?: boolean;
}

export interface RosterMember {
  _id: string;
  name: string;
  platform: string;
  followers: string;
  category: string;
  bio: string;
  image: string;
  socialLinks: {
    instagram?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  featured?: boolean;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  image: string;
  price?: string;
  link: string;
}

export interface Testimonial {
  _id: string;
  name: string;
  company: string;
  review: string;
  rating: number;
  image: string;
}

export interface ContactSubmission {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}