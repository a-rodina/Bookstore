import { useDispatch, useSelector } from 'react-redux';
import './AllBooks.css';
import { useEffect } from 'react';
import { getBooks } from '../../slice/book';
import Title from '../../components/Title/Title';
import CardList from '../../components/CardList/CardList';
import Spinner from '../../components/Spinner/Spinner';

function AllBooks() {

    const data = useSelector((state: any) => state.book);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(getBooks())
    }, [])

    return ( <>
        <div className='section__all-books'>
            <div className="container">
                <Title text='New Releases Books'></Title>
                {data.books.length === 0 ? <Spinner/> : <CardList books={data.books}></CardList>}
            </div>
        </div>
    </> );
}

export default AllBooks;