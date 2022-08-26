import * as React from 'react';

export const HomeFooter: React.FC = () => {

    return (
        <footer>
            <div className="footer__row">
                <p className="footer__link footer__location">United States</p>
            </div>
            <div className="footer__row">
                <div className="footer__links--wrapper">
                    <p className="footer__link no-cursor">About</p>
                    <p className="footer__link no-cursor">Advertising</p>
                    <p className="footer__link no-cursor">Business</p>
                    <p className="footer__link no-cursor">How Search Works</p>
                </div>
                <div className="footer__links--wrapper">
                    <p className="footer__link no-cursor">Privacy</p>
                    <p className="footer__link no-cursor">Terms</p>
                    <p className="footer__link no-cursor">Settings</p>
                </div>
            </div>
        </footer>
    );
};
