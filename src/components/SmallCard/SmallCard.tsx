import { Link } from 'react-router-dom';
import { TObject } from '../../types/types';
import './SmallCard.css';

function SmallCard({book, removeBookFromCart}: TObject) {
    return ( <>
        <div className='small-card__wrap'>
            <Link to={book.isbn13} className='small-card__image-block'>
                <img className='small-card__image' alt='image' src={book.image}/>
            </Link>
            <div className='small-card__right-side'>
                <div className='small-card__about-block'>
                    <p className='small-card__title'>{book.title}</p>
                    <div className='small-card__count'>
                        <span className='small-card__count-element'>
                            <i className="fa-solid fa-minus my-icon"></i>
                        </span>
                        <span className='small-card__count-element'>1</span>
                        <span className='small-card__count-element'>
                            <i className="fa-solid fa-plus my-icon"></i>
                        </span>
                    </div>
                </div>
                <p className='small-card__price'>{book.price}</p>
                <div className='small-card__icon' onClick={() => removeBookFromCart?.(book)}>
                    <i className="fa-solid fa-xmark my-icon"></i>
                </div>
            </div>
        </div>
    </> );
}

export default SmallCard;