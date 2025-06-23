import Image from 'next/image'
import Link from 'next/link'

type Props = {
  title: string
  img: string
  href: string
}

export default function CategoryCard({ title, img, href }: Props) {
  return (
    <Link
      href={href}
      className="block border rounded-lg overflow-hidden shadow hover:shadow-md transition transform hover:-translate-y-1"
    >
      <div className="w-full h-48 relative">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4 text-center bg-white">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
    </Link>
  )
}
