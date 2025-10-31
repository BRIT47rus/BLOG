import React, { ReactNode } from 'react';
import Modal from './Modal';

const Page = ({ children }: { children: ReactNode }) => {
  const ch = <span> я чилдрен</span>;
  return (
    <div>
      {children}
      <Modal>{ch}</Modal>
    </div>
  );
};

export default Page;
