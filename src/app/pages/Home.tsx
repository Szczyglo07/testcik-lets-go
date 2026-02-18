import { useState } from 'react';
import { Link } from 'react-router';
import { events } from '../data/events';
import { Card, CardContent, CardFooter } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Calendar, MapPin, Clock } from 'lucide-react';

const categories = ['all', 'music', 'sports', 'theater', 'comedy', 'festival', 'conference'];
const categoryLabels: Record<string, string> = {
  all: 'Wszystkie',
  music: 'Muzyka',
  sports: 'Sport',
  theater: 'Teatr',
  comedy: 'Stand-up',
  festival: 'Festiwal',
  conference: 'Konferencje',
};

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredEvents =
    selectedCategory === 'all'
      ? events
      : events.filter((event) => event.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl mb-4">Odkryj Niesamowite Wydarzenia</h1>
          <p className="text-xl opacity-90">Znajdz i zamow swoje bilety na concerty,mecze,teatr i znacznie wiecej</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="whitespace-nowrap"
            >
              {categoryLabels[category]}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge>{event.category}</Badge>
                  <span className="text-sm text-gray-600">
                    From ${Math.min(...event.ticketTypes.map((t) => t.price))}
                  </span>
                </div>
                <h3 className="text-xl mb-3">{event.title}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="size-4" />
                    {new Date(event.date).toLocaleDateString('en-US', {
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="size-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4" />
                    {event.venue}, {event.location}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link to={`/event/${event.id}`} className="w-full">
                  <Button className="w-full">View Details</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No events found in this category</p>
          </div>
        )}
      </div>
    </div>
  );
}
