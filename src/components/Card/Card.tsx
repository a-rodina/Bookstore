import { Link } from 'react-router-dom';
import { TObject } from '../../types/types';
import './Card.css';
import { useContext } from 'react';
import { createdContext } from '../../providers/ThemeContext';

function Card({book, addToFavorites}: TObject) {

    const [color, setColor] = useContext(createdContext);

    return (  <>
        <div className='card-wrap'>
            <Link to={`/${book.isbn13}`}>
                <div className={`card__image-block-${color}`}>
                    <img className='card__image' alt='image' src={book.image}/>
                </div>
            </Link>
            <div className='card__about'>
                <p className={`card__about-title-${color}`}>{book.title}</p>
                <div className='card__about-block'>
                    <p className={`card__about-price-${color}`}>{book.price}</p>
                    <div className='card__about-block-icon' onClick={() => {addToFavorites?.(book)}}>
                        <i className={`fa-regular fa-heart my-icon-${color}`}></i>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Card;