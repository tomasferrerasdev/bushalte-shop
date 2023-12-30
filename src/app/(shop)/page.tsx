import { FeaturedProductGrid } from '@/components/products/featured-product-grid/FeaturedProductGrid';
import { initialData } from '@/seed/seed';

const products = initialData.products;

export default function Home() {
  return (
    <>
      <FeaturedProductGrid products={products} />
    </>
  );
}
