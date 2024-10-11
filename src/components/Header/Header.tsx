import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import './Header.css';

function Header() {
    return ( <>
        <header className='header'>
            <div className='header-wrap'>
                <Link to={`/`}><p className='logo'>BOOKSTORE</p></Link>
                <Link to={`/search`}><Input inputType='text' placeholderText='Search' isActive={false}></Input></Link>
                <ul className='header-navigation'>
                    <li className='header-navigation__icons'>
                        <Link to={`/favorite`}><i className="fa-solid fa-heart my-icon"></i></Link>
                    </li>
                    <li className='header-navigation__icons'>
                        <Link to={`/cart`}><i className="fa-solid fa-cart-shopping my-icon"></i></Link>
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