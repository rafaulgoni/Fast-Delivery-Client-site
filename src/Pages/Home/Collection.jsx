
import { Link } from 'react-router-dom';

const Collection = () => {
    return (
        <div className="mb-10">
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative mb-16 mt-6'>
                        <img src={'https://i.ibb.co/5hTTYjx/delivery-robot.jpg'} className="w-3/4 rounded-lg shadow-2xl" />
                        <img src={'https://i.ibb.co/SmZSvyg/Robot-Package-Delivery.webp'} className="absolute w-1/2 right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
                    </div>

                    <div className='lg:w-1/2 md:mt-20'>
                        <p className='text-xl font-bold text-[#FF3811]'>Our new Collection</p>
                        <h1 className="text-5xl font-bold">We provide robot assisted delivery in our Fast Delivery.</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or random words which do not look even slightly believable. </p>
                        <p className="py-6">the majority have suffered alteration in some form, by injected humour, or random words which don ot look even slightly believable.</p>
                        <Link to='' className="font-bold border-b-4 border-[#FF3811] p-3 rounded-xl">Order Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;