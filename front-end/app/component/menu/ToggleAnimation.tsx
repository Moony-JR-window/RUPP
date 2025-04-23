'use client';
import React from 'react';
import { toggle } from '../interface/Toggle';

const ToggleAnimation: React.FC<toggle> = ({ toggle, setToggle }) => (
  <button
    onClick={() => setToggle(!toggle)}
    className="relative flex h-6 w-8 flex-col items-center justify-center gap-1.5"
  >
    <Bar isTop active={toggle} />
    <Bar isMiddle active={toggle} />
    <Bar isBottom active={toggle} />
  </button>
);

const Bar = ({
  isTop,
  isMiddle,
  isBottom,
  active,
}: {
  isTop?: boolean;
  isMiddle?: boolean;
  isBottom?: boolean;
  active: boolean;
}) => (
  <span
    className={`
      block h-1 w-full bg-gray-700 transition-all duration-300 ease-in-out
      ${active && isTop ? 'translate-y-1 rotate-45' : ''}
      ${active && isMiddle ? 'opacity-0' : ''}
      ${active && isBottom ? '-translate-y-1 -rotate-45' : ''}
    `}
  />
);

export default ToggleAnimation;
