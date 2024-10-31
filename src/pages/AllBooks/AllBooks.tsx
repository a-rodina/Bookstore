import { useDispatch, useSelector } from 'react-redux';
import './AllBooks.css';
import { useContext, useEffect } from 'react';
import { getBooks } from '../../slice/book';
import Title from '../../components/Title/Title';
import CardList from '../../components/CardList/CardList';
import Spinner from '../../components/Spinner/Spinner';
import { createdContext } from '../../providers/ThemeContext';

function AllBooks() {

    const data = useSelector((state: any) => state.book);
    const dispatch = useDispatch<any>();
    const [color, setColor] = useContext(createdContext);

    useEffect(() => {
        dispatch(getBooks())
    }, [])

    return ( <>
        <div className={`section__all-books-${color}`}>
            <div className="container">
                <Title text='New Releases Books'></Title>
                {data.books.length === 0 ? <Spinner/> : <CardList books={data.books}></CardList>}
            </div>
        </div>
    </> );
}

export default AllBooks;