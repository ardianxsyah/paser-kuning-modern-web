
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CardGrid from '@/components/CardGrid';
import { sejarahData } from '@/data/mockData';

const Sejarah = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <HeroSection
        title="Sejarah Paser"
        subtitle="Perjalanan Peradaban yang Panjang"
        description="Telusuri jejak sejarah Paser dari masa Kerajaan hingga era modern, memahami transformasi budaya dan masyarakat."
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Timeline Sejarah Paser
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dari masa keemasan Kerajaan Paser hingga perkembangan di era modern
            </p>
          </div>

          <CardGrid 
            items={sejarahData} 
            basePath="/sejarah" 
            showDate={true}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sejarah;
