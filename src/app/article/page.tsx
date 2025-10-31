import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div>
      Навигация по статьм
      <Link href={'/1'}>1 статья</Link>
      <Link href={'/2'}>2 статья</Link>
      <Link href={'/3'}>3 статья</Link>
    </div>
  );
};

export default Page;
