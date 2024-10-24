import { useState } from 'react';
import './Input.css';
import { TInput } from '../../types/types';
import { useDispatch } from 'react-redux';
import { searchBook } from '../../slice/book';

function Input({compound, inputType, title, placeholderText, isActive, errorText, isError}: TInput) { 
    
    const [inputText, setInputText] = useState('');
    const dispatch = useDispatch<any>();

    function getSearchText(value: any) {
        dispatch(searchBook(value))
    }

    return ( 
        <>
            <div className='form-wrap'>
                <label className='label' htmlFor={compound}>{title}</label>
                <input style={{outline : isError ? "2px solid #FD3419" : "none"}} 
                className='input' 
                onChange={(event) => {setInputText(event.target.value); getSearchText(event.target.value)}} 
                value={inputText} 
                id={compound} 
                disabled={isActive} 
                placeholder={placeholderText} 
                type={inputType}></input>
                {isError ?  <div className='error'>{errorText}</div> : null}
            </div>
        </>
    );
}

export default Input;