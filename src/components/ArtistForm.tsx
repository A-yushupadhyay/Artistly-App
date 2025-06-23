'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useState } from 'react'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  bio: z.string().min(10, 'Bio is too short'),
  categories: z.array(z.string()).min(1, 'Select at least one category'),
  languages: z.array(z.string()).min(1, 'Select at least one language'),
  location: z.string().min(2, 'Location required'),
  feeRange: z.string().min(1, 'Select a fee range'),
  image: z.any().optional(),
})

type FormData = z.infer<typeof schema>

export default function ArtistForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (data: FormData) => {
    console.log('Artist Form Data:', data)
    setSubmitted(true)
  }

  // Track checkbox arrays
  const watchCategories = watch('categories', [])
  const watchLanguages = watch('languages', [])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded-lg shadow">
      <div>
        <label className="block font-medium">Name</label>
        <input {...register('name')} className="input" />
        <p className="text-red-500 text-sm">{errors.name?.message}</p>
      </div>

      <div>
        <label className="block font-medium">Bio</label>
        <textarea {...register('bio')} rows={3} className="input" />
        <p className="text-red-500 text-sm">{errors.bio?.message}</p>
      </div>

      <div>
        <label className="block font-medium">Categories</label>
        <div className="flex flex-wrap gap-4 mt-2">
          {['Singer', 'Dancer', 'DJ', 'Anchor'].map((cat) => (
            <label key={cat} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                value={cat}
                checked={watchCategories.includes(cat)}
                onChange={(e) => {
                  const checked = e.target.checked
                  setValue(
                    'categories',
                    checked
                      ? [...watchCategories, cat]
                      : watchCategories.filter((c) => c !== cat)
                  )
                }}
              />
              {cat}
            </label>
          ))}
        </div>
        <p className="text-red-500 text-sm">{errors.categories?.message}</p>
      </div>

      <div>
        <label className="block font-medium">Languages Spoken</label>
        <div className="flex flex-wrap gap-4 mt-2">
          {['Hindi', 'English', 'Punjabi', 'Marathi'].map((lang) => (
            <label key={lang} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                value={lang}
                checked={watchLanguages.includes(lang)}
                onChange={(e) => {
                  const checked = e.target.checked
                  setValue(
                    'languages',
                    checked
                      ? [...watchLanguages, lang]
                      : watchLanguages.filter((l) => l !== lang)
                  )
                }}
              />
              {lang}
            </label>
          ))}
        </div>
        <p className="text-red-500 text-sm">{errors.languages?.message}</p>
      </div>

      <div>
        <label className="block font-medium">Fee Range</label>
        <select {...register('feeRange')} className="input">
          <option value="">Select</option>
          <option value="₹5000–₹10000">₹5000–₹10000</option>
          <option value="₹10000–₹20000">₹10000–₹20000</option>
          <option value="₹20000+">₹20000+</option>
        </select>
        <p className="text-red-500 text-sm">{errors.feeRange?.message}</p>
      </div>

      <div>
        <label className="block font-medium">Profile Image (Optional)</label>
        <input type="file" {...register('image')} className="input" />
      </div>

      <div>
        <label className="block font-medium">Location</label>
        <input {...register('location')} className="input" />
        <p className="text-red-500 text-sm">{errors.location?.message}</p>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
      >
        Submit Artist
      </button>

      {submitted && <p className="text-green-600 text-center mt-4">✅ Form submitted successfully!</p>}
    </form>
  )
}
