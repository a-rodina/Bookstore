import { Link } from 'react-router-dom';
import './CartPage.css';
import Title from '../../components/Title/Title';
import SmallCard from '../../components/SmallCard/SmallCard';
import SmallCardList from '../../components/SmallCardList/SmallCardList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getBooks } from '../../slice/book';
import Spinner from '../../components/Spinner/Spinner';

function CartPage() {

    const data = useSelector((state: any) => state.book);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(getBooks())
    }, [])


    return ( <>
        <section className='section-cart'>
            <div className='container'>
                <Link to={`/`} className='icon-back'><i className="fa-solid fa-arrow-left-long my-icon"></i></Link>
                <Title text='Your Cart'></Title>
                {data.books.length === 0 ? <Spinner/> : <SmallCardList books={data.books}></SmallCardList>}
            </div>
        </section>
    </> );
}

export default CartPage;