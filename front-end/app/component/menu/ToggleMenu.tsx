import React from 'react';
import ToggleAnimation from './ToggleAnimation';
import { toggle } from '../interface/Toggle';

const ToggleMenu: React.FC<toggle> = ({ toggle, setToggle, HandleClick }) => {
    return (
        <div className="flex p-5 pt-10 w-full justify-start items-start">
            <div className="pl-5  mt-[-10px]">
                <h1 className="text-4xl font-semibold">
                    Dentist  <br /> management <br /> system
                </h1>
            </div>
            <ToggleAnimation toggle={toggle} setToggle={setToggle} HandleClick={HandleClick} />
        </div>
    );
};

export default ToggleMenu;
