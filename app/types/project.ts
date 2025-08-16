export interface Project {
  title: string;
  description: string;
  imageSrc: string;
  slug: string;
  featureShowcases: FeatureShowcase[];
  tools: string[];
}

export interface FeatureShowcase {
  name: string;
  videoSrc?: string;
  imagesSrc?: string[];
}
