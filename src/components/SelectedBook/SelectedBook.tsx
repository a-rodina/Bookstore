import { Link } from 'react-router-dom';
import { TObject } from '../../types/types';
import Title from '../Title/Title';
import './SelectedBook.css';


function SelectedBook({book, addToCart, addToFavorites, countCart}: TObject) {

    return ( <>
        <section className='selected-book'>
            <div className='container'>
                <Link to={`/`} className='icon-back'>
                    <i className="fa-solid fa-arrow-left-long my-icon"></i>
                </Link>
                <Title text={book.title}></Title>
                <div className='selected-book__first-block'>
                    <div className='selected-book__first-block-image'>
                        <img className='selected-book__image' alt='image' src={book.image}/>
                    </div>
                    <div className='selected-book__first-block-about'>
                        <p className='selected-book__price'>{book.price}</p>
                        <ul className='selected-book__info-list'>
                            <li className='selected-book__info-list-item'>
                                <p className='list-title'>Authors</p>
                                <p className='list-text'>{book.authors}</p>
                            </li>
                            <li className='selected-book__info-list-item'>
                                <p className='list-title'>Publisher</p>
                                <p className='list-text'>{book.year}</p>
                            </li>                            
                            <li className='selected-book__info-list-item'>
                                <p className='list-title'>Rating</p>
                                <p className='list-text'>{book.rating}</p>
                            </li>
                            <li className='selected-book__info-list-item'>
                                <p className='list-title'>Pages</p>
                                <p className='list-text'>{book.pages}</p>
                            </li>
                        </ul>
                        <button className='selected-book__button' onClick={() => {addToCart?.(book); countCart?.()}}>add to cart</button>
                    </div>
                </div>
                <div className='selected-book__second-block'>
                    <h2 className='selected-book__second-block-title'>Description</h2>
                    <p className='selected-book__second-block-content'>{book.desc}</p>
                    <div className='selected-book__second-block-like' onClick={() => addToFavorites?.(book)}>
                        <p className='like-text'>Add to favorites</p>
                        <i className="fa-regular fa-heart my-icon"></i>
                    </div>
                </div>
            </div>
        </section>
    </> );
}

export default SelectedBook;