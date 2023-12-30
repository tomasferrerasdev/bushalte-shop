'use client';
import { useUiStore, useUiStoreCart } from '@/store/ui/ui-store';
import Image from 'next/image';
import { IoCartOutline } from 'react-icons/io5';
import { Logo } from '../logo/Logo';

export const TopMenu = () => {
  const openMenu = useUiStore((state) => state.openSideMenu);
  const openCartMenu = useUiStoreCart((state) => state.openCartMenu);
  return (
    <nav className="flex py-4 sm:py-6 justify-between items-center w-full">
      <Logo />

      <div className="flex items-center gap-4">
        <button onClick={openCartMenu}>
          <div className="relative border-gray-400 border-[1px] rounded-full h-10 w-10 flex items-center justify-center">
            <span className="absolute text-xs rounded-full px-1 font-medium -top-[3px] -right-[3px] bg-accent text-black">
              3
            </span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </button>
        <button onClick={openMenu} title="menu">
          <Image
            src={`/images/sticker.webp`}
            width={48}
            height={48}
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
        </button>
      </div>
    </nav>
  );
};
