import Link from 'next/link';
import { metadata } from './layout';

metadata.title = 'Ошибка';
export default function NotFound() {
    return (
        <div>
            <h2>Упс!</h2>
            <p>Такой страници не существует! </p>
            <Link href="/">Вернуться на главную страницу</Link>
        </div>
    );
}
