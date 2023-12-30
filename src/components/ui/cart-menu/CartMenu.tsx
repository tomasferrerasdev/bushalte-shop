'use client';
import { QuantitySelector } from '@/components/products/quantity-selector/QuantitySelector';
import { inter } from '@/config/fonts';
import { initialData } from '@/seed/seed';
import { useUiStoreCart } from '@/store/ui/ui-store';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { IoCloseOutline } from 'react-icons/io5';

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export const CartMenu = () => {
  const isCartMenuOpen = useUiStoreCart((state) => state.isCartMenuOpen);
  const closeCartMenu = useUiStoreCart((state) => state.closeCartMenu);

  return (
    <div className={`${inter.className}`}>
      {isCartMenuOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"
          onClick={closeCartMenu}
        />
      )}

      <nav
        className={clsx(
          'fixed z-20 bottom-0 right-0 top-0 p-6 md:pt-12 flex h-full w-full flex-col justify-between border-l backdrop-blur-xl border-neutral-700 bg-black/80 text-white md:w-[450px] translate-x-0 transition-all duration-200',
          { 'translate-x-full': !isCartMenuOpen }
        )}
      >
        <div>
          <div className="w-full flex items-center justify-between  mb-5">
            <h1 className="text-xl">Cart</h1>
            <button title="close menu" onClick={closeCartMenu}>
              <IoCloseOutline size={35} />
            </button>
          </div>

          <ul>
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
        </div>
        <div
          className={`${inter.className} w-full border-dashed border-[1px] rounded-md border-neutral-800 h-fit p-6`}
        >
          <h2 className="text-2xl mb-2">Order summary</h2>
          <div className="grid grid-cols-2">
            <span>Products</span>
            <span className="text-right">3 articles</span>
            <span>Subtotal</span>
            <span className="text-right">$ 100</span>
            <span>Taxes (15%)</span>
            <span className="text-right">$ 100</span>
            <span className="mt-5 text-2xl">Total:</span>
            <span className="mt-5 text-2xl text-right">$ 100</span>
          </div>
          <div className="mt-5 mb-2 w-full">
            <Link
              className="flex btn-primary justify-center bg-accent text-black py-2 rounded-md"
              href="/checkout/address"
            >
              Checkout
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
