import './footer.css';
import FacebookLogo from './logos/facebook.svg';
import LinkedinLogo from './logos/linkedin.svg';
import TwitterLogo from './logos/twitter.svg';
import InstagramLogo from './logos/instagram.svg';

function footer() {
    return(
        <div className="footer">
            <div className="footer__top">
                <div>
                    <h2>Autoria</h2>
                    <p>Best car shop</p>
                </div>
                
                <img alt="logo" className="logo" src="https://dec-mkt.imgix.net/font-awesome_4-7-0_car_256_0_ffffff_none.png?v=1595523505&auto=format,compress"/>
                <div className="social-media">
                    <img alt="fb-logo" src={FacebookLogo}/>
                    <img alt="twitter-logo" src={TwitterLogo}/>
                    <img alt="linkedin-logo" src={LinkedinLogo}/>
                    <img alt="inst-logo" src={InstagramLogo}/>
                </div>
            </div>
            <div className="my-separator"/>
            <p className="copyright">2022 Copyright. All rights reserved</p>
        </div>
    )
}

export default footer;