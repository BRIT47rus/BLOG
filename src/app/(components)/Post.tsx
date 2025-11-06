import Link from 'next/link';

const Post = () => {
  return (
    <div>
      <h2>Привет я есть пост</h2>
      <p>
        И я не маршрутизируюсь потому что заключен в папку (components),ключевое значение тут ()
        скобки , они не дают маршрутизировать
      </p>
      <Link href={'/testpost'}>К тесту () для проверки папки внутри ()</Link>
    </div>
  );
};

export default Post;
