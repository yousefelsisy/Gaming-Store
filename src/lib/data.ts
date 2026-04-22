export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  specs: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Cyberpunk 2077',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1605898918448-43093296c093?auto=format&fit=crop&w=800&q=80',
    category: 'Games',
    description: 'An open-world, action-adventure story set in Night City.',
    specs: ['Platform: PC', 'Genre: RPG', 'Developer: CD Projekt Red']
  },
  {
    id: '2',
    name: 'RTX 4090 Graphics Card',
    price: 1599.99,
    image: 'https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=800&q=80',
    category: 'Hardware',
    description: 'The ultimate GeForce GPU. It brings an enormous leap in performance.',
    specs: ['24GB GDDR6X', 'DLSS 3', 'Ray Tracing']
  },
  {
    id: '3',
    name: 'Mechanical Gaming Keyboard',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=80',
    category: 'Accessories',
    description: 'Ultra-responsive mechanical switches for professional gaming.',
    specs: ['RGB Lighting', 'Blue Switches', 'N-Key Rollover']
  },
  {
    id: '4',
    name: 'Elden Ring',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=800&q=80',
    category: 'Games',
    description: 'Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring.',
    specs: ['Platform: PC/Console', 'Genre: Soulslike', 'Developer: FromSoftware']
  },
  {
    id: '5',
    name: 'Gaming Mouse Pro',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80',
    category: 'Accessories',
    description: 'High-precision sensor with customizable buttons.',
    specs: ['16000 DPI', 'Wireless', 'Ergonomic']
  },
  {
    id: '6',
    name: '27" 144Hz Monitor',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
    category: 'Hardware',
    description: 'Crystal clear visuals with lightning fast refresh rates.',
    specs: ['1ms Response', 'IPS Panel', 'FreeSync']
  }
];
