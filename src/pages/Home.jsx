import React, { useEffect, useState } from 'react';
import Slider from '../components/specific/Slider';
import FlipCountdown from '@rumess/react-flip-countdown';
import FlashDealCard from '../components/specific/FlashDealCard';
import axiosInstance from '../services/axiosInstance';
import {Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import GameCard from '../components/specific/GameCard';

const Home = () => {
  const [dataProductDiscount, setDataProductDiscount] = useState(null);
  const [dataProduct, setDataProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataDiscount = async () => {
      try {
        const response = await axiosInstance.get('/v1/product/discount');
        setDataProductDiscount(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    const fetchDataProduct = async () => {
      try {
        const response = await axiosInstance.get('/v1/product');
        setDataProduct(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDataDiscount();
    fetchDataProduct();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
    <div className='bg-[#D1FFD3]'>
      <Slider/>
      <div className='gap-5'>
        <div className='mx-auto max-w-7xl pt-6'>
          <div class="flex items-center gap-x-2">
            <span class="flex items-center text-xl font-bold uppercase leading-[26px] tracking-[0.2em] text-primary-400 md:text-2xl">
              F
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                class="h-6 w-6 animate-flicker text-yellow-400"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z"></path>
              </svg>
              flash Deal
              <FlipCountdown
                  size='small'
                  theme='dark' // Options (Default: dark): dark, light.
                  endAt={'2025-12-12 01:26:58'} // Date/Time
                  hideYear
                  hideMonth
                  hideDay
              />
            </span>
          </div>
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10} // Space between slides
          centeredSlides={false}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{ clickable: true }} // Pagination
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className='justify-center mx-auto '
        >
          {dataProductDiscount && dataProductDiscount.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-1 gap-4 p-4'>
                <FlashDealCard data={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    <div className='Mobile_Game mx-auto max-w-7xl px-4 py-6 sm:px-6 md:pt-8 lg:px-8'>
      <div class="pl-5 mb-2 flex items-center justify-between"><h2 class="text-lg font-bold uppercase leading-5 tracking-wider text-primary-400 md:text-xl">Mobile Game</h2></div>
      <div className='grid grid-cols-3 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-3 md:gap-2 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5 xl:gap-4'>
        {dataProduct && dataProduct.map((item,index)=>(
          <GameCard data={item} key={index}/>
        ))}
      </div>
    </div>
    </>
  
  );
};

export default Home;
