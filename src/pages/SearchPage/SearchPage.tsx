import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/Title/Title';
import './SearchPage.css';
import { useEffect } from 'react';
import { getBooks } from '../../slice/book';
import Spinner from '../../components/Spinner/Spinner';
import CardList from '../../components/CardList/CardList';

function SearchPage() {

    const data = useSelector((state: any) => state.book);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(getBooks())
    }, [])

    return ( <>
        <div className='section__search-books'>
            <div className="container">
                <Title text='Search results'></Title>
                {data.books.length === 0 ? <Spinner/> : <CardList books={data.books}></CardList>}
            </div>
        </div>
    </> );
}

export default SearchPage;