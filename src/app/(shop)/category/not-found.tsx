import Image from 'next/image';
import Link from 'next/link';

export default function Err() {
  return (
    <div className="w-full h-[calc(100vh-200px)] flex justify-center items-center flex-col">
      <Image src={`/logo.png`} height={228} width={346} alt="logo" priority />

      <h1 className="mb-16">404 NOT FOUND :(</h1>
      <Link href="/" className="underline underline-offset-4">
        back home
      </Link>
    </div>
  );
}
