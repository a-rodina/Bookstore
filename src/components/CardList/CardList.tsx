import { TData } from '../../types/types';
import Card from '../Card/Card';
import './CardList.css';
import { useDispatch } from 'react-redux';
import { addToFavoriteRedux, calcTotalFavoritesRedux } from '../../slice/book';

function CardList({books}: {books: TData[]}) {

    const dispatch = useDispatch<any>();

    function addToFavorites(book: any) {
        dispatch(addToFavoriteRedux(book))
        dispatch(calcTotalFavoritesRedux())
    }

    return ( <>
        <section className='all-books'>
                <ul className='all-books__list'>
                    {books.map((item: any) => <li key={item.isbn13} className='all-books__list-item'><Card book={item} addToFavorites={addToFavorites}/></li>)}
                </ul>
        </section>
    </> );
}

export default CardList;