import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export const TextMarquee = () => {
  return (
    <div className="py-12">
      <Marquee loop={0} autoFill>
        <Image src={`/logo.png`} height={38} width={58} alt="logo" priority />
        <p className="mx-4 text-base md:text-[32px]">ALL PRODUCTS</p>
      </Marquee>
    </div>
  );
};
