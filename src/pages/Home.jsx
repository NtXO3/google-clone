import React from 'react';
import '../App.css'
import { Link } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@material-ui/core'
import Logo from '../Assets/Google Logo.png'
import Search from '../components/Search';

const Home = () => {
    return (
        <div className='home'>
            <header className="home__header">
                <div className="home__header--left">
                    <Link to='/about' className='home__header--link'>Over</Link>
                    <Link to='/store' className='home__header--link'>Store</Link>
                </div>
                <div className="home__header--right">
                    <Link to='/gmail' className='home__header--link'>Gmail</Link>
                    <Link to='/images' className='home__header--link'>Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </header>
            <main className="home__body">
                <img src={Logo} alt="" className='home__logo'/>
                <Search />
            </main>
        </div> 
    );
}

export default Home;
