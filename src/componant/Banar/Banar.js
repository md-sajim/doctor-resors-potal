import React from 'react';
import './Banar.css'
import imgChair from '../../assets/images/chair.png'
import { FaHeadphonesAlt, FaHistory, FaLocationArrow, FaPhoenixFramework, FaPhone, FaPhoneAlt, FaPhoneSlash, FaPhoneSquare, FaPhoneVolume, FaSearchLocation, IconName } from "react-icons/fa";
import BasicButton from '../../Utiletis/BasicButton/BasicButton';

const Banar = () => {
    return (
        <div className="w-100">
            <div className="hero-content sm:mb-20 lg:mb-0 lg:h-[838px] bg-img max-w-[100%] px-0 flex-col lg:flex-row-reverse">
                <img src={imgChair} className=" rounded-lg lg:w-1/2 sm:w-100 shadow-2xl" alt='' />
                <div className='lg:p-10 sm:p-0'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <BasicButton>Get Started</BasicButton>
                </div>
            </div>
            <div className='grid   lg:grid-cols-3 md:grid-cols-1 gap-4 text-white'>
                <div className='flex p-1 h-[190px] bg-gradient-to-r from-secondary to-primary rounded-lg'>
                    <div className='lg:w-1/3 w-100 bg-slate-500 flex justify-center items-center'>

                        <FaHistory className='text-9xl ' />
                    </div>
                    <div className='lg:w-2/3 sm:w-100 flex  items-center px-5 '>
                        <div>
                            <h1 className='font-bold text-lg'>Opening Hours</h1>
                            <p>Lorem Ipsum is simply dummy text of the pri</p>
                        </div>
                    </div>
                </div>
                <div className='flex p-1 h-[190px] bg-accent rounded-lg'>
                    <div className='w-1/3 flex justify-center items-center'>

                        <FaSearchLocation className='text-9xl ' />
                    </div>
                    <div className='w-2/3 flex  items-center pr-5'>
                        <div>
                            <h1 className='font-bold text-lg'>Visit our location</h1>
                            <p>Brooklyn, NY 10036, United States</p>
                        </div>
                    </div>
                </div>
                <div className='flex p-1 h-[190px] bg-gradient-to-r from-secondary to-primary rounded-lg'>
                    <div className='w-1/3 flex justify-center items-center'>

                        <FaPhoneAlt className='text-9xl ' />
                    </div>
                    <div className='w-2/3 flex  items-center pr-5'>
                        <div>
                            <h1 className='font-bold text-lg'>Contact us now</h1>
                            <p>+000 123 456789</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banar;