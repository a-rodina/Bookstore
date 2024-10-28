import { useDispatch, useSelector } from 'react-redux';
import SelectedBook from '../../components/SelectedBook/SelectedBook';
import './SelectedPage.css';
import { useEffect } from 'react';
import { addToCartRedux, addToFavoriteRedux, calcTotalCartRedux, countCartRedux, getOneBook } from '../../slice/book';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';

function SelectedPage() {

    const {isbn13} = useParams();  
    const data = useSelector((state: any) => state.book);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(getOneBook(isbn13))
    }, [])

    function addToCart(book: any) {
        dispatch(addToCartRedux(book))
        dispatch(countCartRedux())
        dispatch(calcTotalCartRedux())
    }

    function addToFavorites(book: any) {
        dispatch(addToFavoriteRedux(book))
    }

    return ( <>
        {data.book === null ? <Spinner/> : <SelectedBook addToFavorites={addToFavorites} addToCart={addToCart} book={data.book}></SelectedBook>}
    </> );
}

export default SelectedPage;