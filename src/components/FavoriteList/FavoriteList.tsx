import { TData } from '../../types/types';
import './FavoriteList.css';
import FavoriteCard from '../FavoriteCard/FavoriteCard';
import { useDispatch } from 'react-redux';
import { calcTotalFavoritesRedux, removeBookFromFavoriteRedux } from '../../slice/book';

function FavoriteList({books}: {books: TData[]}) {

    const dispatch = useDispatch();

    function removeBookFromFavorite(book: any) {
        dispatch(removeBookFromFavoriteRedux(book))
        dispatch(calcTotalFavoritesRedux())
    }

    return ( <>
        <section className='section__favorite-list'>
            <ul className='favorite-card-list'>
                {books.map((item: any) => <li key={item.isbn13} className='favorite-card-list__item'><FavoriteCard removeBookFromFavorite={removeBookFromFavorite} book={item}/></li>)}
            </ul>
        </section>

    </> );
}

export default FavoriteList;