import React from 'react'
import { MagnifyingGlass } from 'lucide-react'

export default function SearchBar() {
  return (
    <div className="relative flex justify-center mt-12 px-4">
      <form className="w-full max-w-2xl rounded-full border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-150">
        <div className="flex items-center h-14 rounded-full overflow-hidden">
          {/* Where */}
          <input
            type="text"
            placeholder="Where are you going?"
            className="h-12 flex-1 bg-transparent px-6 py-2 text-sm focus:outline-none"
          />
          <div className="w-px h-full bg-gray-200" />

          {/* When */}
          <input
            type="text"
            placeholder="Add dates"
            className="h-12 flex-1 px-6 py-2 text-sm focus:outline-none"
          />
          <div className="w-px h-full bg-gray-200" />

          {/* Who */}
          <input
            type="text"
            placeholder="Add guests"
            className="h-12 flex-1 px-6 py-2 text-sm focus:outline-none"
          />
        </div>
        <button type="submit" className="absolute right-0 top-0 h-full rounded-full bg-red-600 hover:bg-red-700 transition-colors duration-150">
          <MagnifyingGlass color="#fff" size={20} className="p-2" />
        </button>
      </form>
    </div>
  )
}
