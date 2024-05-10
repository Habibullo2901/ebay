import './Categorybanner.scss'
import { useParams } from "react-router-dom"

import categorybanner1 from '../../assets/categorybanner1.jpg'
import categorybanner2 from '../../assets/categorybanner2.jpg'
import categorybanner3 from '../../assets/categorybanner3.jpg'
import categorybanner4 from '../../assets/categorybanner4.jpg'
import categorybanner5 from '../../assets/categorybanner5.jpg'
import categorybanner6 from '../../assets/categorybanner6.jpg'
import categorybanner7 from '../../assets/categorybanner7.jpg'
import categorybanner8 from '../../assets/categorybanner8.jpg'
import categorybanner9 from '../../assets/categorybanner9.webp'
import categorybanner10 from '../../assets/categorybanner10.jpg'
import categorybanner11 from '../../assets/categorybanner11.webp'
import categorybanner12 from '../../assets/categorybanner12.jpg'
import categorybanner13 from '../../assets/categorybanner13.webp'
import categorybanner14 from '../../assets/categorybanner14.jpg'
import categorybanner15 from '../../assets/categorybanner15.webp'
import categorybanner16 from '../../assets/categorybanner16.webp'
import categorybanner17 from '../../assets/categorybanner17.jpg'
import categorybanner18 from '../../assets/categorybanner18.jpg'
import categorybanner19 from '../../assets/categorybanner19.jpg'
import categorybanner20 from '../../assets/categorybanner20.jpg'


const Categorybanner = () => {
    const location = useParams()
    return (
       <div className="container container--md">
         <div className="categorybanner">
            <h4>{location.category}</h4>
            <img width={'100%'} src={location.category === 'smartphones' ? categorybanner1
                : location.category === 'laptops' ? categorybanner2
                : location.category === 'fragrances' ? categorybanner3
                : location.category === 'skincare' ? categorybanner4
                : location.category === 'groceries' ? categorybanner5
                : location.category === 'home-decoration' ? categorybanner6
                : location.category === 'furniture' ? categorybanner7
                : location.category === 'tops' ? categorybanner8
                : location.category === 'womens-dresses' ? categorybanner9
                : location.category === 'womens-shoes' ? categorybanner10
                : location.category === 'mens-shirts' ? categorybanner11
                : location.category === 'mens-shoes' ? categorybanner12
                : location.category === 'mens-watches' ? categorybanner13
                : location.category === 'womens-watches' ? categorybanner14
                : location.category === 'womens-bags' ? categorybanner15
                : location.category === 'womens-jewellery' ? categorybanner16
                : location.category === 'sunglasses' ? categorybanner17
                : location.category === 'automotive' ? categorybanner18
                : location.category === 'motorcycle' ? categorybanner19
                : categorybanner20
            } alt="" />
            <div className="categorybanner--text">
            <p>Up to 60% off</p>
            <p>Save on AirPods, iPhones, and more.</p>
            </div>
            <div className="line"></div>
        </div>
       </div>
    )
}

export default Categorybanner