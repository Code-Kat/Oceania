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
import { useHistory } from 'react-router-dom';
import logoImg from "../logo-dolphins.jpg"

function SearchPage() {

    const [{ term }, dispatch] = useStateValue();
    const termCap = term ? (term[0].toUpperCase() + term.substring(1)): undefined;
    const history = useHistory();

    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <div className="searchPage__headerLogo" onClick={()=>history.push("/")}>
                    <img src={logoImg} />
                    <h1>ceania</h1>
                </div>
                <div className="searchPage__headerSearch">
                    <Search 
                    placeholder= {term ? term: "Search the web to clean our oceans"}
                    />
                 </div>
                <div className="searchPage__headerIcons">
                    <MenuIcon className="searchPage__headerIcon" />
                    <NotificationsIcon className="searchPage__headerIcon"/>
                    <Brightness6Icon className="searchPage__headerIcon"/>
                </div>
            </div>
            <p className="searchPage__counter">{term? (`About 1,396,236 results for ${term} (0.51 seconds)`): "Here are some great ways you can make an impact today."}</p>
            <div className="searchPage__results">
                {!term&& <Result 
                    title={`Ocean Conservancy - Action Center`}
                    website={`https://oceanconservancy.org/action-center/`}
                    description={`Join the mouvement to protect our ocean.`}
                />}
                {!term&& <Result 
                    title={`Sea Shepherd Conservation Society`}
                    website={`https://seashepherd.org/`}
                    description={`Known for obstructing whaling activities in the Southern Ocean since 2005, Sea Shepherd Conservation Society is a Washington-based marine conservation organization with direct action tactics to save the oceans.`}
                />}
                {!term&& <Result 
                    title={`The 5 Gyres Institute`}
                    website={`https://www.5gyres.org/`}
                    description={`Co-founded by husband-and-wife duo Marcus Eriksen and Anna Cummins, The 5 Gyres Institute is a non-profit organization that works for cutting plastics pollution through giving focus on primary research.`}
                />}
                {!term&& <Result 
                    title={`Oceanic Preservation Society`}
                    website={`https://www.opsociety.org/collaborate/`}
                    description={`The Colorado-based Oceanic Preservation Society focuses on promoting marine conservation and environmentalism.`}
                />}

                {term&& <Result 
                    title={`${termCap} | Amazon.com`}
                    website={`https://www.amazon.com/s?k=${term}&ref=nb_sb_noss_2`}
                    description={`Shop a wide selection of ${term} at Amazon.com. Free shipping and free returns on eligible items.`}
                />}
                {term&& <Result 
                    title={`${termCap} - Wikipedia`}
                    website={`https://en.wikipedia.org/wiki/${term}`}
                    description={`The history of ${term} is long and complex, dating back to medieval times. The first ${term} is believed to have originated in the year 1123.`}
                />}
                {term&& <Result 
                    title={`${termCap} - YouTube`}
                    website={`https://www.youtube.com/results?search_query=${term}`}
                    description={`Watch video about ${term} for free on Youtube. Upgrate to Premium to watch add-free.`}
                    />}
                {term&& <Result 
                    title={`${termCap} Health Center | ${term} Information from WebMD`}
                    website={`https://www.webmd.com/search/search_results/default.aspx?query=${term}`}
                    description={`Welcome to the new WebMD ${term} Health Center. WebMD medical experts provide comprehensive information about ${term} health care, offer advice, and andwer questions.`}
                />}
                {term&& <Result 
                    title= {`${termCap} - Home | Facebook`}
                    website={`https://www.facebook.com/search/top/?q=${term}`}
                    description= {`${termCap}, London, United Kingdom. 804286 likes · 45168 talking about this.`}
                />}
                {term&& <Result 
                    title={`r/${term} - Reddit`}
                    website={`https://www.reddit.com/r/${term}/`}
                    description= {`r/${term}: This is a subreddit dedicated to promoting discussion about the philosophy of ${term}!`}
                />}
                {term&& <Result 
                    title={`#${term} hashtag on Twitter`}
                    website={`https://twitter.com/hashtag/${term}`}
                    description={`See what people are saying about ${term} right now!`}
                />}
                {term&& <Result 
                    title={`${term} products for sale | eBay`}
                    website={`http://ebay.com/sch/i.html?_from=R40&_trksid=p2499334.m570.l1313&_nkw=${term}`}
                    description={`Get the best deals on ${term} when you shop the largest online selection at eBay.com. Free shipping on many items | Browse your ...`}
                />}
                {term&& <Result 
                    title={`#${term} hashtag on Instagram • Photos and Videos`}
                    website={`https://www.instagram.com/explore/tags/${term}`}
                    description={`118m Posts - See Instagram photos and videos from '${term}' hashtag.`}
                />}
                {term&& <Result 
                    title={`Latest News on ${termCap}`}
                    website={`https://edition.cnn.com/search?q=${term}`}
                    description={`Read the latests ${term} news on CNN.`}
                />}
                {term&& <Result 
                    title={`${termCap} - Walmart.com`}
                    website={`https://www.walmart.com/c/kp/${term}`}
                    description={`Products 1 - 29 of 29 — Shop for ${term} at Walmart.com. Save money. Live better.`}
                />}
                {term&& <Result 
                    title={`${termCap} | Fandom`}
                    website={`https://freddy-fazbears-pizza.fandom.com/wiki/Special:Search?query=${term}`}
                    description={`Read all about ${term}. Discover theories and connect with other fans!`}
                />}
              
            </div>
            <div className="searchPage__footer">
                <div className="searchPage__footerLeft">
                    <p>Privacy</p>
                    <p>Send&nbsp;feedback</p>
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
