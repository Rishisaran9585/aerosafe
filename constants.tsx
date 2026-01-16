
import { NavItem, ServiceCard, Package, Vehicle } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Experiences', path: '/packages' },
  { label: 'Fleet', path: '/fleet' },
  { label: 'Visa', path: '/visa' },
  { label: 'Hospitality', path: '/hotels' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: ServiceCard[] = [
  {
    id: '1',
    title: 'Bespoke Holiday Packages',
    description: 'Ultra-luxury curated itineraries covering Dubai, Abu Dhabi, and beyond.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
    path: '/packages'
  },
  {
    id: '2',
    title: 'The Golden Safari',
    description: 'Authentic desert experiences with private heritage conservation areas.',
    image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?auto=format&fit=crop&q=80&w=800',
    path: '/safari'
  },
  {
    id: '3',
    title: 'The Elite Fleet',
    description: 'A dedicated collection of over 50 vehicles maintained to VIP standards.',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800',
    path: '/fleet'
  },
  {
    id: '4',
    title: 'Visa Concierge',
    description: 'White-glove visa processing for individuals and large corporate groups.',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800',
    path: '/visa'
  }
];

export const HOLIDAY_PACKAGES: Package[] = [
  { id: 'p1', title: 'Royal Burj Experience', price: '$2,499', duration: '4 Nights', image: 'https://images.unsplash.com/photo-1544945582-3b466d874eac?auto=format&fit=crop&q=80&w=800', category: 'Platinum' },
  { id: 'p2', title: 'The Desert Sanctuary', price: '$1,850', duration: '3 Nights', image: 'https://images.unsplash.com/photo-1512632571267-0c2745a050ad?auto=format&fit=crop&q=80&w=800', category: 'Luxury' },
  { id: 'p3', title: 'Corporate Dubai Tour', price: 'Custom', duration: '7 Nights', image: 'https://images.unsplash.com/photo-1523496922380-91d5afcf98ba?auto=format&fit=crop&q=80&w=800', category: 'Corporate' },
  { id: 'p4', title: 'The Arabian Honeymoon', price: '$3,100', duration: '5 Nights', image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&q=80&w=800', category: 'Romantic' },
  { id: 'p5', title: 'Abu Dhabi Grandeur', price: '$1,200', duration: '2 Nights', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800', category: 'Culture' },
  { id: 'p6', title: 'Family Fun at Atlantis', price: '$2,100', duration: '4 Nights', image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&q=80&w=800', category: 'Family' },
];

export const FLEET_VEHICLES: Vehicle[] = [
  { id: 'v1', name: 'Rolls Royce Cullinan', capacity: '4 Seats', image: 'https://images.unsplash.com/photo-1631215539591-ba284897f394?auto=format&fit=crop&q=80&w=800', category: 'Luxury' },
  { id: 'v2', name: 'Toyota Land Cruiser (GXR)', capacity: '6 Seats', image: 'https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&q=80&w=800', category: 'Luxury' },
  { id: 'v3', name: 'Mercedes V-Class VIP', capacity: '6 Seats', image: 'https://images.unsplash.com/photo-1537984822441-cff3300753aa?auto=format&fit=crop&q=80&w=800', category: 'Luxury' },
  { id: 'v4', name: 'GMC Yukon XL Premium', capacity: '7 Seats', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800', category: 'Luxury' },
  { id: 'v5', name: 'Luxury Mini Bus', capacity: '14 Seats', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800', category: 'Standard' },
  { id: 'v6', name: 'King Long Luxury Coach', capacity: '55 Seats', image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800', category: 'Coach' },
];
