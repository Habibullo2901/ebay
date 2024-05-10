import './Hero.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import phone1 from '../../assets/iphone.png'
import phone2 from '../../assets/iphonxss.avif'
import phone3 from '../../assets/samsung.png'
import { IoArrowForward } from "react-icons/io5";
import hero1 from '../../assets/hero44.png'
import hero2 from '../../assets/hero2.png'
import hero3 from '../../assets/hero3.png'
import fragrances1 from '../../assets/fragrances1.png'
import fragrances2 from '../../assets/fragrances2.png'
import fragrances3 from '../../assets/fragrances3.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

const Hero = () => {

    // console.log(play)

    const [categories, setCategories] = useState<string[]>([])

    useEffect(() => {
        axios("https://dummyjson.com/products/categories")
            .then(res => setCategories(res.data))
    }, [])

    // console.log(play)

    return (
        <>
            <div className='container'>
                <ul className='categories'>
                    {categories.map(category => <Link to={`/${category}`} key={category}><li>{category}</li></Link>)}
                </ul>
            </div>
            <div className='container container--lg'>
                <div className='hero__banners'>
                    <Swiper
                        slidesPerView={2.5}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2.7,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 1,
                                spaceBetween: 50,
                            },
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide className='swiper__card'>
                            <div onClick={() => window.location.href = '/smartphones'} className='hero__banner'>
                                <div className='hero__banner--text'>
                                    <h3>Super savings at the Brand Outlet</h3>
                                    <p>Up to 60% off the brands you love.</p>
                                    <button className='hero__list--btn'>Shop now    <IoArrowForward className='hero__icon' /></button>
                                </div>
                                <div className='hero__images'>
                                    <img src={phone1} alt="" />
                                    <img src={phone2} alt="" />
                                    <img src={phone3} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='swiper__card'>
                            <div onClick={() => window.location.href = '/laptops'} className=' hero__banner--laptop hero__banner'>
                                <div className='hero__banner--text'>
                                    <h3>Super savings at the Brand Outlet</h3>
                                    <p>Up to 60% off the brands you love.</p>
                                    <button className='hero__list--btn'>Shop now    <IoArrowForward className='hero__icon' /></button>
                                </div>
                                <div className='hero__images'>
                                    <img src={hero1} alt="" />
                                    <img src={hero2} alt="" />
                                    <img src={hero3} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='swiper__card'>
                            <div onClick={() => window.location.href = '/fragrances'} className='hero__banner hero__banner--fragrances'>
                                <div className='hero__banner--text'>
                                    <h3>Super savings at the Brand Outlet</h3>
                                    <p>Up to 60% off the brands you love.</p>
                                    <button className='hero__list--btn'>Shop now    <IoArrowForward className='hero__icon' /></button>
                                </div>
                                <div className='hero__images'>
                                    <img src={fragrances1} alt="" />
                                    <img src={fragrances2} alt="" />
                                    <img src={fragrances3} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div >
            </div >
        </>
    )
}

export default Hero
