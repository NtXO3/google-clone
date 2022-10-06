import * as React from 'react';
import Logo from 'assets/static/Logo.png'
import LogoWhite from 'assets/static/LogoWhite.png'
import { SearchInput } from 'components/common/SearchInput';
import { searchLinks, useSearchState } from 'services/search';
import { useLocation, useNavigate } from 'react-router-dom';

export const SearchHeader: React.FC = () => {
    const navigate = useNavigate()
    const { search: searchParams } = useLocation()
    const { search } = useSearchState()
    
    const checkIsActive = (selector: string | undefined) => {
        return selector === searchParams.split('&')[2]?.slice(5) ? 'active' : ''
    }

    return (
        <div className="search__header">
            <div className="search__header--top">
                <img 
                    src={window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? LogoWhite : Logo} 
                    alt="" 
                    className="search__logo" 
                    onClick={() => navigate('/')} 
                />
                <SearchInput />
            </div>
            <div className="search__header--menu">
                {searchLinks.map((item) => (
                    <button 
                        className={`search__header--link ${checkIsActive(item.selector)} ${item.disabled && 'no-cursor'}`}
                        onClick={() => !item.disabled && navigate(`/search?q=${search}&page=1${item.selector && `&type=${item.selector}`}`)}
                    >
                        {item.icon}{item.title}
                    </button>
                ))}
            </div>
        </div>
    );
};
