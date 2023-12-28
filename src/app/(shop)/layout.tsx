import { TopMenu } from '@/components';
import { Sidebar } from '@/components/ui/sidebar/Sidebar';

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-black min-h-screen text-[#EFEFEF] px-4 sm:px-6">
      <TopMenu />
      <Sidebar />
      {children}
    </main>
  );
}
