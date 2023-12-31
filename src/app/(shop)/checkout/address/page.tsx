import { Title } from '@/components';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col sm:justify-center sm:items-center mb-72">
      <div className="w-full  xl:w-[1000px] flex flex-col justify-center text-left">
        <Title title="Shipping address" />

        <div className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2">
          <div className="flex flex-col mb-2">
            <span className="mb-1">First name</span>
            <input
              type="text"
              className="p-2 border-dashed border-[1px] rounded-md border-neutral-800 bg-neutral-950"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span className="mb-1">Last name</span>
            <input
              type="text"
              className="p-2 border-dashed border-[1px] rounded-md border-neutral-800 bg-neutral-950"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span className="mb-1">Address</span>
            <input
              type="text"
              className="p-2 border-dashed border-[1px] rounded-md border-neutral-800 bg-neutral-950"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span className="mb-1">Zip code</span>
            <input
              type="text"
              className="p-2 border-dashed border-[1px] rounded-md border-neutral-800 bg-neutral-950"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span className="mb-1">City</span>
            <input
              type="text"
              className="p-2 border-dashed border-[1px] rounded-md border-neutral-800 bg-neutral-950"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span className="mb-1">Phone number</span>
            <input
              type="text"
              className="p-2 border-dashed border-[1px] rounded-md border-neutral-800 bg-neutral-950"
            />
          </div>

          <div className="flex flex-col mb-2 sm:mt-10">
            <Link
              href="/checkout"
              className="flex btn-primary justify-center bg-accent text-black py-2 rounded-md"
            >
              next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
