import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredToCartLocal } from '../../Utility/productAddToLocal';
import Product from '../Product';
import Cart from '../Cart/Cart';

const CartList = props => {
    const allProduct = useLoaderData();
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        const storedCartList = getStoredToCartLocal();
        const cartList = allProduct.filter(product => storedCartList.includes(product.product_id));
        setCarts(cartList);
    },[])
    return (
        <div className='my-5 max-w-6xl mx-auto'>
             <div className='flex justify-between items-center text-center mt-5'>
                <h3 className="text-2xl font-bold">Cart</h3>
                <div className='flex items-center text-center gap-5'>
                    <p><b>Total Cost</b></p>
                    <button className='btn'>Sort by Price </button>
                    <button className='btn bg-[#383beebb]'>Purchase </button>
                </div>
            </div>
            {
                carts.map((cart, idx) => <Cart key={idx} cart={cart}></Cart>)
            }
        </div>
    );
};

CartList.propTypes = {
    
};

export default CartList;