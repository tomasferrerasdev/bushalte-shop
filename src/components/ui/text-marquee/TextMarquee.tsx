import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export const TextMarquee = () => {
  return (
    <div className="py-12 relative">
      <div className="absolute w-5 h-[38px] left-0 top-0 bottom-0 my-auto z-10 bg-gradient-to-r from-black to-[rgba(0,0,0,0)]" />
      <Marquee loop={0} autoFill>
        <Image src={`/logo.png`} height={38} width={58} alt="logo" priority />
        <p className="mx-4 text-base md:text-[32px]">ALL PRODUCTS</p>
      </Marquee>
      <div className="absolute w-5 h-[38px] right-0 top-0 bottom-0 my-auto z-10 bg-gradient-to-l from-black to-[rgba(0,0,0,0)]" />
    </div>
  );
};
