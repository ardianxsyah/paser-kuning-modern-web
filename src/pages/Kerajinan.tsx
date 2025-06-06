
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CardGrid from '@/components/CardGrid';
import { kerajinanData } from '@/data/mockData';

const Kerajinan = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <HeroSection
        title="Kerajinan Paser"
        subtitle="Karya Seni Warisan Leluhur"
        description="Temukan keindahan kerajinan tradisional Paser yang dibuat dengan tangan terampil dan penuh makna filosofis."
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Koleksi Kerajinan Tradisional
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Karya seni yang menggabungkan keindahan, fungsi, dan nilai budaya yang tinggi
            </p>
          </div>

          <CardGrid 
            items={kerajinanData} 
            basePath="/kerajinan" 
            showCategory={true}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kerajinan;
