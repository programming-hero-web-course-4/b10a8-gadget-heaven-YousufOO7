import PropTypes from 'prop-types';

const Gadgets = props => {
    return (
        <div className='mt-[450px] mb-20'>
            <h2 className="text-5xl text-center font-bold">Explore Cutting-Edge Gadgets</h2>

            {/* Dynamic Gadget API */}
            <section className='md:flex gap-5 my-10 max-w-6xl mx-auto'>
                {/* Products Link */}
                <div className='border-2 w-[300px] rounded-2xl'>
                    <div className="card bg-base-100 shadow-xl">
                    <button class="btn bg-[#9538E2] text-white font-bold rounded-full my-2 w-[200px] mx-auto">All Products</button>
                    <button class="btn bg-[#9538E2] text-white font-bold rounded-full my-2 w-[200px] mx-auto"> Laptops</button>
                    <button class="btn bg-[#9538E2] text-white font-bold rounded-full my-2 w-[200px] mx-auto">Phones</button>
                    <button class="btn bg-[#9538E2] text-white font-bold rounded-full my-2 w-[200px] mx-auto">Computers</button>
                    <button class="btn bg-[#9538E2] text-white font-bold rounded-full my-2 w-[200px] mx-auto">Smart Watches</button>
                    <button class="btn bg-[#9538E2] text-white font-bold rounded-full my-2 w-[200px] mx-auto">Chargers</button>
                    <button class="btn bg-[#9538E2] text-white font-bold rounded-full my-2 w-[200px] mx-auto">Power Banks</button>
                    </div>
                </div>
                {/* Products API */}
                <div className='bg-yellow-600 border-2 w-full'></div>
            </section>
        </div>
    );
    
};

Gadgets.propTypes = {

};

export default Gadgets;