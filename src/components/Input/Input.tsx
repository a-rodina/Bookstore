import { useState } from 'react';
import './Input.css';
import { TInput } from '../../types/types';

function Input({compound, inputType, title, placeholderText, isActive, errorText, isError}: TInput) { 
    
    const [inputText, setInputText] = useState('');

    return ( 
        <>
            <div className='form-wrap'>
                <label className='label' htmlFor={compound}>{title}</label>
                <input style={{outline : isError ? "2px solid #FD3419" : "none"}} className='input' onChange={(event) => setInputText(event.target.value)} value={inputText} id={compound} disabled={isActive} placeholder={placeholderText} type={inputType}></input>
                {isError ?  <div className='error'>{errorText}</div> : null}
            </div>
        </>
    );
}

export default Input;