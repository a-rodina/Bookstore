import { Link } from 'react-router-dom';
import { TObject } from '../../types/types';
import './Card.css';
import { useContext } from 'react';
import { createdContext } from '../../providers/ThemeContext';
import { useSelector } from 'react-redux';

function Card({book, addToFavorites}: TObject) {

    const [color, setColor] = useContext(createdContext);
    const data = useSelector((state: any) => state.book);

    function getFavoriteIcon() {
        let index = -1;
        for (let i = 0; i < data.favorites.length; i++ ) {
            if (data.favorites[i].isbn13 === book.isbn13) {
                index = i;
            }
        }
        if (index > -1) {
            return <i className={`fa-solid fa-heart my-icon-${color}`}></i>
        } else {
            return <i className={`fa-regular fa-heart my-icon-${color}`}></i>
        }
    }

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
                        {getFavoriteIcon()}
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Card;