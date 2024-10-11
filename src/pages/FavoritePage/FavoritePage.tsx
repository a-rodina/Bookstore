import { useDispatch, useSelector } from 'react-redux';
import './FavoritePage.css';
import { useEffect } from 'react';
import { getBooks } from '../../slice/book';
import { Link } from 'react-router-dom';
import Title from '../../components/Title/Title';
import SmallCardList from '../../components/SmallCardList/SmallCardList';
import FavoriteList from '../../components/FavoriteList/FavoriteList';

function FavoritePage() {

    const data = useSelector((state: any) => state.book);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(getBooks())
    }, [])


    return ( <>
        <section className='section-favorite'>
            <div className='container'>
                <Link to={`/`} className='icon-back'><i className="fa-solid fa-arrow-left-long my-icon"></i></Link>
                <Title text='Favorites books'></Title>
                {data.favorites.length === 0 ? <h1 className='container'>No favorites</h1> : <FavoriteList books={data.favorites}></FavoriteList>}
            </div>
        </section>
    
    </> );
}

export default FavoritePage;