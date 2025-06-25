import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ProductImage {
  id: number;
  src: string;
  alt: string;
}

const productImages: ProductImage[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Black headphones on a vibrant yellow background',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1546435770-a3e426bf4022?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Silver headphones against a pink and orange gradient background',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1618384887924-3609a3fa9b9a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Wireless earbuds in white and black with their charging cases on a light purple surface',
  },
];

const ProductImage: React.FC = () => {
  const [activeImage, setActiveImage] = useState<ProductImage>(productImages[0]);

  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-hidden rounded-lg border">
        <AspectRatio ratio={1 / 1} className="bg-card">
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            className="h-full w-full object-cover transition-opacity duration-300"
          />
        </AspectRatio>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {productImages.map((image) => (
          <button
            key={image.id}
            onClick={() => setActiveImage(image)}
            className={cn(
              'overflow-hidden rounded-md border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
              activeImage.id === image.id
                ? 'border-primary'
                : 'border-transparent hover:border-muted-foreground/50'
            )}
          >
            <AspectRatio ratio={1 / 1} className="bg-card">
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
              />
            </AspectRatio>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
