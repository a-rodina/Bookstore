import { useSelector } from 'react-redux';
import Title from '../../components/Title/Title';
import './SearchPage.css';
import CardList from '../../components/CardList/CardList';
import { useContext } from 'react';
import { createdContext } from '../../providers/ThemeContext';

function SearchPage() {

    const data = useSelector((state: any) => state.book);
    const [color, setColor] = useContext(createdContext);

    return ( <>
        <div className={`section__search-books-${color}`}>
            <div className="container">
                <Title text='Search results'></Title>
                {data.search.length === 0 ? <div className='container'><div className='theme-block'><p className={`search-text-${color}`}>Please, enter at least 2 characters</p></div></div> : <CardList books={data.search}></CardList>}
            </div>
        </div>
    </> );
}

export default SearchPage;