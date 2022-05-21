import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@material-ui/core';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

const Search = ({ hideButtons= false }) => {
    const [{}, dispatch] = useStateValue()
    const [input, setInput] = useState(``)
    const navigate = useNavigate()

    const search = (e) => {
        e.preventDefault()
        if (input.length >= 1) {
            dispatch({
                type: actionTypes.SET_SEARCH_TERM,
                term: input
            })
            navigate('/search')
        }
    }

    return (
        <form className='search' onSubmit={search}>
            <div className="search__input">
                <SearchIcon className='search__input--icon' />
                <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon className='' />
            </div>
            {
                hideButtons ? 
                <div className="search__buttons">
                    <Button type='submit' variant='outlined' className='button__hidden'>Google Search</Button>
                    <Button type='submit' variant='outlined' className='button__hidden'>I'm feeling lucky</Button>
                </div>
                :
                <div className="search__buttons">
                    <Button type='submit' variant='outlined'>Google Search</Button>
                    <Button type='submit' variant='outlined'>I'm feeling lucky</Button>
                </div>
            }
        </form>
    );
}

export default Search;
