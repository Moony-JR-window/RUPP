import React from 'react';
import { IoHomeSharp, IoSettings } from 'react-icons/io5';
import { FaLock } from 'react-icons/fa';
import Image from 'next/image';
import profile from '/app/image/profile.jpg';
import TimeDisplay from '../time/Time';
import Logout from './Logout';
import { toggle } from '../interface/Toggle';

const Profile: React.FC<toggle> = ({ toggle }) => (
  <aside
    className={`
      fixed top-0 left-0 z-30 h-screen w-1/4 min-w-[16rem] bg-blue-400
      border-r border-white/10 shadow-[4px_0_8px_-2px_rgba(0,0,0,0.25)]
      transform transition-transform duration-500 ease-in-out
      ${toggle ? 'translate-x-0' : '-translate-x-full'}
    `}
  >
    <div className="flex h-full w-full flex-col">
      {/* header */}
      <div className="flex flex-col items-center pt-6">
        <div className="font-serif text-3xl">
          <TimeDisplay />
        </div>

        <div className="p-4">
          <Image
            className="rounded-full"
            src={profile}
            alt="Profile Picture"
            width={140}
            height={140}
          />
        </div>

        <h1 className="text-xl font-semibold text-white">None Name</h1>
      </div>

      {/* menu */}
      <nav className="mt-12 flex flex-col items-start gap-6 pl-6 font-bold text-white">
        <MenuItem icon={<IoHomeSharp size={22} />} label="Home" />
        <MenuItem icon={<IoSettings size={22} />} label="Settings" />
        <MenuItem icon={<FaLock size={20} />} label="Security" />
      </nav>

      {/* logout */}
      <div className="mt-auto mb-8 px-6">
        <Logout />
      </div>
    </div>
  </aside>
);

const MenuItem = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <div className="flex cursor-pointer items-center gap-4 hover:opacity-80">
    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-800">
      {icon}
    </span>
    <span className="text-lg">{label}</span>
  </div>
);

export default Profile;
