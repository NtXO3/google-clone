import * as React from 'react';
import { IoApps } from 'react-icons/io5';

export const HomeHeader: React.FC<HomeHeaderProps> = () => {

    return (
        <div className="home__top--bar">
            <div className="home__top--left">
                <p className="header__link no-cursor">About</p>
                <p className="header__link no-cursor">Store</p>
            </div>
            <div className="home__top--right">
                <p className="header__link no-cursor">Gmail</p>
                <p className="header__link no-cursor">Images</p>
                <button className="header__menu--btn no-cursor">
                    <IoApps />
                </button>
                <button className="header__sign-in no-cursor">
                    Sign In
                </button>
            </div>
        </div>
    );
};

type HomeHeaderProps = {
  width?: string;
};
