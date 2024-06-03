import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRef } from 'react';

import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";


const Banner = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div className='mb-5'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper">
                <SwiperSlide>
                    <div className='carousel w-full h-[600px]'>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={'https://i.ibb.co/Jp8ngSg/221e3eb61f9eee29416bdbe61d54967b.jpg'} className="w-full" />
                            <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] t-[rgba(21, 21, 21, 0)]">
                                <div className='text-white space-y-7 lg:pl-12 lg:w-2/3'>
                                    <h1 className='text-6xl font-bold'>Why Choose our Book store</h1>
                                    <p>User-Friendly Interface: Navigate through the platform with ease, thanks to our intuitive and well-designed interface. <br />
                                        Reliable & Secure: Rest assured that your parcels are in safe hands. We prioritize security and reliability in every step of the delivery process.<br />
                                        24/7 Support: Have questions or need assistance? Our dedicated support team is available around the clock to help you with any issues.</p>
                                    <div>
                                        <form className="mb-5">
                                            <label className="input input-bordered flex items-center gap-2 max-w-sm">
                                                <input type="text" name="search" className="grow " placeholder="please search your book name" />
                                                <button className="btn btn-sm bg-[#FF3811]">Search</button>
                                            </label>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='carousel w-full h-[600px]'>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={'https://i.ibb.co/Jvgbwd5/car-sales-professionals.webp'} className="w-full" />
                            <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] t-[rgba(21, 21, 21, 0)]">
                                <div className='text-white space-y-7 lg:pl-12 lg:w-2/3'>
                                    <h1 className='text-6xl font-bold'>For Admins in our Book Store</h1>
                                    <p>Comprehensive Management: Oversee all parcel bookings and assignments with a powerful admin dashboard. Manage users, assign deliveries, and monitor the entire delivery process seamlessly. <br />
                                        Analytics & Reports: Gain insights into your delivery operations with detailed analytics and reports. Make data-driven decisions to optimize efficiency. <br />
                                        User Management: Easily manage customer and delivery personnel accounts, ensuring smooth operation and communication.</p>
                                    <div>
                                        <button className='flex items-center font-bold border-b-4 border-[#FF3811] p-3 rounded-xl'><span className='text-[#FF3811] mr-1'><IoCall/></span> Contact us</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='carousel w-full h-[600px]'>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={'https://i.ibb.co/GFZ5WrB/Our-Partners.jpg'} className="w-full" />
                            <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] t-[rgba(21, 21, 21, 0)]">
                                <div className='text-white space-y-7 lg:pl-12 lg:w-2/3'>
                                    <h1 className='text-6xl font-bold'>For Delivery Personnel in our Book Store</h1>
                                    <p>Assigned Deliveries: View and manage your assigned deliveries effortlessly. Update delivery statuses in real-time and keep track of your performance. <br />
                                        Route Optimization: Access optimized delivery routes to ensure timely and efficient deliveries. Save time and increase productivity with smart route planning.<br />
                                        Performance Tracking: Monitor your delivery history and performance metrics to stay on top of your game.</p>
                                    <div>
                                        <button className='flex items-center font-bold border-b-4 border-[#FF3811] p-3 rounded-xl'><span className='text-[#FF3811] mr-1'><FaMapMarkerAlt /></span> Live Location</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
}
export default Banner;