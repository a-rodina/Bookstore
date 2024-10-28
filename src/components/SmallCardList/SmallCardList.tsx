import { Link } from 'react-router-dom';
import { TData } from '../../types/types';
import SmallCard from '../SmallCard/SmallCard';
import './SmallCardList.css';
import { useDispatch } from 'react-redux';
import { addToCartRedux, calcTotalCartRedux, countCartRedux, removeBookFromCartRedux } from '../../slice/book';

function SmallCardList({books}: {books: TData[]}) {

    const dispatch = useDispatch();

    function removeBookFromCart(book: any) {
        dispatch(removeBookFromCartRedux(book))
        dispatch(countCartRedux())
        dispatch(calcTotalCartRedux())
    }

    function addToCart(book: any) {
        dispatch(addToCartRedux(book))
        dispatch(countCartRedux())
        dispatch(calcTotalCartRedux())
    }

    return ( <>
        <section className='section__small-card-list'>
            <ul className='small-card-list'>
                {books.map((item: any) => <li key={item.isbn13} className='small-card-list__item'><SmallCard addToCart={addToCart} removeBookFromCart={removeBookFromCart} book={item}/></li>)}
            </ul>
        </section>
    </> );
}

export default SmallCardList;