const Page = ({ params }: { params: { id: string } }) => {
  const photoId = params.id;
  return (
    <div>
      <h2>резерв {photoId}</h2>
    </div>
  );
};

export default Page;
