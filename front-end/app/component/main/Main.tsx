import React from 'react';
import ToggleMenu from '../menu/ToggleMenu';
import { toggle } from '../interface/Toggle';

const Main: React.FC<toggle> = ({ toggle, setToggle }) => (
  <main
    className={`
      relative z-20 flex h-screen w-full flex-col
      bg-white transition-transform duration-500 ease-in-out
      ${toggle ? 'translate-x-[25%]' : ''}
    `}
  >
    <ToggleMenu toggle={toggle} setToggle={setToggle} />
    {/* your routed page content will live here */}
    <section className="flex-1 p-6">Main</section>
  </main>
);

export default Main;
