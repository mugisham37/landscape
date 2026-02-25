export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  location: string;
  heroImage: string;
  cardImagePrimary: string;
  cardImageSecondary: string;
  overviewImage: string;
  overviewText: string;
  propertyImages: string[];
  properties: {
    type: string;
    modern: string;
    targetMarket: string;
    uniqueSellingPoints: string;
  };
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'urban-retreat-in-golden-gate-park',
    title: 'Urban Retreat in Golden Gate Park',
    category: 'Urbano',
    description: 'Golden Gate Park offers landscapes, museums, and gardens, perfect for walks and picnics.',
    location: 'Seattle, Washington, United States',
    heroImage: 'https://cdn.prod.website-files.com/67463b290def428dc18a793d/674dcec6bbb8e24aa9d184bc_hero%20image.webp',
    cardImagePrimary: 'https://cdn.prod.website-files.com/67463b290def428dc18a793d/674dce1e9ac95a1cf3dd1785_gallery%20primary%20image.webp',
    cardImageSecondary: 'https://cdn.prod.website-files.com/67463b290def428dc18a793d/67635d14c9c69db72e7a2f6f_project%20one%20-%20image%20two.png',
    overviewImage: 'https://cdn.prod.website-files.com/67463b290def428dc18a793d/674dcefd46056db7ddf4111e_overview%20image.webp',
    overviewText: 'Urban Retreat in Golden Gate Park offers a peaceful escape within San Francisco\'s vibrant cityscape, blending natural beauty with modern amenities. Perfect for relaxation and outdoor adventures.',
    propertyImages: [
      'https://cdn.prod.website-files.com/67463b290def428dc18a793d/674dcf3db3170ddfca0644c2_property%20image.webp',
      'https://cdn.prod.website-files.com/67463b290def428dc18a793d/67635d622dd4859d63c7fe21_property%20image%20two.png'
    ],
    properties: {
      type: 'Residential',
      modern: 'Eco-friendly',
      targetMarket: 'Tourists',
      uniqueSellingPoints: 'Sustainable living options'
    }
  },
  {
    id: '2',
    slug: 'grand-conference-hall',
    title: 'Grand Conference Hall',
    category: 'Interior',
    description: 'A spacious conference room with natural light for meetings and presentations.',
    location: 'Oaklanda, California, United States',
    heroImage: 'https://cdn.prod.website-files.com/67463b290def428dc18a793d/674dd29ac78ecb92907642dd_gallery%20primary%20image.webp',
    cardImagePrimary: 'https://cdn.prod.website-files.com/67463b290def428dc18a793d/674dd29ac78ecb92907642dd_gallery%20primary%20image.webp',
    cardImageSecondary: 'https://cdn.prod.website-files.com/67463b290def428dc18a793d/67635ef59ce3a04c107af9cc_project%20one%20-%20image%20two.png',
    overviewImage: 'https://cdn.prod.website-files.com/67463b290def428dc18a793d/674dd29ac78ecb92907642dd_gallery%20primary%20image.webp',
    overviewText: 'A modern conference hall designed for corporate events, featuring state-of-the-art technology and flexible seating arrangements.',
    propertyImages: [
      'https://cdn.prod.website-files.com/67463b290def428dc18a793d/674dd29ac78ecb92907642dd_gallery%20primary%20image.webp',
      'https://cdn.prod.website-files.com/67463b290def428dc18a793d/67635ef59ce3a04c107af9cc_project%20one%20-%20image%20two.png'
    ],
    properties: {
      type: 'Commercial',
      modern: 'Contemporary',
      targetMarket: 'Corporate',
      uniqueSellingPoints: 'Advanced AV systems'
    }
  },
  {
    id: '3',
    slug: 'shopping-center',
    title: 'Shopping Center',
    category: 'Urbano',
    description: 'A contemporary, light-filled shopping center offering an unforgettable visitor experience.',
    location: 'Seattle, Washington, United States',
    heroImage: 'https://cdn.prod.website-files.com/67463b290def428dc18a793d/674dd4d149bbe336d45c695e_gallery%20primary%20image.webp',
    cardImagePrimary: 'https://cdn.prod.website-files.com/67463b290def428dc18a793d/674dd4d149bbe336d45c695e_gallery%20primary%20image.webp',
    cardImageSecondary: 'https://cdn.prod.website-files.com/67463b290def428dc18a793d/67635f2e8a0b75c49bb987fc_project%20one%20-%20image%20two.png',
    overviewImage: 'https://cdn.prod.website-files.com/67463b290def428dc18a793d/674dd4d149bbe336d45c695e_gallery%20primary%20image.webp',
    overviewText: 'A vibrant shopping destination that combines retail excellence with architectural innovation, creating a memorable experience for visitors.',
    propertyImages: [
      'https://cdn.prod.website-files.com/67463b290def428dc18a793d/674dd4d149bbe336d45c695e_gallery%20primary%20image.webp',
      'https://cdn.prod.website-files.com/67463b290def428dc18a793d/67635f2e8a0b75c49bb987fc_project%20one%20-%20image%20two.png'
    ],
    properties: {
      type: 'Retail',
      modern: 'Contemporary',
      targetMarket: 'General Public',
      uniqueSellingPoints: 'Natural lighting design'
    }
  },
  {
    id: '4',
    slug: 'sustainable-offices',
    title: 'Sustainable Offices',
    category: 'Corporate',
    description: 'A contemporary, light-filled Offices Ecological technologies and recyclable materials',
    location: 'Seattle, Washington, United States',
    heroImage: 'https://cdn.prod.website-files.com/67463b290def428dc18a793d/674dd95bb0281c1d7023422f_gallery%20primary%20image.webp',
    cardImagePrimary: 'https://cdn.prod.website-files.com/67463b290def428dc18a793d/674dd95bb0281c1d7023422f_gallery%20primary%20image.webp',
    cardImageSecondary: 'https://cdn.prod.website-files.com/67463b290def428dc18a793d/67635f8677bcf251aa6371cd_project%20one%20-%20image%20two.png',
    overviewImage: 'https://cdn.prod.website-files.com/67463b290def428dc18a793d/674dd95bb0281c1d7023422f_gallery%20primary%20image.webp',
    overviewText: 'Sustainable office spaces that prioritize environmental responsibility while maintaining modern comfort and productivity.',
    propertyImages: [
      'https://cdn.prod.website-files.com/67463b290def428dc18a793d/674dd95bb0281c1d7023422f_gallery%20primary%20image.webp',
      'https://cdn.prod.website-files.com/67463b290def428dc18a793d/67635f8677bcf251aa6371cd_project%20one%20-%20image%20two.png'
    ],
    properties: {
      type: 'Office',
      modern: 'Sustainable',
      targetMarket: 'Businesses',
      uniqueSellingPoints: 'Green building certification'
    }
  }
];

export const getFeaturedProject = (): Project => {
  return projects[0]; // Urban Retreat in Golden Gate Park
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getAllProjects = (): Project[] => {
  return projects;
};

export const getOtherProjects = (currentSlug: string): Project[] => {
  return projects.filter(project => project.slug !== currentSlug);
};
