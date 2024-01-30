import React from 'react';

const ClearkLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-full flex items-center justify-center">{children}</div>;
};

export default ClearkLayout;
