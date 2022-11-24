import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shard/Footer/Footer';
import Nabvar from '../../Shard/Nabvar/Nabvar';

const Main = () => {
    return (
        <div>
            <Nabvar></Nabvar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;