import { Link } from 'react-router-dom';
import { TData } from '../../types/types';
import SmallCard from '../SmallCard/SmallCard';
import './SmallCardList.css';

function SmallCardList({books}: {books: TData[]}) {
    return ( <>
        <section className='section__small-card-list'>
            <ul className='small-card-list'>
                {books.map((item: any) => <li className='small-card-list__item'><Link to={`/${item.isbn13}`}><SmallCard key={item.isbn13} book={item}/></Link></li> )}
            </ul>
        </section>
    </> );
}

export default SmallCardList;