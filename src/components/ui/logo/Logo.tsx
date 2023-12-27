import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/">
      <svg
        width="82"
        height="54"
        viewBox="0 0 82 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_77_42)">
          <path d="M82 27H0V54L82 27Z" fill="#EFEFEF" />
          <path d="M82 0H0V27L82 0Z" fill="#EFEFEF" />
        </g>
        <defs>
          <clipPath id="clip0_77_42">
            <rect width="82" height="54" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <span className="antialiased">büshalte</span>
    </Link>
  );
};
