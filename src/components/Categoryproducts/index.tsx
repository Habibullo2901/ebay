import './Categoryproducts.scss'
import { useEffect, useState } from "react"
import axios from "axios"
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setLikedProducts } from '../../redux/productSlice'
import { Product } from '../../types';

const Categoryproducts = () => {
    const dispatch = useDispatch()
    const addToWatchlist = (product: Product) => {
        dispatch(setLikedProducts(product))
    }

    const location = useParams()
    // console.log(location)

    const [productss, setProductss] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        setIsLoading(true)
        axios.get(`https://dummyjson.com/products/category/${location.category}`)
            .then(res => setProductss(res.data.products))
            .finally(() => setIsLoading(false))
    }, [location.pathname])

    console.log(productss)

    return (
        <div className='container container--md'>
            <div className='categoryproducts'>
                {
                    isLoading ? <div className="loader"></div> :
                        productss.map((product : Product) => (
                            <div key={product.id}>
                              <Link to={`${product.id}`}>
                                <div className='categoryproduct' key={product.id}>
                                  <img src={product.images[0]} alt="" />
                                  <p>{product.description}</p>
                                  <div className='categoryproducts__rating'><FaStar className='categoryproducts__icon--star' /><FaStar className='categoryproducts__icon--star' /><FaStar className='categoryproducts__icon--star' /><FaStar className='categoryproducts__icon--star' /><FaStar className='categoryproducts__icon--star' /> <p>{product.rating}</p></div>
                                  <div className='categoryproducts__list'>
                                    <p>${product.price}</p>
                                    <p>Was: $<span>{product.price * 2}</span></p>
                                  </div>
                                  <div className='categoryproducts__sponsored'>
                                    <p>sponsored</p>
                                  </div>
                                </div>
                              </Link>
                              <div className='categoryproducts__sponsored'>
                                <p></p>
                                <FaHeart onClick={() => addToWatchlist(product)} className='categoryproducts__icon' />
                              </div>
                            </div>
                        ))
                }
            </div>
            <div className='line'></div>
        </div>
    )
}

export default Categoryproducts