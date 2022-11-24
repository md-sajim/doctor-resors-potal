import React from 'react';
import cavity from '../../../assets/images/cavity.png'
import fluoride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'
import OurService from '../OurService/OurService';
import imgtratment from '../../../assets/images/treatment.png'
import BasicButton from '../../../Utiletis/BasicButton/BasicButton';

const OurServices = () => {
    const ourService = [
        { id: 1, icon: fluoride, title: "Fluorde Treatment", discri: "Fluorde Treatment Fluorde Treatment" },
        { id: 2, icon: cavity, title: "Cavity Filling", discri: "Fluorde Treatment Fluorde Treatment" },
        { id: 3, icon: whitening, title: "Whitening", discri: "Fluorde Treatment Fluorde Treatment" },
    ]
    return (
        <div className='mt-[131px]'>
            <div className='text-center'>
                <h1 className='text-2xl font-bold text-secondary'>OUR SERVICE</h1>
                <h1 className='text-4xl'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8'>
                {
                    ourService.map(service => <OurService
                        key={service.id}
                        service={service}
                    ></OurService>)
                }

            </div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='px-3'>
                        <img src={imgtratment} className="lg:max-w-lg rounded-lg shadow-2xl" alt='' />
                    </div>
                    <div className='lg:px-32'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                        <BasicButton>Get Started</BasicButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;