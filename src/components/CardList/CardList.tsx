import { Link } from 'react-router-dom';
import { TData } from '../../types/types';
import Card from '../Card/Card';
import './CardList.css';

function CardList({books}: {books: TData[]}) {
    return ( <>
        <section className='all-books'>
                <ul className='all-books__list'>
                    {books.map((item: any) => <li key={item.isbn13} className='all-books__list-item'><Link to={`/${item.isbn13}`}><Card book={item}/></Link></li> )}
                </ul>
        </section>
    </> );
}

export default CardList;