import { Product } from '@/interfaces/product.interface';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  products: Product[];
}

export const ProductGrid = ({ products }: Props) => {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-12 md:grid-rows-2 pb-6">
        {products.map((product) => (
          <div className="md:col-span-3 md:row-span-2" key={product.slug}>
            <Link
              href={`/product/${product.slug}`}
              className="relative block aspect-square h-full w-full"
            >
              <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-accent dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                <Image
                  className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                  fill
                  sizes={'(min-width: 768px) 66vw, 100vw'}
                  src={product.images[0]}
                  alt={product.slug}
                />
                <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                  <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                    <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                      {product.title}
                    </h3>
                    <p className="flex-none rounded-full bg-white p-2 text-black">
                      ${product.price}
                      <span className="ml-1 hidden @[275px]/label:inline">
                        USD
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
