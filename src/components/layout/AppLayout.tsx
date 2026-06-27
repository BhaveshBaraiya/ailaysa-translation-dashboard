// 
// App Layout
// 

import React from 'react';
import SidebarLeft from './SidebarLeft';
import SidebarRight from './SidebarRight';
import Header from '../ui/Header';

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex flex-col h-screen w-full bg-[#F4F6F8] overflow-hidden">
      <Header/>
      <div className="flex-1 min-h-0 p-[14px] lg:overflow-hidden overflow-y-auto">
        <div className="flex flex-col lg:flex-row gap-[14px] lg:h-full">
          <div className="w-full lg:w-[260px] shrink-0">
            <SidebarLeft /> 
          </div>
          <main className="flex-1 min-w-0 flex flex-col border-0 rounded-lg bg-white shadow-sm overflow-hidden lg:h-full h-auto">
            {children}
          </main>
          <div className="w-full lg:w-[280px] shrink-0">
            <SidebarRight />
          </div>
        </div>
      </div>
    </div>
  );
}