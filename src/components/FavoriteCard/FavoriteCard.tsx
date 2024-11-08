import { Link } from 'react-router-dom';
import { TObject } from '../../types/types';
import './FavoriteCard.css';
import { useContext } from 'react';
import { createdContext } from '../../providers/ThemeContext';

function FavoriteCard({book, removeBookFromFavorite}: TObject) {

    const [color, setColor] = useContext(createdContext);

    return ( <>
        <div className='favorite-card__wrap'>
            <Link to={`/${book.isbn13}`}>
                <div className={`favorite-card__image-block-${color}`}>
                    <img className='favorite-card__image' alt='image' src={book.image}/>
                </div>
            </Link>
            <div className='favorite-card__right-side'>
                <div className='favorite-card__right-side-titles'>
                    <h2 className={`favorite-card__title-${color}`}>{book.title}</h2>
                    <p className='favorite-card__subtitle'>{book.subtitle}</p>
                    <p className={`favorite-card__second-price-${color}`}>{book.price}</p>
                </div>
                <p className={`favorite-card__price-${color}`}>{book.price}</p>
                <div className='favorite-card__icon' onClick={() => removeBookFromFavorite?.(book)}> 
                    <i className={`fa-solid fa-heart my-icon-${color}`}></i>
                </div>
            </div>
        </div>
    </> );
}

export default FavoriteCard;