import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import './Header.css';
import { useSelector } from 'react-redux';

function Header() {

    const data = useSelector((state: any) => state.book);

    return ( <>
        <header className='header'>
            <div className='header-wrap'>
                <Link to={`/`}><p className='logo'>BOOKSTORE</p></Link>
                <Link to={`/search`}><Input inputType='text' placeholderText='Search' isActive={false}></Input></Link>
                <ul className='header-navigation'>
                    <li className='header-navigation__icons'>
                        <Link to={`/favorite`}><i className="fa-solid fa-heart my-icon"></i></Link>
                        <div className='total-favorites'>{data.totalFavorites}</div>
                    </li>
                    <li className='header-navigation__icons'>
                        <Link to={`/cart`}><i className="fa-solid fa-cart-shopping my-icon"></i></Link>
                        <div className='total-cart'>{data.totalCart}</div>
                    </li>
                    <li className='header-navigation__icons'>
                        <i className="fa-solid fa-circle-user my-icon"></i>
                    </li>
                </ul>
            </div>
        </header>
    </> );
}

export default Header;