import { TData } from '../../types/types';
import './FavoriteList.css';
import FavoriteCard from '../FavoriteCard/FavoriteCard';
import { useDispatch } from 'react-redux';
import { addToFavoriteRedux } from '../../slice/book';

function FavoriteList({books}: {books: TData[]}) {

    const dispatch = useDispatch();

    function removeBookFromFavorite(book: any) {
        dispatch(addToFavoriteRedux(book))
    }

    function getUniqFavorites(books: TData[]) {
        const uniqItems = new Set();
        for (const book of books) {
            uniqItems.add(book)
        }
        return Array.from(uniqItems.values());
    }

    function makeFavoritesCards(books: TData[]) {
        const uniqFavorites = getUniqFavorites(books);
        console.log(uniqFavorites)
        return uniqFavorites.map((item: any) => <li key={item.isbn13} className='favorite-card-list__item'>
            <FavoriteCard removeBookFromFavorite={removeBookFromFavorite} book={item}/>
            </li>)
    }

    return ( <>
        <section className='section__favorite-list'>
            <ul className='favorite-card-list'>
                {makeFavoritesCards(books)}
            </ul>
        </section>

    </> );
}

export default FavoriteList;