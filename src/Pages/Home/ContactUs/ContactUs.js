import React from 'react';
import appoinment from '../../../assets/images/appointment.png';
import BasicButton from '../../../Utiletis/BasicButton/BasicButton';

const ContactUs = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url(${appoinment})` }}>
            <div className="hero-content m-0 p-0 flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full  ">
                    <div className="card-body">
                        <div className='px-5 mb-8'>
                            <h5 className='text-xl text-secondary font-bold text-center'>Coutact Us</h5>
                            <h6 className='text-4xl text-white font-normal  text-center'>Stay connected with us</h6>
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Email Address" className="input input-bordered" />
                        </div>
                        <div className="form-control my-5">
                            <input type="text" placeholder="Subject" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <textarea className="textarea text-lg h-32" placeholder="Your message"></textarea>
                        </div>
                        <div className="flex justify-center mt-6">
                           <BasicButton>Submit</BasicButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;