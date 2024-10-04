import { TObject } from '../../types/types';
import './Card.css';

function Card({book}: TObject) {
    return (  <>
        <div className='card-wrap'>
            <div className='card__image-block'>
                <img className='card__image' alt='image' src={book.image}/>
            </div>
            <div className='card__about'>
                <p className='card__about-title'>{book.title}</p>
                <p className='card__about-price'>{book.price}</p>
            </div>
        </div>
    </>);
}

export default Card;