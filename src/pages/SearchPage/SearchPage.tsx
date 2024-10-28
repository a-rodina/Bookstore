import { useSelector } from 'react-redux';
import Title from '../../components/Title/Title';
import './SearchPage.css';
import CardList from '../../components/CardList/CardList';

function SearchPage() {

    const data = useSelector((state: any) => state.book);

    console.log(data.search.length)

    return ( <>
        <div className='section__search-books'>
            <div className="container">
                <Title text='Search results'></Title>
                {data.search.length === 0 ? <div className='container'><p className='search-text'>Enter your request</p></div> : <CardList books={data.search}></CardList>}
            </div>
        </div>
    </> );
}

export default SearchPage;