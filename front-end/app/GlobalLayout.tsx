'use client';

import React, { useState } from "react";
import Profile from "./component/menu/Profile";

interface ProfileLayoutProps {
    children: React.ReactNode

}

const GlobalLayout: React.FC<ProfileLayoutProps> = ({ children }) => {
    const [toggle, setToggle] = useState<boolean>(true);

    return (
        <div className="flex w-full h-full">
            <Profile toggle={toggle} setToggle={setToggle} />
            {children}
        </div>
    );
};

export default GlobalLayout;
