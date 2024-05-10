import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdArrowForward } from "react-icons/md";
import './Products.scss';
import { Product } from '../../types';

const Products = () => {
  const [allProducts, setallProducts] = useState<Product[]>([])

  useEffect(() => {
    axios("https://dummyjson.com/products")
      .then(res => setallProducts(res.data.products))
  }, [])

  let products: Product[] = allProducts.slice(0, 9)
  // console.log(products)

  return (
    <div className="container">
      <div className='products__cont'>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1
            },
            320: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            1440: {
              slidesPerView: 7,
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
            products.map((product: Product) => (

              <SwiperSlide key={product?.id} className='products__slide'>
                <Link to={`/${product?.category}/${product?.id}`}>
                  <img src={!product?.images[0].includes("[") ? product?.images[0] : "https://www.fivebranches.edu/wp-content/uploads/2021/08/default-image.jpg"} alt="" />
                  <p>{product?.title}</p>
                </Link>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
      <div className='products__bottom'>
        <p>Score these trending kicks</p>
        <Link to="/">See all <MdArrowForward className='products__icon' /></Link>
      </div>
    </div>
  )
}

export default Products