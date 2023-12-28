'use client';
import { useUiStore } from '@/store/ui/ui-store';
import Link from 'next/link';
import { IoCartOutline, IoMenuOutline, IoSearchOutline } from 'react-icons/io5';
import { Logo } from '../logo/Logo';

export const TopMenu = () => {
  const openMenu = useUiStore((state) => state.openSideMenu);
  return (
    <nav className="flex py-4 sm:py-6 justify-between items-center w-full">
      <Logo />

      <div className="flex items-center">
        <Link href="/search" className="px-4">
          <IoSearchOutline className="w-5 h-5" />
        </Link>
        <Link href="/cart" className="px-4">
          <div className="relative">
            <span className="absolute text-xs rounded-full px-1 font-medium -top-2 -right-2 bg-teal-600">
              3
            </span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>
        <button className="px-4 rounded-sm transition-all" onClick={openMenu}>
          <IoMenuOutline className="w-7 h-7" />
        </button>
      </div>
    </nav>
  );
};
