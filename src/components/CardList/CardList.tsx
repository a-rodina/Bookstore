import { TData } from '../../types/types';
import Card from '../Card/Card';
import './CardList.css';

function CardList({books}: {books: TData[]}) {
    return ( <>
        <section className='all-books'>
                <ul className='all-books__list'>
                    {books.map((item: any) => <li className='all-books__list-item'><Card key={item.id} book={item}/></li>)}
                </ul>
        </section>
    </> );
}

export default CardList;