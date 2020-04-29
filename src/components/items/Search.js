import React,  { useState } from 'react'

const Search =  props => {
    const [text, setText] = useState('')

    const  onChange = e => setText(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        props.searchItems(text);
        setText('');
    }

    return(
        <div>
            <form onSubmit={onSubmit} className="form">
                <input type="text" name="text" placeholder="Search Element..." value={text} 
                onChange={onChange} required/>
                <button type="submit" value="Search" className="btn btn-dark btn-block"><i className="fas fa-search"></i>&emsp;Search</button>
            </form>
        </div>
    )
}

export default Search