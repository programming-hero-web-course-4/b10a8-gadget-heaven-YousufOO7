import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Roots = props => {
    return (
        <div className='bg-gray-200'>
            <div className='max-w-7xl mx-auto pt-5'><Navbar></Navbar></div>
            <div className=' min-h-[calc(100vh-288px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

Roots.propTypes = {

};

export default Roots;