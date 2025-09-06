import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SubsidiaryCardProps {
  name: string;
  description: string;
  logo: string;
  website?: string;
  delay?: string;
}

const SubsidiaryCard = ({ name, description, logo, website, delay = '0s' }: SubsidiaryCardProps) => {
  return (
    <div 
      className="corporate-card p-4 sm:p-6 md:p-8 hover-rainbow animate-fade-up"
      style={{ animationDelay: delay }}
    >
      <div className="flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-4 md:mb-6">
          <img 
            src={logo} 
            alt={`${name} logo`} 
            className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain"
          />
        </div>

        {/* Content */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4 px-2">{name}</h3>
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-4 md:mb-6 px-2">
          {description}
        </p>

        {/* Actions */}
        <div className="flex flex-col gap-3 w-full max-w-sm">
          <Button 
            variant="default" 
            className="w-full hover-glow text-sm md:text-base"
            onClick={() => website && window.open(website, '_blank')}
          >
            Visit Website
            <ExternalLink className="ml-2 h-3 w-3 md:h-4 md:w-4" />
          </Button>
          <Button 
            variant="outline" 
            className="w-full hover-lift text-sm md:text-base"
          >
            Learn More
            <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubsidiaryCard;