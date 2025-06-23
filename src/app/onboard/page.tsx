import ArtistForm from '@/components/ArtistForm'

export default function OnboardPage() {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Onboard New Artist</h1>
      <ArtistForm />
    </div>
  )
}
