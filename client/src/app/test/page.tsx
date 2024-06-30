'use client'
import Filter from '@/components/Filter'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PropertyCard from '@/components/PropertyCard'
import dynamic from 'next/dynamic'
import { useEffect, useMemo, useState } from 'react'

type Property = {
  id: number;
  title: string;
  amount: string;
  beds: string;
  bath: string;
  loc: string;
}

const Test: React.FC = () => {

  const Map = useMemo(() => dynamic(
    () => import('@/components/Map'),
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])

  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const limit = 5;

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch(`/api/properties?page=${currentPage}&limit=${limit}`);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        console.log("Fetched properties:", data); // Log fetched data
        
        if (Array.isArray(data.properties) && data.properties.length === 0) {
          setError("No properties found");
        } else {
          setProperties(data.properties);
          setTotalPages(data.totalPages);
        }
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch properties:", error);
        setError("Failed to fetch properties");
        setLoading(false);
      }
    };

    fetchProperties();
  }, [currentPage]);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Navbar />
      <div>&nbsp;</div>
      <div className='listPage grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='listContainer'>
          <Filter/>
          <ul>
            {properties.map(property => (
              <li key={property.id} className='p-8 max-w-[900px] mx-auto'>
                <PropertyCard 
                  title={property.title} 
                  beds={property.beds}
                  bath={property.bath}
                  amount={property.amount}
                  loc={property.loc}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className='mapContainer rounded-lg mb-7 sm:h-60 md:h-full pb-[30px]'>
            <Map properties={properties} position={[21.0499827, 79.0385908]} zoom={10} className="w-full h-full"/>
        </div>
      </div>
      
      <div className="pagination w-fit mx-auto flex gap-4 mb-4">
        <button onClick={handlePreviousPage} disabled={currentPage === 1} className={` px-4 py-2 text-white rounded-lg ${currentPage === 1 ? 'bg-slate-500' : 'bg-orange-400'}`}>Previous</button>
        <span className='py-2 px-4'>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages} className={` px-4 py-2 text-white rounded-lg ${currentPage === totalPages ? 'bg-slate-500' : 'bg-orange-400'}`}>Next</button>
      </div>
      <Footer />
    </>
  );
}

export default Test;
