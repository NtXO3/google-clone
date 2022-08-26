import * as React from 'react';

export const SearchResult: React.FC<SearchResultProps> = ({ item }) => {

    return (
        <div className="search__result">
            <div className="search__result--description">
                <a href={item.link} className="search__result--link">{item.link}</a>
                <a href={item.link} className="search__result--title">{item.title}</a>
                <p className="search__result--para">{item.snippet}</p>
            </div>
            {item.pagemap?.thumbnail && <img src={item.pagemap?.thumbnail[0]?.src} alt="" className="search__result--img" /> }
        </div>
    );
};

type SearchResultProps = {
  item: SearchResultItem;
};

export type SearchResultType = {
    items: SearchResultItem[];
    searchInformation: {
        formattedSearchTime: string;
    }
    queries: {
        request: {
            totalResults: number | string;
        }[]
    }
}

export type SearchResultItem = {
    title: string;
    htmlTitle: string;
    link: string;
    snippet: string;
    pagemap: {
        thumbnail?: {
            src: string;
        }[],
    }
}