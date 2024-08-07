import React from 'react';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const items = [
    {
        "title": "PUBGM X LAMBORGHINI",
        "description": "Bruuummm Lamborghini mu warna apa boss?",
        "largeImageUrl": "https://cms.vocagame.com/uploads/PUBGM_x_Lamborghini_Voca_Game_f9ba16f4f9.webp"
    },
    {
        "title": "Promo GOPAY Cashback 90% s.d 12rb All Games",
        "description": "Dapatkan Promo GOPAY Cashback 90% All Games s.d 12rb All Games. Periode 1 - 31 Juli 2024",
        "largeImageUrl": "https://cms.vocagame.com/uploads/Gopay_July_ca33c5544c.webp"
    },
    {
        "title": "Honor of Kings Global Launch",
        "description": "Nantikan Honor of Kings Global Launch pada 20 Juni 2024. Segera lakukan pre-registration sekarang juga",
        "largeImageUrl": "https://cms.vocagame.com/uploads/voca_16633f0606.webp"
    },
    {
        "title": "Belanja di VocaGame Pakai GoPay Coins!!",
        "description": "Download aplikasi GoPay terbaru dan belanja di VocaGame pakai GoPay Coins",
        "largeImageUrl": "https://cms.vocagame.com/uploads/Gopay_Coins_Payment_Banner_copy_0bd8b4e74e.webp"
    },
    {
        "title": "Fitur Save Game ID",
        "description": "Nikmatin fitur Save ID Game untuk mempermudah kamu bertransaksi.",
        "largeImageUrl": "https://cms.vocagame.com/uploads/1080p_0_99588821dc.webp"
    },
    {
        "title": "Telah Tersedia di VocaGame Black Clover",
        "description": "Bayar Pakai Gopay diskon Rp. 10.000,-",
        "largeImageUrl": "https://cms.vocagame.com/uploads/1080p_1_39be4419a6.webp"
    },
    {
        "title": "Follow Instagram VocaGame",
        "description": "Segera follow Instagram VocaGame untuk update info menarik mengenai Promo dan event lainnya",
        "largeImageUrl": "https://cms.vocagame.com/uploads/1080p_3_0ab7ab3fbd.webp"
    }
]
;

const Slider = () => {
    return (
        <div className="special-event-slider w-full ml-5 mx-auto">
          <Swiper
            modules={[Navigation, Pagination,Autoplay]}
            spaceBetween={24}
            slidesPerView="1.4"
            centeredSlides={false}
            loop={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
            className=""
          >
            {
                items.map((item,index)=>(
                    <SwiperSlide className="cursor-pointer" key={index}>
                        <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-xl outline outline-[0.5px] outline-offset-0 outline-primary-100 md:aspect-[16/7]">
                            <span style={{ position: 'absolute', inset: 0 }}>
                            <img
                                src={item.largeImageUrl}
                                alt="Black Clover"
                                className="object-cover object-center"
                                style={{ width: '100%', height: '100%' }}
                            />
                            </span>
                            <div className="absolute inset-x-0 bottom-0 ">
                            <div className="w-full bg-black/20 px-3 py-1 backdrop-blur-sm md:px-6 md:py-2 lg:space-y-1 lg:py-4">
                                <h1 className="line-clamp-1 text-sm font-semibold text-white md:text-xl lg:text-2xl">
                                {item.title}
                                </h1>
                                <p className="line-clamp-1 text-xxs text-white md:line-clamp-1 md:text-sm lg:text-lg">
                                {item.description}
                                </p>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
          </Swiper>
        </div>
      );
    }

export default Slider;
