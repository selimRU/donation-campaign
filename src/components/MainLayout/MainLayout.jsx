import React from 'react';
import Nav from '../Shared/Nav/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <div className=' relative z-50'>
                <Nav></Nav>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;