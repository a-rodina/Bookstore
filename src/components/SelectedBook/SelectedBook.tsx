import Title from '../Title/Title';
import './SelectedBook.css';

function SelectedBook() {
    return ( <>
        <section className='selected-book'>
            <div className='container'>
                <div className='icon-back'>
                    <i className="fa-solid fa-arrow-left-long my-icon"></i>
                </div>
                <Title text='Book name'></Title>
                <div className='selected-book__first-block'>
                    <div className='selected-book__first-block-image'>
                        <img className='selected-book__image' alt='image' src="https://itbook.store/img/books/9781484206485.png"/>
                    </div>
                    <div className='selected-book__first-block-about'>
                        <p className='selected-book__price'>$ 41.57</p>
                        <ul className='selected-book__info-list'>
                            <li className='selected-book__info-list-item'>
                                <p className='list-title'>Authors</p>
                                <p className='list-text'>Lentin Joseph, Aleena Johny</p>
                            </li>
                            <li className='selected-book__info-list-item'>
                                <p className='list-title'>Publisher</p>
                                <p className='list-text'>Apress, 2022</p>
                            </li>                            
                            <li className='selected-book__info-list-item'>
                                <p className='list-title'>Language</p>
                                <p className='list-text'>English</p>
                            </li>
                            <li className='selected-book__info-list-item'>
                                <p className='list-title'>Format</p>
                                <p className='list-text'>Paper book / ebook (PDF)</p>
                            </li>
                        </ul>
                        <button className='selected-book__button'>add to cart</button>
                    </div>
                </div>
            </div>
        </section>
    </> );
}

export default SelectedBook;