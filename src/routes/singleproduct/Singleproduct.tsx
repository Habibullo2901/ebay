import './Singleproduct.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { IoMdPricetag } from 'react-icons/io'
import { FaCaretRight } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Categoryfooter from '../../components/Categoryfooter'
import { useDispatch } from 'react-redux'
import { setProducts , setLikedProducts} from '../../redux/productSlice'
import { Product } from '../../types'

const Singleproducts = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [quantity, setQuantity] = useState<number>(1)

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const location = useParams()

  const [product, setProduct] = useState<Product>({ id: 0, title: '', description: '', price: 0, discountPercentage: 0, rating: 0, stock: 0, brand: '', category: '', thumbnail: '', images: [] })

  useEffect(() => {
    setIsLoading(true)
    axios.get(`https://dummyjson.com/products/${location.id}`)
      .then(res => setProduct(res.data))
      .finally(() => setIsLoading(false))
  }, [])

  const dispatch = useDispatch()
  const addToCart = (product : Product) => {
    dispatch(setProducts(product))
  }

  const addToWatchlist = (product : Product) => {
    dispatch(setLikedProducts(product))
  }

  console.log(isLoading)

  return (
    <>
   <div className='container'>
   <div className='singleproduct__top'>
      <p><IoMdPricetag className='singleproduct__icon--top' /> extra <span>10%</span> off 3+ items with code <span>10off2023tech</span></p>
      <Link to="/">See all eligable items and terms<FaCaretRight className='singleproduct__icon' /></Link>
    </div>
   </div>
    <div className='container container--sm'>
      <div className='singleproduct'>
        <div className='singleproduct__bottom'>
          <div className='singleproduct__imgcarousel'>
            <Swiper
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {
                product?.images?.map((image: string) => (
                  <SwiperSlide key={image}>
                    <img src={image} />
                  </SwiperSlide>
                ))
              }
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiperr"
            >
              {
                product?.images?.map((image: string) => (
                  <SwiperSlide key={image}>
                    <img src={image} />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
          <div className='singleproduct__list'>
            <h5>{product.title}</h5>
            <div className='line'></div>
            <div className='singleproduct__list--uls'>
              <ul className='singleproduct__list--ul1'>
                <li>Brand: </li>
                <li>Category</li>
                <li>Description</li>
                <li>Discount</li>
                <li>Rating</li>
                <li>Stock</li>
                <li>Quantity</li>
                <div className='line'></div>
                <li>Price: USD</li>
              </ul>

              <ul className='singleproduct__list--ul2'>
                <li>{product.brand} </li>
                <li>{product.category}</li>
                <li>{product.description}</li>
                <li>{product.discountPercentage}</li>
                <li>{product.rating}</li>
                <li>{product.stock}</li>
                <li><input onChange={(e) => setQuantity(Number(e.target.value))} value={quantity} type="number" /></li>
                <div className='line'></div>
                <li>${product.price * quantity}</li>
              </ul>
            </div>
          <div className='singleproduct__list--buttons'>
            <button>Buy It Now</button>
            <button onClick={() => addToCart(product)}>Add to cart</button>
            <button onClick={() => addToWatchlist(product)}><CiHeart className='singleproduct__icon' /> Add to Watchlist</button>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div className='container'>
    <Categoryfooter/>
    </div>
    </>
  )
}

export default Singleproducts