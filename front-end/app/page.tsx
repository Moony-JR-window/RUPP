'use client';

import React from 'react';
import Main from './component/main/Main';
import { toggle } from './component/interface/Toggle';

const Page: React.FC= () => {
    return (
        <div className="flex w-full h-full">
            <Main />
        </div>
    );
};

export default Page;
