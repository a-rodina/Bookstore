import { Link } from 'react-router-dom';
import { TObject } from '../../types/types';
import Title from '../Title/Title';
import './SelectedBook.css';
import { useContext } from 'react';
import { createdContext } from '../../providers/ThemeContext';
import { useSelector } from 'react-redux';


function SelectedBook({book, addToCart, addToFavorites}: TObject) {

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

    return ( <>
        <Link to={`/`} className='icon-back'>
            <i className={`fa-solid fa-arrow-left-long my-icon-${color}`}></i>
        </Link>
        <Title text={book.title}></Title>
        <div className='selected-book__first-block'>
            <div className={`selected-book__first-block-image-${color}`}>
                <img className='selected-book__image' alt='image' src={book.image}/>
            </div>
            <div className='selected-book__first-block-about'>
                <p className={`selected-book__price-${color}`}>{book.price}</p>
                <ul className='selected-book__info-list'>
                    <li className='selected-book__info-list-item'>
                        <p className={`list-title-${color}`}>Authors</p>
                        <p className={`list-text-${color}`}>{book.authors}</p>
                    </li>
                    <li className='selected-book__info-list-item'>
                        <p className={`list-title-${color}`}>Publisher</p>
                        <p className={`list-text-${color}`}>{book.year}</p>
                    </li>                            
                    <li className='selected-book__info-list-item'>
                        <p className={`list-title-${color}`}>Rating</p>
                        <p className={`list-text-${color}`}>{book.rating}</p>
                    </li>
                    <li className='selected-book__info-list-item'>
                        <p className={`list-title-${color}`}>Pages</p>
                        <p className={`list-text-${color}`}>{book.pages}</p>
                    </li>
                </ul>
                <button className={`selected-book__button-${color}`} onClick={() => addToCart?.(book)}>add to cart</button>
            </div>
        </div>
        <div className='selected-book__second-block'>
            <h2 className={`selected-book__second-block-title-${color}`}>Description</h2>
            <p className={`selected-book__second-block-content-${color}`}>{book.desc}</p>
            <div className={`selected-book__second-block-like-${color}`} onClick={() => addToFavorites?.(book)}>
                <p className={`like-text-${color}`}>Add to favorites</p>
                {getFavoriteIcon()}
            </div>
        </div>
    </> );
}

export default SelectedBook;