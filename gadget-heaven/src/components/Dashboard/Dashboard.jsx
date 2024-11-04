import PropTypes from 'prop-types';
import { NavLink, Outlet } from 'react-router-dom';
import CartList from '../CartList/CartList';

const Dashboard = props => {
    return (
        <div>
            <div className="hero bg-[#9538E2] pt-10 px-32 pb-20  mx-auto">
                <div className='text-center items-center'>
                    <h1 className="text-5xl font-bold text-white w-5/6 mx-auto">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="py-6 w-4/6 mx-auto text-white opacity-70">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <div className='space-x-5'>
                        <NavLink  className="btn bg-white text-[#9538E2] rounded-full  font-bold">Cart</NavLink>
                        <NavLink to="/wishList" className="btn bg-white text-[#9538E2] rounded-full  font-bold">WishList</NavLink>
                    </div>
                </div>
            </div>
            <div>
                <CartList></CartList>
            </div>
        </div>
    );
};

Dashboard.propTypes = {

};

export default Dashboard;