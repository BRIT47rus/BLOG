import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Ошибка',
};

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
