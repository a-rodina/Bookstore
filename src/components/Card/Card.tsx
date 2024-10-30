import { Link } from 'react-router-dom';
import { TObject } from '../../types/types';
import './Card.css';

function Card({book, addToFavorites}: TObject) {
    return (  <>
        <div className='card-wrap'>
            <Link to={`/${book.isbn13}`}>
                <div className='card__image-block'>
                    <img className='card__image' alt='image' src={book.image}/>
                </div>
            </Link>
            <div className='card__about'>
                <p className='card__about-title'>{book.title}</p>
                <div className='card__about-block'>
                    <p className='card__about-price'>{book.price}</p>
                    <div className='card__about-block-icon' onClick={() => {addToFavorites?.(book)}}>
                        <i className="fa-regular fa-heart my-icon"></i>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Card;