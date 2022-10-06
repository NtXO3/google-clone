import { SearchContent } from 'components/modules/Search/SearchContent';
import { SearchHeader } from 'components/modules/Search/SearchHeader';
import { SearchImagesContent } from 'components/modules/Search/SearchImagesContent';
import { getSearchResults } from 'queries/search';
import * as React from 'react';
import { useLocation } from 'react-router-dom';

import { getSearchQuery, useSearchState } from 'services/search';

const Search: React.FC = () => {
    const { search, setSearchResults, setSearch } = useSearchState()
    const { search: searchParams } = useLocation()
    const type = searchParams.split('&')[2]?.slice(5)

    const fetchResults = async () => {
        const data = await getSearchResults(search, 1)
        setSearchResults(data)
    }

    React.useEffect(() => {
        setSearch(getSearchQuery(searchParams.split('&')[0]))
    }, [])

    React.useEffect(() => {
        if (!search) return;
        fetchResults()
    }, [searchParams])

    return (
        <div className="search__wrapper">
            <SearchHeader />
            {type === 'all' && <SearchContent type={type} />}
            {type === 'images' && <SearchImagesContent type={type} />}
        </div>
    );
};

export default Search;