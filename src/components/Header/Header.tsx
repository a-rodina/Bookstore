import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import './Header.css';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { createdContext } from '../../providers/ThemeContext';

function Header() {

    const data = useSelector((state: any) => state.book);
    const [color, setColor] = useContext(createdContext);

    return ( <>
        <header className={`header-${color}`}>
            <div className='header-wrap'>
                <Link to={`/`}><p className={`logo-${color}`}>BOOKSTORE</p></Link>
                <Link to={`/search`}><Input inputType='text' placeholderText='Search' isActive={false}></Input></Link>
                <ul className='header-navigation'>
                    <li className='header-navigation__icons'>
                        <Link to={`/favorite`}>
                            <i className={`fa-solid fa-heart my-icon-${color}`}></i>
                        </Link>
                        <div className='total-favorites'>{data.totalFavorites}</div>
                    </li>
                    <li className='header-navigation__icons'>
                        <Link to={`/cart`}>
                            <i className={`fa-solid fa-cart-shopping my-icon-${color}`}></i>
                        </Link>
                        <div className='total-cart'>{data.totalCart}</div>
                    </li>
                    <li className='header-navigation__icons-theme'>
                        <div className='header-navigation__icons-theme-elem' onClick={() => setColor("light")}>
                            <i className={`fa-regular fa-sun my-icon-${color}`}></i>
                        </div>
                        <div className='header-navigation__icons-theme-elem' onClick={() => setColor("dark")}>
                            <i className={`fa-regular fa-moon my-icon-${color}`}></i>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    </> );
}

export default Header;