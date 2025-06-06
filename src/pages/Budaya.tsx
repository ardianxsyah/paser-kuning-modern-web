
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CardGrid from '@/components/CardGrid';
import { budayaData } from '@/data/mockData';

const Budaya = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <HeroSection
        title="Budaya Paser"
        subtitle="Warisan Tradisi yang Tak Ternilai"
        description="Jelajahi kekayaan budaya Paser yang telah diwariskan turun-temurun, dari tarian tradisional hingga ritual adat yang sarat makna."
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Koleksi Budaya Tradisional
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Temukan berbagai aspek budaya Paser yang masih dilestarikan hingga kini
            </p>
          </div>

          <CardGrid 
            items={budayaData} 
            basePath="/budaya" 
            showCategory={true}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Budaya;
