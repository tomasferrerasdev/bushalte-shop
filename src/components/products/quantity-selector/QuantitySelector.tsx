'use client';
import { useState } from 'react';
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';

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
    <div className="my-5">
      <h3 className="font-bold mb-4">Quantity</h3>
      <div className="flex items-center gap-2">
        <button onClick={() => onQuantityChange(-1)} aria-label="remove one">
          <IoRemoveCircleOutline className="h-6 w-6 hover:text-accent" />
        </button>
        <span className="w-20 mx-1 py-2 rounded-md px-5 bg-[#0D0D0D] text-center text-white">
          {counter}
        </span>
        <button onClick={() => onQuantityChange(+1)} aria-label="add one">
          <IoAddCircleOutline className="h-6 w-6 hover:text-accent" />
        </button>
      </div>
    </div>
  );
};
