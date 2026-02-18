export interface Event {
  id: string;
  title: string;
  category: 'music' | 'sports' | 'theater' | 'comedy' | 'festival' | 'conference';
  date: string;
  time: string;
  venue: string;
  location: string;
  image: string;
  description: string;
  ticketTypes: TicketType[];
}

export interface TicketType {
  id: string;
  name: string;
  price: number;
  available: number;
  description?: string;
}

export const events: Event[] = [
  {
    id: '1',
    title: 'Summer Music Festival 2026',
    category: 'festival',
    date: '2026-07-15',
    time: '18:00',
    venue: 'Central Park',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1760822400484-d7e9e2c6aacc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZhbCUyMG91dGRvb3IlMjBldmVudHxlbnwxfHx8fDE3NzEzMTA2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Join us for an unforgettable evening of live music featuring top artists from around the world. Experience multiple stages, food trucks, and an amazing atmosphere.',
    ticketTypes: [
      { id: 't1-1', name: 'General Admission', price: 89, available: 500 },
      { id: 't1-2', name: 'VIP Pass', price: 199, available: 100, description: 'Includes backstage access and meet & greet' },
      { id: 't1-3', name: 'Premium Lounge', price: 349, available: 50, description: 'Private lounge, open bar, premium seating' },
    ],
  },
  {
    id: '2',
    title: 'Rock Legends Live',
    category: 'music',
    date: '2026-05-20',
    time: '20:00',
    venue: 'Madison Square Garden',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1656283384093-1e227e621fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwY3Jvd2QlMjBtdXNpY3xlbnwxfHx8fDE3NzEzNDM0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'The biggest rock concert of the year! Classic hits and new anthems in one legendary night.',
    ticketTypes: [
      { id: 't2-1', name: 'Upper Bowl', price: 75, available: 1000 },
      { id: 't2-2', name: 'Lower Bowl', price: 125, available: 500 },
      { id: 't2-3', name: 'Floor Seats', price: 250, available: 200 },
    ],
  },
  {
    id: '3',
    title: 'Championship Finals',
    category: 'sports',
    date: '2026-06-10',
    time: '19:30',
    venue: 'National Stadium',
    location: 'Los Angeles, CA',
    image: 'https://images.unsplash.com/photo-1758227231013-8cff978f1dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBzdGFkaXVtJTIwZ2FtZXxlbnwxfHx8fDE3NzEzMjk3OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Witness history in the making! The ultimate showdown for the championship title.',
    ticketTypes: [
      { id: 't3-1', name: 'Nosebleed Section', price: 95, available: 2000 },
      { id: 't3-2', name: 'Mid-Level', price: 175, available: 800 },
      { id: 't3-3', name: 'Courtside', price: 499, available: 100 },
    ],
  },
  {
    id: '4',
    title: 'Broadway: The Phantom Returns',
    category: 'theater',
    date: '2026-04-25',
    time: '19:00',
    venue: 'Broadway Theater',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1609039504401-47ac3940f378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwcGVyZm9ybWFuY2UlMjBzdGFnZXxlbnwxfHx8fDE3NzEyNjc0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A spectacular theatrical masterpiece returns to Broadway. Don\'t miss this critically acclaimed performance.',
    ticketTypes: [
      { id: 't4-1', name: 'Balcony', price: 65, available: 300 },
      { id: 't4-2', name: 'Mezzanine', price: 115, available: 200 },
      { id: 't4-3', name: 'Orchestra', price: 185, available: 150 },
    ],
  },
  {
    id: '5',
    title: 'Comedy Night: Stand-Up Stars',
    category: 'comedy',
    date: '2026-03-30',
    time: '20:30',
    venue: 'Comedy Club Downtown',
    location: 'Chicago, IL',
    image: 'https://images.unsplash.com/photo-1762537132884-cc6bbde0667a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFuZHVwJTIwY29tZWR5JTIwc2hvd3xlbnwxfHx8fDE3NzEzMDgzMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'An evening of non-stop laughter with the best comedians in the business. Rated PG-13.',
    ticketTypes: [
      { id: 't5-1', name: 'General Seating', price: 45, available: 150 },
      { id: 't5-2', name: 'Table Seating', price: 75, available: 50, description: 'Reserved table for up to 4 people' },
    ],
  },
  {
    id: '6',
    title: 'Tech Innovation Summit 2026',
    category: 'conference',
    date: '2026-09-12',
    time: '09:00',
    venue: 'Convention Center',
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwYnVzaW5lc3MlMjBldmVudHxlbnwxfHx8fDE3NzEzNTI2MTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Join industry leaders and innovators for three days of insights, networking, and the future of technology.',
    ticketTypes: [
      { id: 't6-1', name: 'Single Day Pass', price: 299, available: 500 },
      { id: 't6-2', name: 'Full Conference Pass', price: 799, available: 300 },
      { id: 't6-3', name: 'VIP All-Access', price: 1499, available: 50, description: 'Exclusive workshops, dinner events, and networking sessions' },
    ],
  },
];
