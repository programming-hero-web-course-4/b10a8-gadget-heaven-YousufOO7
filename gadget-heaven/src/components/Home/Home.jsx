import PropTypes from 'prop-types';
import Banner from '../Banner/Banner';
import BannerTitle from '../BannerTitle/BannerTitle';
import Gadgets from '../Gadgets/Gadgets';
import { Outlet } from 'react-router-dom';

const Home = props => {
    return (
        <div>  
            <BannerTitle></BannerTitle>
           <Banner></Banner>
           <Gadgets></Gadgets>
        </div>
    );
};

Home.propTypes = {

};

export default Home;