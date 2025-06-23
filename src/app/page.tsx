import CategoryCard from '@/components/CategoryCard'

const categories = [
  {
    title: 'Singers',
    img: '/images/singer.jpg',
    href: '/artists?category=singer',
  },
  {
    title: 'Dancers',
    img: '/images/dancer.jpg',
    href: '/artists?category=dancer',
  },
  {
    title: 'DJs',
    img: '/images/dj.jpg',
    href: '/artists?category=dj',
  },
]

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center mt-10 space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
          Discover & Book Top Artists for Your Next Event
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Artistly helps you find the best performers for weddings, parties, and corporate events.
        </p>
        <a
          href="/artists"
          className="inline-block mt-4 bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Explore Artists
        </a>
      </section>

      {/* Category Section */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Browse by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.title} {...cat} />
          ))}
        </div>
      </section>
    </div>
  )
}
