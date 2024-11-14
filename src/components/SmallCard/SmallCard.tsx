import { Link } from 'react-router-dom';
import { TObject } from '../../types/types';
import './SmallCard.css';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { createdContext } from '../../providers/ThemeContext';

function SmallCard({book, removeBookFromCart, addToCart, itemCount, removeAllSameBook}: TObject) {

    const data = useSelector((state: any) => state.book);
    const [color, setColor] = useContext(createdContext);

    return ( <>
        <div className='small-card__wrap'>
            <Link to={`/${book.isbn13}`}>
                <div className={`small-card__image-block-${color}`}>
                    <img className='small-card__image' alt='image' src={book.image}/>
                </div>
            </Link>
            <div className='small-card__right-side'>
                <div className='small-card__about-block'>
                    <p className={`small-card__title-${color}`}>{book.title}</p>
                    <p className='small-card__subtitle'>{book.subtitle}</p>
                    <div className='small-card__count'>
                        <div className='small-card__count-element' onClick={() => removeBookFromCart?.(book)}>
                            <i className={`fa-solid fa-minus my-icon-${color}`}></i>
                        </div>
                        <div className={`small-card__count-element-${color}`}>{itemCount}</div>
                        <div className='small-card__count-element' onClick={() => addToCart?.(book)}>
                            <i className={`fa-solid fa-plus my-icon-${color}`}></i>
                        </div>
                    </div>
                    <p className={`small-card__second-price-${color}`}>{book.price}</p>
                </div>
                <p className={`small-card__price-${color}`}>{book.price}</p>
                <div className='small-card__icon' onClick={() => removeAllSameBook?.(book)}>
                    <i className={`fa-solid fa-xmark my-icon-${color}`}></i>
                </div>
            </div>
        </div>
    </> );
}

export default SmallCard;