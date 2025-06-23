'use client';

import React from 'react';

const dummyArtists = [
  {
    id: 1,
    name: 'Ria Sharma',
    category: 'Dancer',
    city: 'Delhi',
    email: 'ria@example.com',
    phone: '9876543210',
    fee: '₹15,000',
  },
  {
    id: 2,
    name: 'Arjun Singh',
    category: 'DJ',
    city: 'Mumbai',
    email: 'arjun@example.com',
    phone: '9876543211',
    fee: '₹25,000',
  },
  {
    id: 3,
    name: 'Meera Kapoor',
    category: 'Anchor',
    city: 'Bangalore',
    email: 'meera@example.com',
    phone: '9876543212',
    fee: '₹18,000',
  },
];

export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">🎧 Artist Submissions Dashboard</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow rounded">
          <thead className="bg-indigo-100">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">City</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Phone</th>
              <th className="px-4 py-2 text-left">Fee</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {dummyArtists.map((artist) => (
              <tr key={artist.id} className="border-t">
                <td className="px-4 py-2">{artist.name}</td>
                <td className="px-4 py-2">{artist.category}</td>
                <td className="px-4 py-2">{artist.city}</td>
                <td className="px-4 py-2">{artist.email}</td>
                <td className="px-4 py-2">{artist.phone}</td>
                <td className="px-4 py-2">{artist.fee}</td>
                <td className="px-4 py-2">
                  <button className="text-sm px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
