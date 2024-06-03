import { FaLongArrowAltRight } from "react-icons/fa";


const Featured = () => {
    return (
        <div className="mb-16">
            <div className='border-l-4 border-[#FF3811] mb-4'>
                <div className='ml-2 space-y-2'>
                    <p className='text-[#FF3811] font-bold'>About Us</p>
                    <h1 className='text-4xl font-bold'>Why Choose us</h1>
                    <p className='max-w-[600px]'>In the quiet town of Ravens wood, a single thread unravels the lives of its unsuspecting residents.</p>
                </div>
            </div>
            <section className=" dark:bg-gray-100 dark:text-gray-800">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src={'https://i.ibb.co/jZ8tRMc/pngtree-fast-delivery-5.png'} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                            <span className="text-xs uppercase text-[#FF3811]">Fast delivery</span>
                            <h3 className="text-3xl font-bold">Why Choose our Fast Delivery</h3>
                            <p className="my-6 dark:text-gray-600"><span className="font-bold">User-Friendly Interface:</span> Navigate through the platform with ease, thanks to our intuitive and well-designed interface. <br />
                                <span className="font-bold">Reliable & Secure:</span> Rest assured that your parcels are in safe hands. We prioritize security and reliability in every step of the delivery process.<br />
                                <span className="font-bold">24/7 Support:</span> Have questions or need assistance? Our dedicated support team is available around the clock to help you with any issues.</p>
                            <button type="button" className="flex items-center justify-center font-bold border-b-4 border-[#FF3811] p-3 rounded-xl"><span className="mr-1">See more</span> <FaLongArrowAltRight /></button>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src="https://i.ibb.co/0jFfcZ0/delivery-problems-rc.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                            <span className="text-xs uppercase text-[#FF3811]">Fast delivery</span>
                            <h3 className="text-3xl font-bold">For Delivery Personnel in our Fast Delivery</h3>
                            <p><span className="font-bold">Assigned Deliveries:</span> View and manage your assigned deliveries effortlessly. Update delivery statuses in real-time and keep track of your performance. <br />
                                <span className="font-bold">Route Optimization:</span> Access optimized delivery routes to ensure timely and efficient deliveries. Save time and increase productivity with smart route planning.<br />
                                <span className="font-bold">Performance Tracking:</span> Monitor your delivery history and performance metrics to stay on top of your game.</p>
                            <button type="button" className="flex items-center justify-center font-bold border-b-4 border-[#FF3811] p-3 rounded-xl"><span className="mr-1">See more</span> <FaLongArrowAltRight /></button>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src="https://i.ibb.co/Fb3H8p2/360.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                            <span className="text-xs uppercase text-[#FF3811]">Fast delivery</span>
                            <h3 className="text-3xl font-bold">For Admins in our Fast Delivery</h3>
                            <p className="my-6 dark:text-gray-600"><span className="font-bold"><span className="font-bold"></span></span> Oversee all parcel bookings and assignments with a powerful admin dashboard. Manage users, assign deliveries, and monitor the entire delivery process seamlessly. <br />
                                <span className="font-bold">Analytics & Reports:</span> Gain insights into your delivery operations with detailed analytics and reports. Make data-driven decisions to optimize efficiency. <br />
                                <span className="font-bold">User Management:</span> Easily manage customer and delivery personnel accounts, ensuring smooth operation and communication.</p>
                            <button type="button" className="flex items-center justify-center font-bold border-b-4 border-[#FF3811] p-3 rounded-xl"><span className="mr-1">See more</span> <FaLongArrowAltRight /></button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Featured;