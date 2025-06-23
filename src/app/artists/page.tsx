'use client'

import { useState, useEffect } from 'react'
import ArtistCard from '@/components/ArtistCard'
import FilterBlock from '@/components/FilterBlock'
import artistData from '@/data/artists.json'

export default function ArtistListPage() {
  const [category, setCategory] = useState('')
  const [location, setLocation] = useState('')
  const [filteredArtists, setFilteredArtists] = useState(artistData)

  useEffect(() => {
    let filtered = artistData

    if (category) {
      filtered = filtered.filter((artist) => artist.category === category)
    }

    if (location) {
      filtered = filtered.filter((artist) => artist.location === location)
    }

    setFilteredArtists(filtered)
  }, [category, location])

  return (
    <div className="py-6">
      <h1 className="text-2xl font-semibold mb-4">Explore Artists</h1>
      <FilterBlock
        category={category}
        setCategory={setCategory}
        location={location}
        setLocation={setLocation}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredArtists.map((artist) => (
          <ArtistCard key={artist.name} {...artist} />
        ))}
      </div>
    </div>
  )
}
