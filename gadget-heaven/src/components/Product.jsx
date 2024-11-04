import PropTypes from 'prop-types';

const Product = ({ product }) => {
    const { product_title, product_image, price } = product
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl p-4">
                <figure>
                    <img
                        className='h-[200px] bg-cover w-full rounded-2xl'
                        src={product_image}
                        alt={product_title} />
                </figure>
                <div className=" my-3">
                    <h2 className="card-title font-bold">{product_title}</h2>
                    <p className='font-thin'>Price: ${price}</p>
                    <div className="card-actions mt-5">
                    <button class="btn btn-outline rounded-full hover:bg-[#9538E2] hover:text-white">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Product.propTypes = {

};

export default Product;