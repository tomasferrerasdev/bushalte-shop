import { Title } from '@/components';
import { QuantitySelector } from '@/components/products/quantity-selector/QuantitySelector';
import { inter } from '@/config/fonts';
import { initialData } from '@/seed/seed';
import Image from 'next/image';
import Link from 'next/link';
import { IoCloseOutline } from 'react-icons/io5';

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function Home() {
  return (
    <div className="flex flex-col sm:justify-center sm:items-center mb-72">
      <div className="w-full  xl:w-[1000px] flex flex-col justify-center text-left">
        <Title title="Checkout" />
        <div className="grid grid-cols-12 gap-4">
          <ul className="col-span-6">
            {productsInCart.map((product) => (
              <li
                className="relative flex w-full flex-row justify-between px-1 py-4 border-b-[.5px] border-neutral-800"
                key={product.slug}
              >
                <div className="flex gap-5">
                  <Link href="/" className="z-30 flex flex-row space-x-4">
                    <div className="relative h-16 w-16 cursor-pointer rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                      <IoCloseOutline className="absolute -top-2 -right-2 bg-neutral-600 rounded-full w-4 h-4 p-[1px] text-black" />
                      <Image src={product.images[0]} alt={product.title} fill />
                    </div>
                  </Link>
                  <div>
                    <p className="leading-tight font-medium">{product.title}</p>
                    <p className="text-sm text-neutral-400">XS</p>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-center">
                  <p className="flex justify-end space-y-2 text-right text-sm">
                    ${product.price} ARS
                  </p>
                  <QuantitySelector quantity={1} />
                </div>
              </li>
            ))}
          </ul>

          <div
            className={`${inter.className} w-full border-dashed border-[1px] rounded-md border-neutral-800 h-full p-6 col-span-6 flex flex-col justify-between`}
          >
            <div>
              <h2 className="text-2xl mb-2">Shipping adddress</h2>
              <div className="flex flex-col font-light">
                <span>Tomas Ferreras</span>
                <span>Marzocca 638 dpto.4</span>
                <span>7000</span>
                <span>Tandil, provinica de Buenos Aires</span>
                <span>+53 9 249 4248403</span>
              </div>
              <div className="h-[.5px] bg-neutral-800 my-6"></div>
              <h2 className="text-2xl mb-2">Order summary</h2>
              <div className="grid grid-cols-2 font-light">
                <span>Products</span>
                <span className="text-right">3 articles</span>
                <span>Subtotal</span>
                <span className="text-right">$ 100</span>
                <span>Shipping</span>
                <span className="text-right">free</span>
                <span className="mt-5 text-2xl">Total:</span>
                <span className="mt-5 text-2xl text-right">$ 100</span>
              </div>
            </div>
            <div className="mt-5 mb-2 w-full">
              <p className="mb-5">
                {/* Disclaimer */}
                <span className="text-xs leading-tight">
                  By clicking &quot;Place order&quot;, you agree our{' '}
                  <a href="#" className="underline">
                    terms & conditions
                  </a>{' '}
                  and{' '}
                  <a href="#" className="underline">
                    privacy policies
                  </a>
                </span>
              </p>
              <Link
                className="flex btn-primary justify-center bg-accent text-black py-2 rounded-md"
                href="/checkout/address"
              >
                Place order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
