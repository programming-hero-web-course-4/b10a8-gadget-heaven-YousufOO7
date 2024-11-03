import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Roots = props => {
    return (
        <div>
            <div className='max-w-6xl mx-auto'><Navbar></Navbar></div>
            <Outlet></Outlet>
            <div className='max-w-6xl mx-auto'><Footer></Footer></div>
        </div>
    );
};

Roots.propTypes = {
    
};

export default Roots;