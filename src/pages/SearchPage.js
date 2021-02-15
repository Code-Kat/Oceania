import React from 'react';
import "./SearchPage.css";
import { useStateValue } from "../contextAPI/StateProvider";
import Search from '../components/Search';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Result from '../components/Result';

function SearchPage() {

    const [{ term }, dispatch] = useStateValue();

    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <div className="searchPage__headerLogo">
                    <img src="http://clipartmag.com/image/dolphin-fish-drawing-5.jpg"  />
                    <h1>ceania</h1>
                </div>
                <Search className= "searchPage__headerSearch"
                    placeholder={term}
                 />
                <div className="searchPage__headerIcons">
                    <MenuIcon className="searchPage__headerIcon" />
                    <NotificationsIcon className="searchPage__headerIcon"/>
                    <Brightness6Icon className="searchPage__headerIcon"/>
                </div>
            </div>
            <div className="searchPage__results">
                {term&& <Result 
                    title={`${term} | Amazon.com`}
                    website={`https://www.amazon.com/s?k=${term}&ref=nb_sb_noss_2`}
                    description={`Shop a wide selection of ${term}s at Amazon.com. Free shipping and free returns on eligible items.`}
                />}
                {term&& <Result 
                    title={``}
                    website={``}
                    description={``}
                />}
                {term&& <Result 
                    title={``}
                    website={``}
                    description={``}
                    />}
                {term&& <Result 
                    title={``}
                    website={``}
                    description={``}
                    />}
                {term&& <Result 
                    title={``}
                    website={``}
                    description={``}
                />}
                {term&& <Result 
                    title={``}
                    website={``}
                    description={``}
                />}
                {term&& <Result 
                    title={``}
                    website={``}
                    description={``}
                />}
                {term&& <Result 
                    title={``}
                    website={``}
                    description={``}
                />}
                {term&& <Result 
                    title={``}
                    website={``}
                    description={``}
                />}
                {term&& <Result 
                    title={``}
                    website={``}
                    description={``}
                />}{term&& <Result 
                    title={``}
                    website={``}
                    description={``}
                />}{term&& <Result 
                    title={``}
                    website={``}
                    description={``}
                />}{term&& <Result 
                    title={``}
                    website={``}
                    description={``}
                />}{term&& <Result 
                    title={``}
                    website={``}
                    description={``}
                />}{term&& <Result 
                    title={``}
                    website={``}
                    description={``}
                />}{term&& <Result 
                    title={``}
                    website={``}
                    description={``}
                />}

            </div>
            <div className="searchPage__footer">
                <div className="searchPage__footerLeft">
                    <p>Privacy</p>
                    <p>Send feedback</p>
                    <p>Help</p>
                    <p>FAQ</p>
                    <p>Careers</p>
                </div>
                <div className="searchPage__footerRight">
                    <YouTubeIcon className="searchPage__footerRightIcon"/>
                    <FacebookIcon className="searchPage__footerRightIcon"/>
                    <InstagramIcon className="searchPage__footerRightIcon"/>
                    <LinkedInIcon className="searchPage__footerRightIcon"/>
                    <TwitterIcon className="searchPage__footerRightIcon"/>
                </div>

            </div>
           
        </div>
    )
}

export default SearchPage
