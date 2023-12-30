import { inter } from '@/config/fonts';
import { initialData } from '@/seed/seed';

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function Home() {
  return (
    <div className={inter.className}>
      <h1 className="antialiased font-bold text-xl">My cart</h1>
    </div>
  );
}
