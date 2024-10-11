import { Link } from 'react-router-dom';
import { TData } from '../../types/types';
import './FavoriteList.css';
import FavoriteCard from '../FavoriteCard/FavoriteCard';

function FavoriteList({books}: {books: TData[]}) {
    return ( <>
        <section className='section__favorite-list'>
            <ul className='favorite-card-list'>
                {books.map((item: any) => <li className='favorite-card-list__item'><Link to={`/${item.isbn13}`}><FavoriteCard key={item.isbn13} book={item}/></Link></li>)}
            </ul>
        </section>

    </> );
}

export default FavoriteList;