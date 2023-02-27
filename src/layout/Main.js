import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shearaed/Footer/Footer';
import Navbar from '../Shearaed/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <div className='pb-16 '>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;