import React from 'react'
import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'

const categories = [
  { id: 1, label: 'Beachfront', icon: '🏖️' },
  { id: 2, label: 'Cabins', icon: '🛏️' },
  { id: 3, label: 'Tiny homes', icon: '🏠' },
  { id: 4, label: 'Amazing views', icon: '🌄' },
  { id: 5, label: 'Design', icon: '🎨' },
]

const listings = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: `Listing ${i + 1}`,
  location: 'Sydney, Australia',
  price: `${100 + i * 20} AUD/night`,
  rating: (3.5 + (i % 4) * 0.2).toFixed(1),
  guests: 4,
  image: `https://source.unsplash.com/random/400x300?${['beach','city','mountain','cabin'][i % 4]}`,
}))

export default function AirbnbHome() {
  return (
    <div className="min-h-screen bg-white text-[#222]">
      <Header />
      <main className="px-4 md:px-8 mt-6">
        <SearchBar />
        {/* Category strip */}
        <div className="flex space-x-4 overflow-x-auto py-4 mb-8">
          {categories.map(c => (
            <button key={c.id} className="px-3 py-1 rounded-full bg-[#F2F3F5] text-sm font-medium flex items-center gap-1">
              <span>{c.icon}</span> {c.label}
            </button>
          ))}
        </div>
        {/* Listings grid */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Popular homes in Sydney</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {listings.map(l => (
              <div key={l.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                <img src={l.image} alt={l.title} className="w-full aspect-[4/3] object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{l.title}</h3>
                  <p className="text-sm text-[#717171] mb-2">{l.location}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{l.price}</span>
                    <span className="text-sm text-[#717171]">★ {l.rating} ({l.guests} guests)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-[#F9FAFB] text-sm py-8">
        <div className="max-w-5xl mx-auto px-4 md:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-semibold mb-2">Support</h3>
            <ul className="space-y-1 text-[#717171]">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Safety Information</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Hosting</h3>
            <ul className="space-y-1 text-[#717171]">
              <li><a href="#" className="hover:underline">Host your home</a></li>
              <li><a href="#" className="hover:underline">Host an experience</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Airbnb</h3>
            <ul className="space-y-1 text-[#717171]">
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Legal & Info</h3>
            <ul className="space-y-1 text-[#717171]">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <p className="text-center text-[#717171] mt-6">© 2026 Airbnb, Inc.</p>
      </footer>
    </div>
  )
}
