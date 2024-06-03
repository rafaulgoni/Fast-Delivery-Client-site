import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className="container mx-auto contact text-white mb-20 md:p-10 bg-fixed">
            <div className='py-8 px-16 bg-slate-500 bg-opacity-40'>
                <div className=' md:ml-10'>
                    <div className="">
                        <div className=" border-b-2 border-[#FF3811] p-4 space-y-3">
                            <div className="lg:px-28 pb-4 mx-auto">
                                <h1 data-aos="zoom-in-down" data-aos-delay="500" className="border-l-2 border-[#FF3811] rounded-full text-5xl font-extrabold">Contact Us</h1>
                                <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
                                    <input data-aos="zoom-in-down" data-aos-delay="1000" className=" p-4 border w-full rounded-lg" type="text" placeholder="name" />
                                    <input data-aos="zoom-in-down" data-aos-delay="1500" className=" p-4 border w-full rounded-lg" type="email" placeholder="email" />
                                    <input data-aos="zoom-in-down" data-aos-delay="2000" className=" p-4 border w-full rounded-lg" type="number" placeholder="number" />
                                    <input data-aos="zoom-in" data-aos-delay="2500" type="submit" className="border w-full rounded-lg  bg-[#FF3811] border-none font-bold" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;