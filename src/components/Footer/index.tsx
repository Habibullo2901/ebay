import './Footer.scss'
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { IoInformationCircleOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='container'>
        <div className='footer'>
            <div className='footer__lists'>
                <ul className='footer__list'>
                    <li><span>Buy</span></li>
                    <li>Registration</li>
                    <li>eBay Money Back Guarantee</li>
                    <li>Bidding & buying help</li>
                    <li>Stores</li>
                    <li>eBay for Charity</li>
                    <li>Charity Shop</li>
                    <li>Seasonal Sales and events</li>
                </ul>
                <ul className='footer__list'>
                    <li><span>Sell</span></li>
                    <li>Start selling</li>
                    <li>How to sell</li>
                    <li>Business sellers</li>
                    <li>Affiliates</li>
                    <li><span>Tools & apps</span></li>
                    <li>Developers</li>
                    <li>Security center</li>
                    <li>Site map</li>
                </ul>
                <ul className='footer__list'>
                    <li><span>Stay connected</span></li>
                    <li><AiFillFacebook className='footer__icon'/>Facebook</li>
                    <li><AiFillTwitterSquare className='footer__icon'/> Twitter</li>
                </ul>
                <ul className='footer__list'>
                    <li><span>About eBay</span></li>
                    <li>Company info</li>
                    <li>News</li>
                    <li>Investors</li>
                    <li>Careers</li>
                    <li>Diversity & Inclusion</li>
                    <li>Global Impact</li>
                    <li>Government relations</li>
                    <li>Advertise with us</li>
                    <li>Policies</li>
                    <li>Verified Rights Owner (VeRO) Program</li>
                    <li>eCl Licenses</li>
                </ul>
                <ul className='footer__list'>
                    <li><span>Help & Contact</span></li>
                    <li>Seller Us</li>
                    <li>Contact us</li>
                    <li>eBay Returns</li>
                    <li><span>Community</span></li>
                    <li>Announcements</li>
                    <li>eBay Community</li>
                    <li>eBay for Business Podcast</li>
                    <li><span>eBay Sites</span></li>
                </ul>
            </div>
            <p>Copyright © 1995-2023 eBay Inc. All Rights Reserved. <span>Accessibility, User Agreement, Privacy, Payments Terms of Use, Cookies, Your Privacy Choices</span> and <span>AdChoice</span> <IoInformationCircleOutline/></p>
        </div>
    </div>
  )
}

export default Footer