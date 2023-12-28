import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({ subsets: ['latin'] });
export const cascadia = localFont({
  src: [
    {
      path: '../../public/fonts/cascadia/CascadiaMono-SemiLight.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/cascadia/CascadiaMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/cascadia/CascadiaMono-SemiBold.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  display: 'swap',
});
