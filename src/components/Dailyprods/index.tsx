import './Dailyprods.scss'
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import axios from 'axios';
import { MdArrowForward } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Product } from '../../types';

const Dailyprods = () => {
  const [allProducts, setallProducts] = useState<Product[]>([])

  useEffect(() => {
    axios("https://dummyjson.com/products")
      .then(res => setallProducts(res.data.products))
  }, [])

  let products: Product[] = allProducts.slice(9, 18)
  // console.log(products)

  return (
    <div className='container'>
      <div className='dailyproducts'>
        <h4>Today's Deals - All With Free Shipping <span>See all <MdArrowForward /></span></h4>
        <div className='dailyproducts__cont'>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              320: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              1440: {
                slidesPerView: 5.5,
                spaceBetween: 25,
              }
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            loop
            modules={[Autoplay]}
            className="mySwiper"
          >
            {
              products.map((product : Product) => (
                <SwiperSlide key={product?.id} className='dailyproducts__slide'>
                  <Link to={`/${product?.category}/${product?.id}`}>
                    <img src={!product?.images[0].includes("[") ? product?.images[0] : "https://www.fivebranches.edu/wp-content/uploads/2021/08/default-image.jpg"} alt="" />
                    <p>{product?.price}$</p>
                    <p> <span>{product?.price + 120}$</span>-80%</p>
                  </Link>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Dailyprods