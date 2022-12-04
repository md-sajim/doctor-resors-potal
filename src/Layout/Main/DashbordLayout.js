import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Nabvar from '../../Shard/Nabvar/Nabvar';

const DashbordLayout = () => {
    return (
        <div>
            <Nabvar></Nabvar>
            <div className="drawer drawer-mobile">
                <input id="deshbord-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="deshbord-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to='/dashbord'>My Appointment</Link></li>
                        <li><Link to='/dashbord/alluers'>All user</Link></li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashbordLayout;