'use client';
import { inter } from '@/config/fonts';
import { useUiStore } from '@/store/ui/ui-store';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export const UserMenu = () => {
  const isSideMenuOpen = useUiStore((state) => state.isSideMenuOpen);
  const closeMenu = useUiStore((state) => state.closeSideMenu);

  return (
    <div className={`${inter.className}`}>
      {isSideMenuOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"
          onClick={closeMenu}
        />
      )}

      <nav
        className={clsx(
          'absolute flex right-7 top-24 z-20 h-fit w-fit flex-col border p-6 duration-300 bg-black border-neutral-700 text-white rounded-md gap-5',
          { hidden: !isSideMenuOpen }
        )}
      >
        <Link href="/" className="w-full text-white flex items-center gap-3">
          <Image
            src={`/images/sticker.webp`}
            width={48}
            height={48}
            alt="avatar"
            className="w-8 h-8 rounded-full"
          />
          <p className="text-base">Tomas Ferreras</p>
        </Link>
        <span className="w-full p-[.5px] bg-neutral-700" />
        <Link href="/" className="text-base">
          My orders
        </Link>
        <Link href="/" className="text-base">
          Profile settings
        </Link>
        <Link href="/" className="text-base">
          Log Out
        </Link>
      </nav>
    </div>
  );
};
