import Link from 'next/link';
import Post from './(components)/Post';

export default function Page() {
  return (
    <div>
      <h1>Hello, Next.js My blog started!</h1>;<Link href={'/article'}>Перейти к статьям </Link>
      <Post />
      <Link href={'/wind'}>Перейти к MODAL </Link>
    </div>
  );
}
