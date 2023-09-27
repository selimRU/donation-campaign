import React, { useEffect } from 'react';
import Nav from '../Shared/Nav/Nav';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const MainLayout = () => {
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/') {
            document.title = 'donation-home'
        }
        else {
            document.title = `donation ${location.pathname.replace('/', '-')}`
        }
        if (location.state) {
            document.title = `${location.state}`
        }
    }, [location])
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