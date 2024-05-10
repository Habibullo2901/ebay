import './Categoryfooter.scss'
import { IoInformationCircleOutline } from 'react-icons/io5'

const Categoryfooter = () => {
  return (
    <div className='container'>
        <div className='categoryfooter'>
            <ul className='categoryfooter__list'>
                <li>About eBay</li>
                <li>Announcements</li>
                <li>Community</li>
                <li>Security Center</li>
                <li>Seller Center</li>
                <li>Policies</li>
                <li>Affliates</li>
                <li>Help & Contact</li>
                <li>Site Map</li>
            </ul>
            <p className='categoryfooter__copyright'>Copyright © 1995-2023 eBay Inc. All Rights Reserved. <span>Accessibility, User Agreement, Privacy, Payments Terms of Use, Cookies, Your Privacy Choices</span> and <span>AdChoice</span> <IoInformationCircleOutline/></p>
        </div>
    </div>
  )
}

export default Categoryfooter