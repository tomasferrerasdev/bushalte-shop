'use client';
import { inter } from '@/config/fonts';
import { useUiStore } from '@/store/ui/ui-store';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { IoCloseOutline } from 'react-icons/io5';

export const Sidebar = () => {
  const isSideMenuOpen = useUiStore((state) => state.isSideMenuOpen);
  const closeMenu = useUiStore((state) => state.closeSideMenu);

  return (
    <div className={`${inter.className}`}>
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
      )}

      <nav
        className={clsx(
          'fixed bottom-0 right-0 top-0 z-20 flex h-full w-full flex-col border-l pt-10 p-6 duration-300 bg-black border-neutral-700  text-white md:w-[390px] translate-x-0',
          { 'translate-x-full': !isSideMenuOpen }
        )}
      >
        <div className="flex items-center justify-end mb-5">
          <button
            className="relative flex h-11 w-11 items-center justify-center pr-1 md:pr-3 transition-all ease-in-out hover:scale-110"
            onClick={closeMenu}
          >
            <IoCloseOutline className="h-7 w-7" />
          </button>
        </div>
        <Link
          href="/"
          className="w-full rounded-full p-3 border border-neutral-800 bg-transparent text-white flex items-center gap-3"
        >
          <Image
            src={`/images/sticker.webp`}
            width={48}
            height={48}
            alt="avatar"
            className="w-8 h-8 rounded-full"
          />
          <p className="text-base">Tomas Ferreras</p>
        </Link>
        <div className="pl-4 pt-4 flex flex-col gap-4">
          <Link href="/" className="text-base">
            Products
          </Link>
          <Link href="/" className="text-base">
            Orders
          </Link>
          <Link href="/" className="text-base">
            Users
          </Link>
          <Link href="/" className="text-base">
            LogIn
          </Link>
          <Link href="/" className="text-base">
            LogOut
          </Link>
        </div>
      </nav>
    </div>
  );
};
