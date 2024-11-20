import React from 'react';
import { MapPin, BedDouble, Bath, Square } from 'lucide-react';

export default function Marketplace() {
  const listings = [
    {
      id: 1,
      title: 'Modern Apartment',
      price: '$250,000',
      location: 'Downtown, New York',
      image: '/placeholder.svg?height=200&width=300',
      beds: 2,
      baths: 2,
      area: 1000,
      type: 'Apartment',
      status: 'For Sale',
    },
    {
      id: 2,
      title: 'Suburban House',
      price: '$450,000',
      location: 'Suburbs, Los Angeles',
      image: '/placeholder.svg?height=200&width=300',
      beds: 4,
      baths: 3,
      area: 2500,
      type: 'House',
      status: 'For Sale',
    },
    {
      id: 3,
      title: 'Commercial Space',
      price: '$800,000',
      location: 'Business District, Chicago',
      image: '/placeholder.svg?height=200&width=300',
      beds: null,
      baths: 2,
      area: 5000,
      type: 'Commercial',
      status: 'For Lease',
    },
  ];

  return (
    <div className="bg-white pt-16 py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">Featured Listings</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing) => (
            <div key={listing.id} className="overflow-hidden rounded-lg bg-gray-100 shadow-md">
              <div className="relative">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="h-48 w-full object-cover"
                />
                <div className="absolute left-2 top-2 rounded-full bg-primary px-2 py-1 text-xs font-semibold text-white">
                  {listing.status}
                </div>
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-semibold">{listing.title}</h3>
                <p className="mb-2 flex items-center text-sm text-gray-600">
                  <MapPin className="mr-1 h-4 w-4" />
                  {listing.location}
                </p>
                <p className="mb-4 text-lg font-bold text-primary">{listing.price}</p>
                <div className="mb-4 flex justify-between text-sm text-gray-600">
                  {listing.beds && (
                    <span className="flex items-center">
                      <BedDouble className="mr-1 h-4 w-4" />
                      {listing.beds} Beds
                    </span>
                  )}
                  {listing.baths && (
                    <span className="flex items-center">
                      <Bath className="mr-1 h-4 w-4" />
                      {listing.baths} Baths
                    </span>
                  )}
                  <span className="flex items-center">
                    <Square className="mr-1 h-4 w-4" />
                    {listing.area} sqft
                  </span>
                </div>
                <button className="w-full rounded-md bg-primary px-4 py-2 text-white hover:bg-primary-dark">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="rounded-md bg-primary px-6 py-3 text-white hover:bg-primary-dark">
            View All Listings
          </button>
        </div>
      </div>
    </div>
  );
}
