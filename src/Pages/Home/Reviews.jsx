import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { IoIosFlash } from "react-icons/io";
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <div>
            <div className='text-center space-y-2'>
                <h3 className='text-[#FF3811] font-bold'>~~~ What Our Clients Say ~~~</h3>
                <hr className='border-b-4 border-dashed w-1/6 mx-auto' />
                <h1 className='text-6xl font-bold'>Retrospection</h1>
                <hr className='border-b-4 border-dashed w-2/6 mx-auto' />
            </div>
            <div>
                <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className='m-16'>
                                <div className='flex justify-center items-center'>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                </div>
                                <p className='text-3xl flex items-center justify-center mt-4 mb-4'>
                                    <IoIosFlash className='text-[#FF3811]' />
                                </p>
                                <p className='max-w-[800px] mx-auto'>{review.details}</p>
                                <h3 className='text-2xl text-[#FF3811] text-center'>{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;