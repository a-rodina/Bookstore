import { useContext } from 'react';
import './Footer.css';
import { createdContext } from '../../providers/ThemeContext';

function Footer() {

    const [color, setColor] = useContext(createdContext);

    return ( <>
    <footer className={`footer-${color}`}>
        <div className='container'>
            <div className='footer-wrap'>
                <span className='footer-text'>©2024 Bookstore</span>
                <span className='footer-text'>All rights reserved</span>
            </div>
        </div>
    </footer>
    </> );
}

export default Footer;