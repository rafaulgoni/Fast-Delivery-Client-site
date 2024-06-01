import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';
import registerImg from "../assets/loginImage/Security.jpg"
import useAuth from '../Hooks/useAuth';
import { toast } from 'react-hot-toast';

const Register = () => {
    const navigate = useNavigate()
    const {createUser, updateUserProfile, googleLogIn} = useAuth();
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [error, setError] = useState("")

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        
        if (password.length < 6) {
            setError('password must be 6 characters')
            return
        }
        if (password !== confirmPassword) {
            setError("password didn't match")
            return
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z]).{2,}$/.test(password)) {
            setError('password must use in one uppercase and lowercase')
            return
        }
        setError('')

        createUser(email, password)
            .then(() => {
                updateUserProfile(name, photo)
                    .then(() => {
                        e.target.reset()
                        toast.success('Successfully create user!')
                        navigate('/')
                    })
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGoogle = () => {
        googleLogIn()
            .then(() => {
                navigate(location?.state ? location.state : '/')
                toast.success('Successfully login user!')
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
           <Helmet>
                <title>Book Store | Register</title>
            </Helmet>
            <div className="hero container mx-auto">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center">
                        <img src={registerImg} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 animate__animated animate__backInUp">
                        <form onSubmit={handleRegister} className="card-body">
                            <h1 className="text-4xl font-bold animate__animated animate__backInLeft">Create an account</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Enter your photo url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="password"
                                        className="input input-bordered w-full"
                                        required />
                                    <samp className="absolute top-4 right-3" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </samp>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>

                                <div className="relative">
                                    <input type={showConfirmPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        placeholder="password"
                                        className="input input-bordered w-full"
                                        required />
                                    <samp className="absolute top-4 right-3" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                        {
                                            showConfirmPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </samp>
                                </div>
                                {
                                    error && <small className="text-red-800">{error}</small>
                                }
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#FF3811] font-bold">Register</button>
                            </div>
                        </form>
                        <div className="space-y-2 p-5">
                            <div className="divider">Login with social accounts</div>
                            <button onClick={handleGoogle} className="border border-blue-800 btn w-full text-blue-600 font-bold animate__animated animate__backInLeft"><img className="w-10" src={'https://i.ibb.co/F8yRqqk/google-icon-1.png'} alt="" />Continue with Google</button>
                        </div>
                        <div className="text-center p-3">
                            <p>Already have an account? <Link to='/login'><u className="font-bold text-[#FF3811]">Login</u></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;