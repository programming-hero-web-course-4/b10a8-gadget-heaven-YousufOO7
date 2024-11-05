import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredToHeartLocal } from '../../Utility/productAddToLocal';
import Wish from '../Wish/Wish';

const WishList = props => {
    const allProduct = useLoaderData();
    const [wishes, setWishes] = useState([]);

    useEffect(() => {
        const storedWishList = getStoredToHeartLocal()
        const wishList = allProduct.filter(product => storedWishList.includes(product.product_id));
        setWishes(wishList);
    },[])
    return (
        <div className='my-5 max-w-6xl mx-auto'>
             <div className='flex justify-between items-center text-center mt-5'>
                <h3 className="text-2xl font-bold">Cart</h3>
            </div>
            {
                wishes.map((wish, idx) => <Wish key={idx} wish={wish}></Wish>)
            }
        </div>
    );
};

WishList.propTypes = {
    
};

export default WishList;