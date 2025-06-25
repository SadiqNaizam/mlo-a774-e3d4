import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import BreadcrumbNav from '../components/ProductDetail/BreadcrumbNav';
import ProductImage from '../components/ProductDetail/ProductImage';
import ProductHeader from '../components/ProductDetail/ProductHeader';

/**
 * IndexPage serves as the main entry point for the product detail view.
 * It follows the ProductPageLayout template by composing the BreadcrumbNav,
 * ProductImage, and ProductHeader components within a responsive grid layout.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb section */}
        <div className="mb-6 md:mb-8">
          <BreadcrumbNav />
        </div>

        {/* Main product grid section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Product Image Gallery - takes 3/5 width on large screens */}
          <div className="lg:col-span-3">
            <ProductImage />
          </div>

          {/* Product Details & Actions - takes 2/5 width on large screens */}
          <div className="lg:col-span-2">
            <ProductHeader />
          </div>
        </div>
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
