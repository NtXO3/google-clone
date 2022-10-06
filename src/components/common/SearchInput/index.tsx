import { getSearchResults } from 'queries/search';
import * as React from 'react';

import { MdSearch } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom';
import { getSearchQuery, useSearchState } from 'services/search';

export const SearchInput: React.FC<SearchInputProps> = () => {
    const { search, setSearch, setSearchResults } = useSearchState();
    const { search: searchQuery } = useLocation()
    const navigate = useNavigate()
    
    const handleSearch = () => {
        return navigate(`/search?q=${search}&page=1&type=all`)
    }

    const fetchResults = async () => {
        const query = getSearchQuery(searchQuery.split('&')[0])
        const data = await getSearchResults(query, 1)
        setSearchResults(data)
    }

    React.useEffect(() => {
        if (searchQuery.length > 0 && !search) {
            setSearch(getSearchQuery(searchQuery))
            fetchResults()
        }
    }, [searchQuery])

    return (
        <div className="input__wrapper">
            <div className="input__icon">
                <MdSearch />
            </div>
            <input 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                className='search__input' 
                type="text" 
                spellCheck={false}
                onKeyUp={(e) => e.key === 'Enter' && handleSearch()}
            />
        </div>
    );
};

type SearchInputProps = {
  width?: string;
};
