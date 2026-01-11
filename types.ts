export interface ServiceStep {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  benefit: string;
  icon: string;
}

export enum FormStatus {
  IDLE = 'IDLE',
  ANALYZING = 'ANALYZING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}