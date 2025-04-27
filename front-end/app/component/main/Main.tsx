import React from 'react';
import Record from '../record/Record';
import ListMenu from '../record/ListMenu';

const Main: React.FC = () => {

    return (
        <div
            className={`w-full  h-screen flex flex-col 
            items-center justify-start bg-first `}
        >
            <Record/>
            <ListMenu/>
        </div>
    );
};

export default Main;
