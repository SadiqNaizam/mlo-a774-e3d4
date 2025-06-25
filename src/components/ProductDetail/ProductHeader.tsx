import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const ProductHeader: React.FC = () => {
  const rating = 4.5;
  const reviewCount = 132;

  return (
    <div className="flex flex-col space-y-4">
      <div>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
          AuraSound X1 Wireless
        </h1>
        <p className="text-lg text-muted-foreground mt-1">Over-Ear Noise Cancelling Headphones</p>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className={cn(
                'h-5 w-5',
                rating > i ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
              )}
            />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">({reviewCount} reviews)</span>
        <Badge variant="outline" className="border-green-500 text-green-600">In Stock</Badge>
      </div>
      
      <Separator />

      <div>
        <span className="text-3xl font-bold text-foreground">$249.99</span>
        <span className="ml-2 text-lg text-muted-foreground line-through">$299.99</span>
      </div>

      <p className="text-base text-muted-foreground pb-2">
        Experience immersive audio with the AuraSound X1. Featuring industry-leading noise cancellation, 
        crystal-clear call quality, and up to 30 hours of battery life. Perfect for music lovers and professionals alike.
      </p>
      
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
        <Button size="lg" className="w-full sm:w-1/2">
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </Button>
        <Button size="lg" variant="outline" className="w-full sm:w-1/2">
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default ProductHeader;