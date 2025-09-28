export interface AmbianceImage {
  src: string;
  alt: string;
}

export interface Award {
  icon: string;
  title: string;
  organization: string;
  year: string;
}

export const ambianceImages: AmbianceImage[] = [
  { 
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop', 
    alt: 'Cozy interior dining area' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop', 
    alt: 'Restaurant exterior at night' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600&h=400&fit=crop', 
    alt: 'A view of the bar' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop', 
    alt: 'Outdoor patio seating' 
  },
];

export const awards: Award[] = [
  {
    icon: '🏆',
    title: 'Best Fine Dining in Melbourne',
    organization: 'Melbourne Food & Wine Awards',
    year: '2024'
  },
  {
    icon: '🏆',
    title: 'TripAdvisor Travellers\' Choice',
    organization: 'TripAdvisor Australia',
    year: '2025'
  },
  {
    icon: '🏆',
    title: 'Excellence in Modern Australian Cuisine',
    organization: 'Australian Culinary Federation',
    year: '2023'
  },
  {
    icon: '🏆',
    title: 'Outstanding Service Award',
    organization: 'Restaurant & Catering Australia',
    year: '2024'
  }
];

export const aboutContent = {
  story: "Founded in 2024 in one of Melbourne's vibrant laneways, The Golden Fork began as a humble dream to blend Victoria's world-class produce with classic international dishes. We wanted to create a warm, inviting space where every meal tells a story and brings people together.",
  mission: "To provide an unforgettable dining experience by combining creative cuisine with exceptional, warm hospitality. We are committed to using fresh, locally-sourced ingredients from Victoria's renowned food regions and supporting Australian producers.",
  chef: "With over 15 years of experience across Melbourne's finest restaurants, Chef Alex Chen brings a unique blend of classic techniques and modern Australian innovation to The Golden Fork, celebrating the exceptional quality of Victorian produce."
};