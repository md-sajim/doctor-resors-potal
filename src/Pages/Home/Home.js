import React from 'react';
import Banar from '../../componant/Banar/Banar';
import ContactUs from './ContactUs/ContactUs';
import MakeAppoinment from './MakeAppoinment/MakeAppoinment';
import OurServices from './OurServices/OurServices';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div className=''>
           <Banar></Banar>
           <OurServices></OurServices>
           <MakeAppoinment></MakeAppoinment>
           <Testimonial></Testimonial>
           <ContactUs></ContactUs>
        </div>
    );
};

export default Home;