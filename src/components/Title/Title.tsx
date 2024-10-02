import './Title.css';

function Title({text}: {text: string}) {
    return ( <>
    <h1 className="main-title">{text}</h1>
    </> );
}

export default Title;