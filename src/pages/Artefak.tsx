
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CardGrid from '@/components/CardGrid';
import { artefakData } from '@/data/mockData';

const Artefak = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <HeroSection
        title="Artefak Paser"
        subtitle="Peninggalan Bersejarah yang Berharga"
        description="Koleksi artefak bersejarah yang menjadi saksi bisu perjalanan peradaban dan budaya Paser."
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Koleksi Artefak Bersejarah
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Benda-benda pusaka yang memiliki nilai sejarah dan spiritual tinggi
            </p>
          </div>

          <CardGrid 
            items={artefakData} 
            basePath="/artefak" 
            showCategory={true}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Artefak;
