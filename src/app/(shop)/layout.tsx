import { TopMenu } from '@/components';

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-black min-h-screen text-[#EFEFEF]">
      <TopMenu />
      {children}
    </main>
  );
}
