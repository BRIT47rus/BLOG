import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div>
      <h2>Я роут</h2>
      <p> и я пришел из ( ) но я все равно отрабатывею</p>
      <Link href={'/'}>НА главную</Link>
    </div>
  );
};

export default Page;
