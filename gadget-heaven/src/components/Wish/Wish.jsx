import PropTypes from 'prop-types';
import { RxCrossCircled } from "react-icons/rx";
const Wish = ({ wish, handleRemoveWishCart }) => {
    const { product_image, product_title, description, price, product_id } = wish
    return (
        <div className='my-5 max-w-6xl mx-auto'>
            <div className={`bg-base-100 w-full shadow-xl rounded-2xl`}>
                <div className="flex justify-between items-center p-4">
                    <div className=' flex gap-4'>
                        <img className='image-container bg-cover h-[150px] rounded-2xl' src={product_image} alt="" />
                        <div className='space-y-1'>
                            <h3 className='font-semibold text-3xl'>{product_title}</h3>
                            <h3 className='text-gray-500 '>{description}</h3>
                            <h3 className='font-bold'>Price: {price}$</h3>
                        </div>
                    </div>

                    <button
                        onClick={() => handleRemoveWishCart(product_id)}
                        className=' text-red-500 rounded-full text-3xl'><RxCrossCircled></RxCrossCircled></button>
                </div>

            </div>
        </div>
    );
};

Wish.propTypes = {

};

export default Wish;