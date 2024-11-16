import { TData } from '../../types/types';
import SmallCard from '../SmallCard/SmallCard';
import './SmallCardList.css';
import { useDispatch } from 'react-redux';
import { addToCartRedux, countCartRedux, removeAllSameBooksRedux, removeBookFromCartRedux } from '../../slice/book';

function SmallCardList({books}: {books: TData[]}) {

    const dispatch = useDispatch();

    function removeBookFromCart(book: any) {
        dispatch(removeBookFromCartRedux(book))
        dispatch(countCartRedux())
    }

    function addToCart(book: any) {
        dispatch(addToCartRedux(book))
        dispatch(countCartRedux())
    }

    function removeAllSameBook(book: any) {
        dispatch(removeAllSameBooksRedux(book))
        dispatch(countCartRedux())
    }

    function itemCounting(books: TData[]) {
        let idToCount = new Map();
        for (const book of books) {
            const currentCount = idToCount.get(book.isbn13)
            if (currentCount === undefined) {
                idToCount.set(book.isbn13, 1)
            } else {
                idToCount.set(book.isbn13, currentCount + 1)
            }
        }
        return idToCount;
    }

    function getUniqItems(books: TData[]) {
        const uniqItems = new Set();
        for (const book of books) {
            uniqItems.add(book)
        }
        return Array.from(uniqItems.values());
    }

    function makeBookCards(books: TData[]) {
        const itemsCount = itemCounting(books);
        const uniqBooks = getUniqItems(books);
        return uniqBooks.map((item: any) => <li key={item.isbn13} className='small-card-list__item'>
            <SmallCard itemCount={itemsCount.get(item.isbn13)} removeAllSameBook={removeAllSameBook} addToCart={addToCart} removeBookFromCart={removeBookFromCart} book={item}/>
            </li>)
    }

    return ( <>
        <section className='section__small-card-list'>
            <ul className='small-card-list'>
                {makeBookCards(books)}
            </ul>
        </section>
    </> );
}

export default SmallCardList;