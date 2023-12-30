import { QuantitySelector } from '@/components/products/quantity-selector/QuantitySelector';
import { SizeSelector } from '@/components/products/size-selector/SizeSelector';
import { inter } from '@/config/fonts';
import { initialData } from '@/seed/seed';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}
export default function Home({ params }: Props) {
  const { slug } = params;
  const product = initialData.products.find((product) => product.slug === slug);
  if (!product) notFound();
  return (
    <div
      className={`${inter.className} h-full md:h-[calc(100vh-126px)] grid gap-6 md:grid-cols-6 pb-8`}
    >
      <div className="group min-h-[30vh] flex h-full w-full items-center justify-center overflow-hidden rounded-lg border hover:border-accent bg-black relative border-neutral-800 md:col-span-4 md:row-span-1">
        <Image
          src={product.images[0]}
          className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
          alt={product.title}
          priority
          fill
        />
      </div>

      <div className="md:col-span-2 md:row-span-1">
        <h1 className="antialiased font-bold text-xl">{product.title}</h1>
        <h2 className="text-lg mb-5">${product.price}</h2>
        <h3 className="font-bold text-sm">Description</h3>
        <p className="font-light">{product.description}</p>
        <SizeSelector
          selectedSize={product.sizes[2]}
          availableSizes={product.sizes}
        />
        <QuantitySelector quantity={1} />
        <button className="bg-accent text-black my-5 w-full py-2 rounded-md font-bold">
          Add to cart
        </button>
      </div>
    </div>
  );
}
