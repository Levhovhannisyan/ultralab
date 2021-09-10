import { Link } from 'react-router-dom';
import facebook from './images/Facebook.png';
import linkedin from './images/linkedin.png';
import twitter from './images/Twitter.png';



const Footer = () => {
    return (
        <div className="Footer">
            <div className="singleBlock">
                <div className="FooterLeft-Block">
                    <ul>
                        <li><Link to="/">Lorem Ipsum</Link></li>
                        <li><Link to="/">Lorem Ipsum</Link></li>
                        <li><Link to="/">Lorem Ipsum</Link></li>
                        <li><Link to="/">Lorem Ipsum</Link></li>
                    </ul>
                </div>
                <div className="FooterRight-Block">
                    <div>
                        <span>
                            Contact us
                        </span>

                        <img src={linkedin} alt="facebook" />
                        <img src={facebook} alt="facebook" />
                        <img src={twitter} alt="facebook" />
                    </div>
                    <p>© 2020. ProNow. All rights reserved.</p>
                </div>

            </div>
        </div>
    )
}

export default Footer;