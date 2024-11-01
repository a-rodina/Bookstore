import { useDispatch, useSelector } from 'react-redux';
import SelectedBook from '../../components/SelectedBook/SelectedBook';
import './SelectedPage.css';
import { useContext, useEffect } from 'react';
import { addToCartRedux, addToFavoriteRedux, calcTotalCartRedux, calcTotalFavoritesRedux, countCartRedux, getOneBook } from '../../slice/book';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import { createdContext } from '../../providers/ThemeContext';

function SelectedPage() {

    const {isbn13} = useParams();  
    const data = useSelector((state: any) => state.book);
    const dispatch = useDispatch<any>();
    const [color, setColor] = useContext(createdContext);

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
        dispatch(calcTotalFavoritesRedux())
    }

    return ( <>
    <div className={`selected-page__wrap-${color}`}>
        <div className='container'>
            {data.book === null ? <Spinner/> : <SelectedBook addToFavorites={addToFavorites} addToCart={addToCart} book={data.book}></SelectedBook>}
        </div>
    </div>
    </> );
}

export default SelectedPage;