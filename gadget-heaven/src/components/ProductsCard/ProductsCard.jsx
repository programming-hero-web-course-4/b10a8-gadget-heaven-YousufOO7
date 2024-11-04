import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';
import Product from '../Product';
import { useEffect, useState } from 'react';

const ProductsCard = props => {
    const data = useLoaderData();
    const { category } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (category) {
            const filterByCategory = [...data].filter(product => product.category === category)
            setProducts(filterByCategory);
        }
        else {
            setProducts(data)
        }
    }, [data, category])
    console.log(data);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                products.map((product, idx) => <Product key={idx} product={product} ></Product>)
            }
        </div>
    );
};

ProductsCard.propTypes = {

};

export default ProductsCard;