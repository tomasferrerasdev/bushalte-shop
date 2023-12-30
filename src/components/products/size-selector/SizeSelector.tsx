import type { ValidSizes } from '@/interfaces/product.interface';
import clsx from 'clsx';

interface Props {
  selectedSize: ValidSizes;
  availableSizes: ValidSizes[];
}

export const SizeSelector = ({ selectedSize, availableSizes }: Props) => {
  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Size</h3>
      <div className="flex items-center gap-2 flex-wrap">
        {availableSizes.map((size) => (
          <button
            key={size}
            className={clsx(
              'flex items-center rounded-full border text-xs font-semibold border-neutral-800 bg-black/70 text-white px-4 py-1 hover:border-accent',
              { 'border-accent': size === selectedSize }
            )}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
