import { TopMenu } from '@/components';
import { CartMenu } from '@/components/ui/cart-menu/CartMenu';
import { UserMenu } from '@/components/ui/user-menu/UserMenu';

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-black min-h-screen text-[#EFEFEF] px-4 sm:px-6">
      <div className="max-w-[1920px] mx-auto">
        <TopMenu />
        <UserMenu />
        <CartMenu />
        {children}
      </div>
    </main>
  );
}
