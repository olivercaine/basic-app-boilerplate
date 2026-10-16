import { useState } from 'react';
import AirbnbHeader from '@/components/AirbnbHeader';
import AirbnbSearchBar from '@/components/AirbnbSearchBar';

const categories = [
  { id: 1, label: 'Beachfront', icon: '🏖️' },
  { id: 2, label: 'Cabins', icon: '🛏️' },
  { id: 3, label: 'Tiny homes', icon: '🏠' },
  { id: 4, label: 'Amazing views', icon: '🌄' },
  { id: 5, label: 'Design', icon: '🎨' },
  { id: 6, label: 'Countryside', icon: '🌾' },
  { id: 7, label: 'Luxe', icon: '💎' },
  { id: 8, label: 'Trending', icon: '🔥' },
];

// Mock data for Australian locations
const listings = [
  {
    id: 1,
    title: "Modern Apartment in Fortitude Valley",
    location: "Brisbane, Australia",
    price: "250 AUD/night",
    rating: 4.92,
    guests: 4,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    title: "Beachfront Villa with Pool",
    location: "Gold Coast, Australia",
    price: "450 AUD/night",
    rating: 4.87,
    guests: 6,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    title: "Cozy Cabin in the Mountains",
    location: "Blue Mountains, Australia",
    price: "180 AUD/night",
    rating: 4.75,
    guests: 2,
    image: "https://images.unsplash.com/photo-1602391810010-a4d5b0f4c0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    title: "Downtown Sydney Loft",
    location: "Sydney, Australia",
    price: "320 AUD/night",
    rating: 4.95,
    guests: 3,
    image: "https://images.unsplash.com/photo-1616486899687-ea1c99b1f479?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 5,
    title: "Beach House with Ocean View",
    location: "Perth, Australia",
    price: "380 AUD/night",
    rating: 4.90,
    guests: 5,
    image: "https://images.unsplash.com/photo-1611892450680-a9a11e70c5b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 6,
    title: "Luxury Penthouse with City View",
    location: "Melbourne, Australia",
    price: "420 AUD/night",
    rating: 4.98,
    guests: 4,
    image: "https://images.unsplash.com/photo-1534528741773-6ca0a0c36b4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 7,
    title: "Rustic Farmstay Experience",
    location: "Adelaide, Australia",
    price: "150 AUD/night",
    rating: 4.68,
    guests: 2,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 8,
    title: "Unique Treehouse Retreat",
    location: "Tasmania, Australia",
    price: "190 AUD/night",
    rating: 4.72,
    guests: 2,
    image: "https://images.unsplash.com/photo-1537623130526-7d6c49f7b7e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
];

const inspirationDestinations = [
  { id: 1, name: 'Sydney', description: 'Homes in Sydney' },
  { id: 2, name: 'Melbourne', description: 'Homes in Melbourne' },
  { id: 3, name: 'Brisbane', description: 'Homes in Brisbane' },
  { id: 4, name: 'Gold Coast', description: 'Homes in Gold Coast' },
  { id: 5, name: 'Perth', description: 'Homes in Perth' },
  { id: 6, name: 'Adelaide', description: 'Homes in Adelaide' },
];

export default function AirbnbHome() {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <div className="min-h-screen bg-white text-airbnbDarkText">
      <AirbnbHeader />
      <main className="px-2 sm:px-4 md:px-8 mt-6">
        <AirbnbSearchBar />

        {/* Category strip */}
        <div className="flex space-x-3 overflow-x-auto py-4 mb-8 scrollbar-hide">
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 whitespace-nowrap min-w-max ${
                activeCategory === c.id
                  ? 'bg-airbnbRed text-white'
                  : 'bg-airbnbLightGray text-airbnbDarkText hover:bg-gray-200'
              }`}
            >
              <span>{c.icon}</span> {c.label}
            </button>
          ))}
        </div>

        {/* Main content sections */}

        {/* Available next month in Brisbane section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-airbnbDarkText">Available next month in Brisbane</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {listings.slice(0, 4).map(l => (
              <div key={l.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group">
                <div className="relative">
                  <img src={l.image} alt={l.title} className="w-full aspect-[4/3] object-cover" />
                  <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-150">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-airbnbDarkText" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318 1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 text-airbnbDarkText">{l.title}</h3>
                  <p className="text-sm text-airbnbSecondaryText mb-2">{l.location}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-airbnbDarkText">{l.price}</span>
                    <span className="text-sm text-airbnbSecondaryText">★ {l.rating} ({l.guests} guests)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular homes in Melbourne section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-airbnbDarkText">Popular homes in Melbourne</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {listings.slice(4, 8).map(l => (
              <div key={l.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group">
                <div className="relative">
                  <img src={l.image} alt={l.title} className="w-full aspect-[4/3] object-cover" />
                  <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-150">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-airbnbDarkText" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318 1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 text-airbnbDarkText">{l.title}</h3>
                  <p className="text-sm text-airbnbSecondaryText mb-2">{l.location}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-airbnbDarkText">{l.price}</span>
                    <span className="text-sm text-airbnbSecondaryText">★ {l.rating} ({l.guests} guests)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Guest favourites in Sydney section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-airbnbDarkText">Guest favourites in Sydney</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {listings.slice(8, 12).map(l => (
              <div key={l.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group">
                <div className="relative">
                  <img src={l.image} alt={l.title} className="w-full aspect-[4/3] object-cover" />
                  <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-150">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-airbnbDarkText" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318 1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 text-airbnbDarkText">{l.title}</h3>
                  <p className="text-sm text-airbnbSecondaryText mb-2">{l.location}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-airbnbDarkText">{l.price}</span>
                    <span className="text-sm text-airbnbSecondaryText">★ {l.rating} ({l.guests} guests)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Unique stays near you section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-airbnbDarkText">Unique stays near you</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {listings.slice(0, 4).map(l => (
              <div key={l.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group">
                <div className="relative">
                  <img src={l.image} alt={l.title} className="w-full aspect-[4/3] object-cover" />
                  <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-150">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-airbnbDarkText" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318 1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 text-airbnbDarkText">{l.title}</h3>
                  <p className="text-sm text-airbnbSecondaryText mb-2">{l.location}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-airbnbDarkText">{l.price}</span>
                    <span className="text-sm text-airbnbSecondaryText">★ {l.rating} ({l.guests} guests)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Inspiration section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Inspiration for your next trip</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {inspirationDestinations.map(dest => (
              <div key={dest.id} className="relative rounded-xl overflow-hidden group cursor-pointer">
                {/* Using specific Unsplash image IDs that are more appropriate for houses/apartments/cottages */}
                <img
                  src={`https://images.unsplash.com/photo-1568605117036-5f0b4e2c93d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80`}
                  alt={dest.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-3 left-3 text-white font-semibold">{dest.name}</h3>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-airbnbFooterBg text-sm py-8">
        <div className="max-w-5xl mx-auto px-4 md:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-semibold mb-2">Support</h3>
            <ul className="space-y-1 text-airbnbSecondaryText">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Safety Information</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Hosting</h3>
            <ul className="space-y-1 text-airbnbSecondaryText">
              <li><a href="#" className="hover:underline">Host your home</a></li>
              <li><a href="#" className="hover:underline">Host an experience</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Airbnb</h3>
            <ul className="space-y-1 text-airbnbSecondaryText">
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Legal & Info</h3>
            <ul className="space-y-1 text-airbnbSecondaryText">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <p className="text-center text-airbnbSecondaryText mt-6">© 2026 Airbnb, Inc.</p>
      </footer>
    </div>
  )
}