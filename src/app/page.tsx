import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServiceHighlight from '@/components/ServiceHighlight';
import HotelGallery from '@/components/HotelGallery';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServiceHighlight />
      
      {/* Hotel Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#26476c] mb-6">
              Our Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our state-of-the-art maritime facilities and infrastructure 
              supporting Indonesia's shipping industry
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ecb143] to-[#df5c35] mx-auto mt-8 rounded-full" />
          </div>
          
          <HotelGallery 
            images={[
              'https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=1200&h=640&fit=crop',
              'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=1200&h=640&fit=crop',
              'https://images.pexels.com/photos/2144326/pexels-photo-2144326.jpeg?auto=compress&cs=tinysrgb&w=1200&h=640&fit=crop',
              'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1200&h=640&fit=crop',
              'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1200&h=640&fit=crop'
            ]}
            className="mb-8"
          />
          
          <div className="text-center">
            <p className="text-gray-600 mb-8">
              Swipe or drag to explore our comprehensive maritime infrastructure
            </p>
            <button className="bg-gradient-to-r from-[#26476c] to-[#ecb143] hover:from-[#ecb143] hover:to-[#26476c] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-xl">
              View All Facilities
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}