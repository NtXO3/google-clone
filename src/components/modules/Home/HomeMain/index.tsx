import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from 'assets/static/Logo.png'
import LogoWhite from 'assets/static/LogoWhite.png'
import { SearchInput } from 'components/common/SearchInput';
import { formatSearchQuery, useSearchState } from 'services/search';

export const HomeMain: React.FC<HomeMainProps> = () => {
    const navigate = useNavigate()
    const { search } = useSearchState();

    return (
        <div className="home__main--wrapper">
            <img 
                src={window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? LogoWhite : Logo} 
                alt="" 
                className="home__logo" 
            />
            <SearchInput />
            <div className="home__buttons--wrapper">
                <button 
                    className="home__search--btn" 
                    onClick={() => navigate(`/search?q=${formatSearchQuery(search)}&page=1&type=all`)}
                >
                    Google Search
                </button>
                <button 
                    className="home__search--btn" 
                    onClick={() => navigate(`/search?q=${formatSearchQuery(search)}&page=1&type=all`)}
                >
                    I'm Feeling Lucky
                </button>
            </div>
        </div>
    );
};

type HomeMainProps = {
  width?: string;
};
