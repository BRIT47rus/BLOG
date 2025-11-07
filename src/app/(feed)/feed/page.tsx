import Link from 'next/link';

export type PhotoType = {
  id: string;
  title: string;
  href: string;
};
export const photos: PhotoType[] = [
  {
    id: '1',
    title: 'Первое фото',
    href: '../../../../public/Gemini_Generated_Image_maacugmaacugmaac.png',
  },
  { id: '2', title: 'второе фото', href: '../../../../public/foto.jpg' },
  { id: '3', title: 'Третье фото', href: '../../../../public/лого.jpg' },
];

const Page = () => {
  return (
    <div>
      <h2>ФОТОГРАФИИ</h2>
      {photos.map((photo) => (
        <Link key={photo.id} href={`/photo/${photo.id}`}>
          {photo.title}
        </Link>
      ))}
    </div>
  );
};

export default Page;
