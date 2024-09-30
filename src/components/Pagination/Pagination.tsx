import './Pagination.css';

function Pagination() {
    return ( 
    <>
        <div className='pagination-wrap'>
            <div className='prev-wrap'>
                <div className='block-icon'>
                    <i className="fa-solid fa-arrow-left pagination-icons"></i>
                </div>
                <div className='prev-next-button'>Prev</div>
            </div>
            <ul className='block-numbers'>
                <li className='numbers'>1</li>
                <li className='numbers'>2</li>
                <li className='numbers'>3</li>
                <li className='numbers'>...</li>
                <li className='numbers'>6</li>
            </ul>
            <div className='next-wrap'>
                <div className='prev-next-button'>Next</div>
                <div className='block-icon'>
                    <i className="fa-solid fa-arrow-right pagination-icons"></i>
                </div>
            </div>
        </div>
    </> 
    );
}

export default Pagination;