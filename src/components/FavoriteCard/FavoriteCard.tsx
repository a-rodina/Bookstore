import { TObject } from '../../types/types';
import './FavoriteCard.css';

function FavoriteCard({book}: TObject) {
    return ( <>
        <div className='favorite-card__wrap'>
            <div className='favorite-card__image-block'>
                <img className='favorite-card__image' alt='image' src={book.image}/>
            </div>
            <div className='favorite-card__right-side'>
                <p className='favorite-card__title'>{book.title}</p>
                <p className='favorite-card__price'>{book.price}</p>
                <div className='favorite-card__icon'>
                    <i className="fa-solid fa-heart my-icon"></i>
                </div>
            </div>
        </div>
    </> );
}

export default FavoriteCard;