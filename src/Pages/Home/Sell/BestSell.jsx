import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './BestSell.css'

const BestSell = () => {
    return (
        <div className="mb-20">
            <div className='border-l-4 border-[#FF3811] mb-4'>
                <div className='ml-2 space-y-2'>
                    <p className='text-[#FF3811] font-bold'>Sell Book</p>
                    <h1 className='text-4xl font-bold'>Our best selling book</h1>
                    <p className='max-w-[600px]'>In the quiet town of Ravens wood, a single thread unravels the lives of its unsuspecting residents. Shadows whispered truths that the light dared not reveal, one woman stood poised to discover them all.</p>
                </div>
            </div>
            <div className=' h-[600px]'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className='h-[550px]' src={'https://i.ibb.co/KsRZbyz/44.png'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[550px]' src={'https://i.ibb.co/hRxqT83/one.png'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[550px]' src={'https://i.ibb.co/7YsRHpS/six.png'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[550px]' src={'https://i.ibb.co/PCCxXxy/five.png'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[550px]' src={'https://i.ibb.co/mR0gXY7/four.png'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[550px]' src={'https://i.ibb.co/HGNCTwF/three.png'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[550px]' src={'https://i.ibb.co/jVGBFZq/two.png'} />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="text-center">
                <Link to='/allBook' className="font-bold border-b-4 border-[#FF3811] p-3 rounded-xl">See More</Link>
            </div>
        </div>
    );
};

export default BestSell;