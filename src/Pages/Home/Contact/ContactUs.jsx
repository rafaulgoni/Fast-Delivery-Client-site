import './ContactUs.css'
import CountUp from 'react-countup';
import { MdBookmarkAdded } from "react-icons/md";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { useEffect, useState } from 'react';

const ContactUs = () => {

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://b9a12-server-side-rafaulgoni.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [])

    const [book, setBook] = useState([])
    useEffect(() => {
        fetch('https://b9a12-server-side-rafaulgoni.vercel.app/booking?BookingStatus=Deliver')
            .then(res => res.json())
            .then(data => {
                setBook(data)
            })
    }, [])

    const [myDelivery, setMyDelivery] = useState([])
    useEffect(() => {
        fetch('https://b9a12-server-side-rafaulgoni.vercel.app/booking?BookingStatus=On The Way')
            .then(res => res.json())
            .then(data => {
                setMyDelivery(data)
            })
    }, [])

    return (
        <div className="contact mb-20 md:p-10 text-white bg-fixed">
            <div className='md:py-8 md:px-16 bg-slate-500 bg-opacity-40'>
                <div className="lg:px-28 md:pb-4 mx-auto">
                    <div className='text-center space-y-3'>
                        <h3 className='text-[#FF3811] font-bold'>~~~ Our app details ~~~</h3>
                        <hr className='border-b-4 border-dashed md:w-1/6 mx-auto' />
                        <h1 className='text-6xl font-bold text-white'>All Count</h1>
                        <hr className='border-b-4 border-dashed md:w-2/6 mx-auto' />
                    </div>
                    <div className=" grid md:grid-cols-3 lg:grid-cols-3 md:space-x-10">
                        <div>
                            <CountUp start={0} end={myDelivery.length}>
                                {({ countUpRef, start }) => (
                                    <div className='grid space-y-2 text-center'>
                                        <div className='p-3 rounded-xl'>
                                            <p className='text-5xl flex justify-center text-[#FF3811]'><MdBookmarkAdded /></p>
                                            <p className=' text-3xl font-bold'>Booked Oder</p>
                                            <p>The Total Number of Parcels Booked refers to the count of parcels registered for delivery by a courier service within a given time frame.</p>
                                            <button className='font-bold text-5xl text-[#FF3811]' ref={countUpRef} />
                                        </div>
                                        <button onClick={start} className='font-bold btn btn-sm border-none bg-[#FF3811] rounded-xl'>Start</button>
                                    </div>
                                )}
                            </CountUp>
                        </div>
                        <div>
                            <CountUp start={0} end={book.length}>
                                {({ countUpRef, start }) => (
                                    <div className='grid space-y-2 text-center'>
                                        <div className='lg:p-3 rounded-xl'>
                                            <p className='text-5xl flex justify-center text-[#FF3811]'><AiOutlineDeliveredProcedure/></p>
                                            <p className=' text-3xl font-bold'>Delivered Done</p>
                                            <p>The Total Number of Parcels Delivered refers to the count of parcels registered for delivery by a courier service a given time</p>
                                            <button className='font-bold text-5xl text-[#FF3811]' ref={countUpRef} />
                                        </div>
                                        <button onClick={start} className='font-bold btn btn-sm border-none bg-[#FF3811] rounded-xl'>Start</button>
                                    </div>
                                )}
                            </CountUp>
                        </div>
                        <div>
                            <CountUp start={0} end={users.length}>
                                {({ countUpRef, start }) => (
                                    <div className='grid space-y-2 text-center'>
                                        <div className='p-3 rounded-xl'>
                                            <p className='text-5xl flex justify-center text-[#FF3811]'><FaUsers /></p>
                                            <p className=' text-3xl font-bold'>Users</p>
                                            <p> Total Number of People Using in our app the count of parcels registered courier service within a given time frame.</p>
                                            <button className='font-bold text-5xl text-[#FF3811]' ref={countUpRef} />
                                        </div>
                                        <button onClick={start} className='font-bold btn btn-sm border-none bg-[#FF3811] rounded-xl'>Start</button>
                                    </div>
                                )}
                            </CountUp>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;