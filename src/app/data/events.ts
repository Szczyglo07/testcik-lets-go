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
    title: 'SUN FESIVAL',
    category: 'festival',
    date: '2026-07-15',
    time: '18:00',
    venue: 'Nadmorski Park Kultury',
    location: 'Kolobrzeg Poland',
    image: 'https://images.unsplash.com/photo-1760822400484-d7e9e2c6aacc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZhbCUyMG91dGRvb3IlMjBldmVudHxlbnwxfHx8fDE3NzEzMTA2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: ' SUMMER SOUND FESTIVAL 2026 Imagine a warm summer evening, the sunset glowing behind the stage, and thousands of people singing their favorite songs together. Summer Sound Festival is more than just a concert — it’s a few unforgettable days filled with music, эмоtions, and pure energy.On the main stage you’ll experience legendary performances and some of the hottest names in modern music. Feel the powerful sound of Linkin Park, the late-night city vibe of Taco Hemingway, plus incredible shows from artists like Imagine Dragons, Dawid Podsiadło, Billie Eilish, PRO8L3M, Bring Me The Horizon, and many more. Each festival day blends rock, rap, alternative, and electronic sounds into one epic experience.Beyond the concerts, you’ll find a chillout zone, food trucks serving flavors from around the world, a silent disco under the stars, and spectacular light shows turning the night into a sea of color. It’s a place to meet people who share your energy and create memories that will last all summer.Gather your crew, pack your best vibes, and get ready for a weekend that sounds like your ultimate playlist. Summer Sound Festival — this is where your summer begins.',
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
    description: 'SUMMER SOUND FESTIVAL 2026 – ROCK LEGENDS EDITION.Feel the ground shake beneath the stage, lights cutting through the warm summer sky, and thousands of voices singing the greatest rock anthems of all time. Summer Sound Festival returns in a louder, heavier version — packed with roaring guitars, massive drums, and unstoppable energy from start to finish.This year, the lineup is built around true icons of rock and metal. Linkin Park, Limp Bizkit, Metallica, AC/DC, System Of A Down, and Bon Jovi will take over the main stage, delivering legendary performances and timeless hits that defined generations. From explosive nu-metal to classic stadium rock, every moment is designed to feel epic.But the experience goes far beyond the music. Discover immersive light shows, a huge festival village filled with food trucks from around the world, chillout zones to recharge between concerts, and late-night afterparties that keep the adrenaline going until sunrise. Whether you’re headbanging in the crowd or singing with friends under the stars, this is where unforgettable memories are made.Gather your crew, turn up the volume, and get ready for a weekend powered by pure rock energy. Summer Sound Festival — where legends meet the next generation..',
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
  {
  id: '7',
  title: 'Stand-up Night Live',
  category: 'comedy',
  date: '2026-08-10',
  time: '20:30',
  venue: 'Comedy Club',
  location: 'Warsaw, PL',
  image: 'https://images.unsplash.com/photo-1527224538127-2104bb71c51b',
  description:'',
  ticketTypes: [
    {id: 't7-1', name: 'Standard', price: 45, available: 200,},
    {id: 't7-2', name: 'VIP', price: 90, available:80},
  ],
},

{
  id: '8',
  title: 'Tech Future Conference',
  category: 'conference',
  date: '2026-09-05',
  time: '09:00',
  venue: 'Expo Center',
  location: 'Kraków, PL',
  image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
  description:'',
  ticketTypes: [
    {id: 't8-1', name: 'Standard', price: 45, available: 200,},
    {id: 't8-2', name: 'VIP', price: 90, available:80},
  ],
},

{
  id: '9',
  title: 'The Phantom Theater Show',
  category: 'theater',
  date: '2026-07-20',
  time: '18:00',
  venue: 'Grand Theatre',
  location: 'Gdansk, PL',
  image: 'https://images.unsplash.com/photo-1503095396549-807759245b35',
  description:'',
  ticketTypes: [
    {id: 't9-1', name: 'Standard', price: 45, available: 200,},
    {id: 't9-2', name: 'VIP', price: 90, available:80},
  ],
},

{
  id: '10',
  title: 'Electronic Music Festival',
  category: 'music',
  date: '2026-08-25',
  time: '22:00',
  venue: 'Open Air Arena',
  location: 'Berlin, DE',
  image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063',
  description:'',
  ticketTypes: [
    {id: 't10-1', name: 'Standard', price: 45, available: 200,},
    {id: 't10-2', name: 'VIP', price: 90, available:80},
  ],
},
];
