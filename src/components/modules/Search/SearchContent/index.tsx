import * as React from 'react';
import { useSearchState } from 'services/search';
import { SearchResult, SearchResultItem } from '../SearchResult';

export const SearchContent: React.FC<SearchContentProps> = ({ type }) => {
    const { searchResults } = useSearchState()

    return (
        <div className="search__content--wrapper">
            <p className="search__count--text">About {searchResults?.queries.request[0].totalResults} results ({searchResults?.searchInformation.formattedSearchTime} seconds)</p>
            {searchResults?.items.map((item: SearchResultItem) => <SearchResult item={item} />)}
        </div>
    );
};

type SearchContentProps = {
  type?: string | undefined;
};
