
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description?: string;
  backgroundImage?: string;
  showCTA?: boolean;
}

const HeroSection = ({ 
  title, 
  subtitle, 
  description, 
  backgroundImage = "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2834&q=80",
  showCTA = false 
}: HeroSectionProps) => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-primary font-semibold">
            {subtitle}
          </p>
          {description && (
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
          {showCTA && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-white">
                <Link to="/budaya">Jelajahi Budaya</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
                <Link to="/sejarah">Pelajari Sejarah</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
