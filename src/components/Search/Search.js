import React, { useState, useContext } from 'react';
import Context from '../../context';

const Search = ({ fetchProfile }) => {
    const [ value, setValue ] = useState('');
    const { setCommitsOpen } = useContext(Context);

    const submitHandler = (e) => {
        e.preventDefault();
        setCommitsOpen(false);
        fetchProfile(value);
    }

    return (
        <div className="search--box">
            <form onSubmit={submitHandler}>
                <label>
                    <input type="search" placeholder="username" value={value} onChange={e => setValue(e.target.value)}/>
                    <button disabled={!value.trim()}>Поиск</button>
                </label>
            </form>
        </div>
    )
}

export default Search;