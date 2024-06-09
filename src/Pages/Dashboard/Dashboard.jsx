import wave from "../../assets/dashImage/wave.svg"
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Dashboard = () => {
    return (
        <div className="max-h-full">
            <Helmet>
                <title>Fast Delivery | Dashboard</title>
            </Helmet>
            <div className="relative">
                <div className="text-center md:pt-96">
                    <h1 className=" text-6xl font-bold">Welcome to our <samp className="font-extrabold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">Fast Delivery</samp></h1>
                    <p className=" lg:w-96 mx-auto text-black">Get your order delivered at lightning speed! Fast, reliable, and on-time delivery, every time</p>
                    <div className=" space-x-4 space-y-4">
                        <Link to='/' className="relative inline-block px-4 py-2 font-medium group">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#FF3811]"></span>
                            <span className="relative text-black group-hover:text-white">Back to Home</span>
                        </Link>
                        <Link to='/dashboard/myProfile' className="relative inline-block px-4 py-2 font-medium group">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#FF3811]"></span>
                            <span className="relative text-black group-hover:text-white">My Profile</span>
                        </Link>
                    </div>
                </div>
                <img className="absolute w-full md:top-[670px] lg:top-[750px]" src={wave} alt="" />
            </div>
        </div>
    );
};

export default Dashboard;