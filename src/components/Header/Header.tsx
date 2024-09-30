import Input from '../Input/Input';
import './Header.css';

function Header() {
    return ( <>
        <header className='header'>
            <div className='header-wrap'>
                <p className='logo'>BOOKSTORE</p>
                <Input inputType='text' placeholderText='Search' isActive={false}></Input>
                <ul className='header-navigation'>
                    <li className='header-navigation__icons'>
                        <i className="fa-solid fa-heart my-icon"></i>
                    </li>
                    <li className='header-navigation__icons'>
                        <i className="fa-solid fa-cart-shopping my-icon"></i>
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