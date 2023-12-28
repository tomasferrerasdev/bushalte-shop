import { FeaturedProductGrid } from '@/components/products/featured-product-grid/FeaturedProductGrid';
import { ProductGrid } from '@/components/products/product-grid/ProductGrid';
import { TextMarquee } from '@/components/ui/text-marquee/TextMarquee';
import { initialData } from '@/seed/seed';

const products = initialData.products;

export default function Home() {
  return (
    <>
      <FeaturedProductGrid products={products} />
      <TextMarquee />
      <ProductGrid products={products} />
    </>
  );
}
