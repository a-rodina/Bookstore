import { useContext } from 'react';
import './Title.css';
import { createdContext } from '../../providers/ThemeContext';

function Title({text}: {text: string}) {

    const [color, setColor] = useContext(createdContext);

    return ( <>
    <h1 className={`main-title-${color}`}>{text}</h1>
    </> );
}

export default Title;