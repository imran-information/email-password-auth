import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <div className='w-10/12 mx-auto'>
                <NavBar></NavBar>
            </div>
            <div className='min-h-[calc(100vh-290px)] w-10/12 mx-auto pt-16'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;