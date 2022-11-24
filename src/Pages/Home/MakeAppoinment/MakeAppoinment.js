import React from 'react';
import img from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'
import BasicButton from '../../../Utiletis/BasicButton/BasicButton';

const MakeAppoinment = () => {
    return (
        <section style={{background:`url(${appointment})`,backgroundSize:"100%"}} className=''>
            <div className="hero">
                <div className="hero-content py-0 flex-col lg:flex-row">
                    <img src={img} className="lg:max-w-xl hidden lg:block  -mt-32"  alt=''/>
                    <div>
                        <h6 className='text-secondary text-lg font-bold'>Appointment</h6>
                        <h1 className="text-4xl text-white font-samibold">Make an appointment Today</h1>
                        <p className="py-7 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <BasicButton>Get Started</BasicButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;