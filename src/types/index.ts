export interface NavLink {
  name: string;
  path: string;
}

export interface Statistic {
  value: string;
  label: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  authorName: string;
  authorImage: string;
}

export interface PollutionType {
  id: string;
  title: string;
  description: string;
  image: string;
  causes: string[];
  consequences: string[];
  stats: {
    figure: string;
    description: string;
    source: string;
  };
}

export interface ConservationInitiative {
  id: string;
  name: string;
  description: string;
  organization: string;
  location: string;
  coordinates: [number, number];
  image: string;
  website: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}