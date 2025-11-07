'use client';
import { photos } from '@/src/app/(feed)/feed/page';
import Modal from '../../wind/Modal';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Page = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const photoId = params.id;
  const photo = [...photos].filter((item) => item.id === photoId);
  return (
    <div>
      <Modal
        onClick={() => {
          router.back();
        }}
      >
        <h3>Это модалка с изображением </h3>
        <h4>фото № {photoId}</h4>
        <Image src={photo[0].href} alt={photo[0].title} />
      </Modal>
    </div>
  );
};

export default Page;
