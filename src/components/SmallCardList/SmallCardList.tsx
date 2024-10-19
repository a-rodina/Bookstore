import { Link } from 'react-router-dom';
import { TData } from '../../types/types';
import SmallCard from '../SmallCard/SmallCard';
import './SmallCardList.css';
import { useDispatch } from 'react-redux';
import { removeBookFromCartRedux } from '../../slice/book';

function SmallCardList({books}: {books: TData[]}) {

    const dispatch = useDispatch();

    function removeBookFromCart(book: any) {
        dispatch(removeBookFromCartRedux(book))
    }

    return ( <>
        <section className='section__small-card-list'>
            <ul className='small-card-list'>
                {books.map((item: any) => <li key={item.isbn13} className='small-card-list__item'><SmallCard removeBookFromCart={removeBookFromCart} book={item}/></li>)}
            </ul>
        </section>
    </> );
}

export default SmallCardList;