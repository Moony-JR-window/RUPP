import React from 'react';
import ToggleAnimation from './ToggleAnimation';
import { toggle } from '../interface/Toggle';

const ToggleMenu: React.FC<toggle> = ({ toggle, setToggle }) => (
  <header className="flex items-center gap-6 p-5 pt-10">
    {/* 1️⃣  hamburger now on the left */}
    <ToggleAnimation toggle={toggle} setToggle={setToggle} />

    {/* 2️⃣  title follows */}
    <h1 className="text-4xl font-semibold leading-tight">
      Dentist&nbsp;management<br />system
    </h1>
  </header>
);

export default ToggleMenu;
