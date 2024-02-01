import React from 'react';

const OrganizationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <main className="pt-20 md:pt-24 px-4 max-w-6xl mx-auto 2xl:max-w-screen-xl">
        <div className="flex gap-x-7">
          <div className="w-64 h-full shrink-0  hidden md:block bg-slate-600"></div>
          {children}
        </div>
      </main>
    </div>
  );
};

export default OrganizationLayout;
