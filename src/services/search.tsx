import create from "zustand"
import { MdSearch, MdImageSearch, MdLocationOn } from 'react-icons/md';
import { BiNews } from 'react-icons/bi'
import { IoMdPricetag } from 'react-icons/io'
import { HiDotsVertical } from 'react-icons/hi'
import { SearchResultType } from "components/modules/Search/SearchResult";

export const useSearchState = create<SearchState>((set) => ({
    search: '',
    setSearch: (newSearch) => set(() => ({ search: newSearch})),
    searchResults: null,
    setSearchResults: (newResults) => set(() => ({ searchResults: newResults })),
}))

type SearchState = {
    search: string;
    setSearch: (newSearch: string) => void;
    searchResults: null | SearchResultType;
    setSearchResults: (results: SearchResultType | null) => void;
}

export const getSearchQuery = (query: string) => {
    return query.slice(3).split('%20').join(' ')
}

export const searchLinks = [
    {
        title: 'All',
        icon: <MdSearch />,
        selector: 'all',
    },
    {
        title: 'Images',
        icon: <MdImageSearch />,
        selector: 'images'
    },
    {
        title: 'Maps',
        icon: <MdLocationOn />,
        disabled: true,
        selector: 'maps'
    },
    {
        title: 'News',
        icon: <BiNews />,
        disabled: true,
        selector: 'news'
    },
    {
        title: 'Shopping',
        icon: <IoMdPricetag />,
        disabled: true,
        selector: 'shopping'
    },
    {
        title: 'More',
        icon: <HiDotsVertical />,
        disabled: true,
        selector: 'more',
    },
]