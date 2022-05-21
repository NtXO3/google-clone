import React from 'react';
import '../App.css'
import Search from '../components/Search';
import { useStateValue } from '../StateProvider';
import Logo from '../Assets/Google Logo.png'
import useGoogleSearch from '../useGoogleSearch';
import Response from '../response';
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { 
    Description as DescriptionIcon, 
    ImageRounded as ImageIcon,
    LocalOfferRounded as LocalOfferIcon,
    LocationOn as MapsIcon,
    MoreVert as MoreVertIcon
} from '@mui/icons-material';
import SearchResult from '../components/SearchResult';

const SearchResults = () => {
    const [{ term='tesla' }, dispatch] = useStateValue()
    const { data } = useGoogleSearch(term) // LIVE API CALL

    // const data = Response
    return (
        <div className='search-page'>
            <header className="search-page__header">
                <Link to='/'>
                    <img src={Logo} alt="" className="search-page__logo" />
                </Link>
                <div className="search-page__header--body">
                    <Search hideButtons/>
                    <div className="search-page__options">
                        <div className="search-page__options--left">
                            <div className="search-page__option no-cursor">
                                <SearchIcon />
                                <Link to='/' className='no-cursor'>All</Link>
                            </div>
                            <div className="search-page__option no-cursor">
                                <DescriptionIcon />
                                <Link to='/' className='no-cursor'>News</Link>
                            </div>
                            <div className="search-page__option no-cursor">
                                <ImageIcon />
                                <Link to='/' className='no-cursor'>Images</Link>
                            </div>
                            <div className="search-page__option no-cursor">
                                <LocalOfferIcon />
                                <Link to='/' className='no-cursor'>Shopping</Link>
                            </div>
                            <div className="search-page__option no-cursor">
                                <MapsIcon />
                                <Link to='/' className='no-cursor'>Maps</Link>
                            </div>
                            <div className="search-page__option no-cursor">
                                <MoreVertIcon />
                                <Link to='/' className='no-cursor'>More</Link>
                            </div>
                        </div>

                        <div className="search-page__options--right">
                            <div className="search-page__option no-cursor">
                                <Link to='/' className='no-cursor'>Settings</Link>
                            </div>
                            <div className="search-page__option no-cursor">
                                <Link to='/' className='no-cursor'>Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
                {
                    term && 
                    <main className="search-page__results">
                        <p className="search-page__result--count">
                            About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                        </p>
                        {
                            data?.items.map(item => <SearchResult key={item.key} item={item} />)
                        }
                    </main>
                }
        </div>
    );
}

export default SearchResults;
