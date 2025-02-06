import { Search } from 'lucide-react';
import { useState } from 'react';

// Sample data - In a real app, this would come from an API
const locations = [
  { pincode: '638051', location: 'Chennimalai', type: 'both' },
  { pincode: '638052', location: 'Erode', type: 'both' },
  { pincode: '638053', location: 'Perundurai', type: 'farmers' },
  { pincode: '638054', location: 'Bhavani', type: 'business' },
  { pincode: '638055', location: 'Gobichettipalayam', type: 'both' },
  { pincode: '638056', location: 'Sathyamangalam', type: 'farmers' },
  { pincode: '638057', location: 'Anthiyur', type: 'business' },
  { pincode: '638058', location: 'Kavundapadi', type: 'both' },
];

type LocationType = 'all' | 'farmers' | 'business';

export default function ServiceableLocations() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<LocationType>('all');

  const filteredLocations = locations.filter(location => {
    const matchesSearch = 
      location.pincode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = 
      filterType === 'all' || 
      location.type === filterType || 
      location.type === 'both';

    return matchesSearch && matchesType;
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Serviceable Locations</h1>
          <p className="text-xl">Find CropZap services available in your area</p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search by pincode or location name..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <button
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    filterType === 'all'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setFilterType('all')}
                >
                  All
                </button>
                <button
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    filterType === 'farmers'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setFilterType('farmers')}
                >
                  Farmers
                </button>
                <button
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    filterType === 'business'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setFilterType('business')}
                >
                  Business
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLocations.map((location) => (
              <div
                key={location.pincode}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{location.location}</h3>
                    <p className="text-gray-600">Pincode: {location.pincode}</p>
                  </div>
                  <div className="flex gap-2">
                    {(location.type === 'farmers' || location.type === 'both') && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded">
                        Farmers
                      </span>
                    )}
                    {(location.type === 'business' || location.type === 'both') && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded">
                        Business
                      </span>
                    )}
                  </div>
                </div>
                <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-300">
                  View Details
                </button>
              </div>
            ))}
          </div>

          {filteredLocations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No locations found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}