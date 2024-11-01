import { Link } from 'react-router-dom';
import './CartPage.css';
import Title from '../../components/Title/Title';
import SmallCardList from '../../components/SmallCardList/SmallCardList';
import { useDispatch, useSelector } from 'react-redux';
import { useContext, useEffect } from 'react';
import { getBooks } from '../../slice/book';
import { createdContext } from '../../providers/ThemeContext';

function CartPage() {

    const data = useSelector((state: any) => state.book);
    const dispatch = useDispatch<any>();
    const [color, setColor] = useContext(createdContext);

    useEffect(() => {
        dispatch(getBooks())
    }, [])

    return ( <>
        <section className={`section-cart-${color}`}>
            <div className='container'>
                <Link to={`/`} className='icon-back'><i className={`fa-solid fa-arrow-left-long my-icon-${color}`}></i></Link>
                <Title text='Your Cart'></Title>
                {data.cart.length === 0 ? <div className='container'><h1 className={`cart-text-${color}`}>Your cart is empty</h1></div> : <SmallCardList books={data.cart}></SmallCardList>}
                <div className='section-cart__counter-block'>
                    <p className={`section-cart__counter-block-text-${color}`}>Total :</p>
                    <p className={`section-cart__counter-block-text-${color}`}>${data.total}</p>
                </div>
            </div>
        </section>
    </> );
}

export default CartPage;