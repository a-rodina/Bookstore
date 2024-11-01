import { useDispatch, useSelector } from 'react-redux';
import './FavoritePage.css';
import { useContext, useEffect } from 'react';
import { getBooks } from '../../slice/book';
import { Link } from 'react-router-dom';
import Title from '../../components/Title/Title';
import FavoriteList from '../../components/FavoriteList/FavoriteList';
import { createdContext } from '../../providers/ThemeContext';

function FavoritePage() {

    const data = useSelector((state: any) => state.book);
    const dispatch = useDispatch<any>();
    const [color, setColor] = useContext(createdContext);

    useEffect(() => {
        dispatch(getBooks())
    }, [])


    return ( <>
        <section className={`section-favorite-${color}`}>
            <div className='container'>
                <Link to={`/`} className='icon-back'><i className={`fa-solid fa-arrow-left-long my-icon-${color}`}></i></Link>
                <Title text='Favorites books'></Title>
                {data.favorites.length === 0 ? <div className='container'><h1 className={`favorites-text-${color}`}>No favorites</h1></div> : <FavoriteList books={data.favorites}></FavoriteList>}
            </div>
        </section>
    
    </> );
}

export default FavoritePage;