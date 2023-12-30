'use client';
import { useState } from 'react';
import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5';

interface Props {
  quantity: number;
}
export const QuantitySelector = ({ quantity }: Props) => {
  const [counter, setCounter] = useState(quantity);

  const onQuantityChange = (value: number) => {
    if (counter + value < 1) return;
    if (counter + value > 5) return;
    setCounter(counter + value);
  };

  return (
    <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-700 w-fit">
      <button
        onClick={() => onQuantityChange(-1)}
        aria-label="remove one"
        className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80"
      >
        <IoRemoveOutline className="h-4 w-4 hover:text-accent" />
      </button>
      <span className="w-6 text-center">
        <span className="w-full text-sm">{counter}</span>
      </span>
      <button
        onClick={() => onQuantityChange(+1)}
        aria-label="add one"
        className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80"
      >
        <IoAddOutline className="h-4 w-4 hover:text-accent" />
      </button>
    </div>
  );
};
