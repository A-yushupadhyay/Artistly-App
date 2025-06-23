import Image from 'next/image'

type Artist = {
  name: string
  category: string
  location: string
  fee: number
  image: string
}

export default function ArtistCard({ name, category, location, fee, image }: Artist) {
  return (
    <div className="border rounded-lg shadow hover:shadow-md transition p-4 bg-white">
      <div className="relative w-full h-40 mb-4 rounded overflow-hidden">
        <Image src={image} alt={name} fill className="object-cover rounded" />
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">{category} | {location}</p>
      <p className="text-sm mt-1 font-medium">₹{fee.toLocaleString()}</p>
      <button className="mt-3 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition text-sm">
        Ask for Quote
      </button>
    </div>
  )
}
