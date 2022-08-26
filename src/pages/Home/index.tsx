import * as React from 'react';

import { HomeFooter, HomeHeader, HomeMain } from 'components/modules/Home';
import { useSearchState } from 'services/search';

const Home: React.FC = () => {
    const { setSearch, setSearchResults } = useSearchState()

    React.useEffect(() => {
        setSearch('')
        setSearchResults(null)
    }, [])

    return (
        <div className="home__wrapper">
            <HomeHeader />
            <HomeMain />
            <HomeFooter />
        </div>
    );
};

export default Home;