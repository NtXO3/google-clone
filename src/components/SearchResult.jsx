import React from 'react';

const SearchResult = ({ item }) => {
    return (
        <div className='search-page__result'>
            <a href={item.link} className='search-page__link'>
                {item.pagemap?.cse_image?.length > 0 &&
                item.pagemap?.cse_image[0]?.src && (
                    <img src={item.pagemap?.cse_image[0]?.src } alt="" className="search-page__result--img" />
                )}

                {item.displayLink}
            </a>
            <a href={item.link} className='search-page__result--title'>
                <h2>{item.title}</h2>
            </a>
            <p className="search-page__result--snippet">
                {item.snippet}
            </p>
        </div>
    );
}

export default SearchResult;
