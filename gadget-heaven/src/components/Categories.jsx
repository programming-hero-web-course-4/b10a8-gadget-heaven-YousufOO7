import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Categories.css';

const Categories = ({ categories }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <NavLink  className={({isActive}) => `btn  ${isActive ? 'active' : ''} font-bold rounded-full my-2 w-[200px] mx-auto`}>All Products</NavLink>
                {
                    categories.map(category => <NavLink key={category.category} to={`/category/${category.category}`} className={({isActive}) => ` btn ${isActive ? ' active' : ''} font-bold rounded-full my-2 w-[200px] mx-auto`}>
                        {category.category}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

Categories.propTypes = {

};

export default Categories;