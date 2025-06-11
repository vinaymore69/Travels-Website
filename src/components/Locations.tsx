import React from 'react';
import { MapPin, Mountain, Waves, TreePine, Building, Star } from 'lucide-react';

const Locations: React.FC = () => {
  const locations = [
    {
      name: 'Karjat',
      description: 'Scenic hill station perfect for weekend getaways',
      icon: Mountain,
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400',
      highlights: ['Adventure Sports', 'River Rafting', 'Trekking']
    },
    {
      name: 'Lonavala',
      description: 'Famous for its scenic beauty and pleasant weather',
      icon: Mountain,
      image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=400',
      highlights: ['Monsoon Beauty', 'Hill Stations', 'Photography']
    },
    {
      name: 'Mahabaleshwar',
      description: 'Queen of hill stations with strawberry farms',
      icon: TreePine,
      image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=400',
      highlights: ['Strawberry Gardens', 'Scenic Views', 'Cool Climate']
    },
    {
      name: 'All Gujarat',
      description: 'Vibrant culture and heritage destinations',
      icon: Building,
      image: 'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=400',
      highlights: ['Cultural Heritage', 'Handicrafts', 'Festivals']
    },
    {
      name: 'All Goa',
      description: 'Beach paradise with Portuguese heritage',
      icon: Waves,
      image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=400',
      highlights: ['Pristine Beaches', 'Nightlife', 'Water Sports']
    },
    {
      name: 'All Karnataka',
      description: 'Rich history and diverse landscapes',
      icon: Building,
      image: 'https://images.pexels.com/photos/12935070/pexels-photo-12935070.jpeg?auto=compress&cs=tinysrgb&w=400',
      highlights: ['Historic Monuments', 'Gardens', 'Wildlife']
    },
    {
      name: 'Konkan Coast',
      description: 'Pristine beaches and coastal beauty',
      icon: Waves,
      image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400',
      highlights: ['Coastal Cuisine', 'Beaches', 'Fishing Villages']
    },
    {
      name: 'Shirdi',
      description: 'Spiritual destination and pilgrimage site',
      icon: Star,
      image: 'https://images.pexels.com/photos/7233360/pexels-photo-7233360.jpeg?auto=compress&cs=tinysrgb&w=400',
      highlights: ['Sai Baba Temple', 'Spiritual Journey', 'Peace']
    },
    {
      name: 'Trimbakeshwar',
      description: 'Sacred Jyotirlinga temple destination',
      icon: Star,
      image: 'https://images.pexels.com/photos/4009506/pexels-photo-4009506.jpeg?auto=compress&cs=tinysrgb&w=400',
      highlights: ['Ancient Temple', 'Spiritual Experience', 'Rituals']
    },
    {
      name: 'Nashik',
      description: 'Wine capital and religious significance',
      icon: Mountain,
      image: 'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=400',
      highlights: ['Wine Tours', 'Temples', 'Vineyards']
    },
    {
      name: 'Kolhapur',
      description: 'Royal heritage and cultural richness',
      icon: Building,
      image: 'https://images.pexels.com/photos/8078361/pexels-photo-8078361.jpeg?auto=compress&cs=tinysrgb&w=400',
      highlights: ['Royal Palace', 'Cuisine', 'Wrestling']
    },
    {
      name: 'Pune',
      description: 'Cultural capital with modern amenities',
      icon: Building,
      image: 'https://images.pexels.com/photos/1098515/pexels-photo-1098515.jpeg?auto=compress&cs=tinysrgb&w=400',
      highlights: ['IT Hub', 'Education', 'Cultural Sites']
    }
  ];

  return (
    <section id="locations" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            Destinations We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From scenic hill stations to vibrant cities, explore the diverse beauty of India with our carefully curated destinations
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <location.icon className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-800 mb-2">
                  {location.name}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {location.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  {location.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-500">
                      <MapPin className="w-3 h-3 text-gold-500 mr-2 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Action */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full bg-gradient-to-r from-primary-800 to-gold-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300"
                  >
                    Plan Your Visit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Destinations */}
        <div className="mt-16 bg-gradient-to-r from-primary-800 to-gold-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Special Pilgrimage Tours
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Experience spiritual journeys to sacred destinations with our specialized pilgrimage packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-gold-300" />
              </div>
              <h4 className="text-xl font-bold mb-2">Shani Shingnapur</h4>
              <p className="text-white/80 text-sm">Sacred village with no doors, dedicated to Lord Shani</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-gold-300" />
              </div>
              <h4 className="text-xl font-bold mb-2">Spiritual Circuits</h4>
              <p className="text-white/80 text-sm">Complete pilgrimage tours covering multiple sacred sites</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;