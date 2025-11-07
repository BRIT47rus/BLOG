const articles = {
  '1': 'Первый',
  '2': 'второй',
  '3': 'Третий',
};
export default async function Page({ params }: { params: Promise<{ article: string }> }) {
  const paramsarticle = await params;
  const { article } = paramsarticle;
  //@ts-ignore
  const displayarticle = articles[article] || 'article не найден';

  console.log(typeof article, ' тут слаг');
  return (
    <div>
      <h2>Я артикле</h2>
      <p>{displayarticle}</p>
    </div>
  );
}
