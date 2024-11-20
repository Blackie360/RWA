import React from 'react';
import { Star, MessageCircle } from 'lucide-react';

export default function AgentsListing() {
  const agents = [
    {
      id: 1,
      name: 'John Doe',
      specialization: 'Residential',
      image: '/placeholder.svg?height=100&width=100',
      rating: 4.8,
      reviews: 120,
      properties: 45,
    },
    {
      id: 2,
      name: 'Jane Smith',
      specialization: 'Commercial',
      image: '/placeholder.svg?height=100&width=100',
      rating: 4.9,
      reviews: 98,
      properties: 32,
    },
    {
      id: 3,
      name: 'Mike Johnson',
      specialization: 'Luxury',
      image: '/placeholder.svg?height=100&width=100',
      rating: 4.7,
      reviews: 85,
      properties: 28,
    },
  ];

  return (
    <div className="bg-white py-12 pt-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Top Agents</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <div key={agent.id} className="rounded-lg bg-gray-100 p-6 shadow-md">
              <img
                src={agent.image}
                alt={agent.name}
                className="mx-auto mb-4 rounded-full h-24 w-24"
              />
              <h3 className="mb-2 text-center text-xl font-semibold">{agent.name}</h3>
              <p className="text-center text-gray-600">{agent.specialization} Specialist</p>
              <div className="mt-4 flex items-center justify-center">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="ml-1 font-semibold">{agent.rating}</span>
                <span className="ml-2 text-sm text-gray-600">({agent.reviews} reviews)</span>
              </div>
              <p className="mt-2 text-center text-sm text-gray-600">{agent.properties} properties sold</p>
              <button className="mt-4 flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-white hover:bg-primary-dark">
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact Agent
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
