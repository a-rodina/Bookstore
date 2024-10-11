import { Link } from 'react-router-dom';
import './CartPage.css';
import Title from '../../components/Title/Title';
import SmallCardList from '../../components/SmallCardList/SmallCardList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getBooks } from '../../slice/book';

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
                {data.cart.length === 0 ? <h1 className='container'>Your cart is empty</h1> : <SmallCardList books={data.cart}></SmallCardList>}
            </div>
        </section>
    </> );
}

export default CartPage;