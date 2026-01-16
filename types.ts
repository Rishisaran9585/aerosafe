
export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  image: string;
  path: string;
}

export interface Package {
  id: string;
  title: string;
  price: string;
  duration: string;
  image: string;
  category: string;
}

export interface Vehicle {
  id: string;
  name: string;
  capacity: string;
  image: string;
  category: 'Luxury' | 'Standard' | 'Coach';
}
