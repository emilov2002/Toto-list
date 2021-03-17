import React from 'react';

const Search = ({setStatus, setSearchInputText}) => {
    const statusHandler = (e) =>{
        setStatus(e.target.value);

    };
    return (
            <div className='search-panel'>
                <input type="text" placeholder='search' className='search-panel__input' onChange={(e)=> setSearchInputText(e.target.value)}/>
             <div className="btn-group" role="group" aria-label="Basic example">
                 <button type='button' className='btn btn-outline-info statusBtn' onClick={statusHandler}  value='all'>All</button>
                 <button type='button' className='btn btn-outline-info statusBtn' onClick={statusHandler} value='active'>Active</button>
                 <button type='button' className='btn btn-outline-info statusBtn' onClick={statusHandler} value='done'>Done</button>
             </div>
            </div>
    );
};

export default Search;