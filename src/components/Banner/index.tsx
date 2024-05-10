import './Banner.scss'
import { MdArrowForward } from "react-icons/md";
import bannerimg from '../../assets/bannerimg.jpg'
import bannerimg2 from '../../assets/bannerimg2.png'
import ebaylogo2 from '../../assets/ebaylogo2.jpg'

const Banner = () => {
  return (
    <div className='container'>
        <div className='banner'>
            <div className='banner__list'>
                <p>Featured</p>
                <img src={ebaylogo2} alt="" />
                <h5>Deals made easy all year long.</h5>
                <p>Free shipping. Best prices.</p>
                <button>Get your thing <MdArrowForward className='banner__icon' /></button>
            </div>
            <img src={bannerimg} alt="" />
            <img src={bannerimg2} alt="" />
        </div>
    </div>
  )
}

export default Banner