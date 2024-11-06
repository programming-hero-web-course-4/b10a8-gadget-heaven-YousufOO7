import PropTypes from 'prop-types';
import {
    BarChart,
    Bar,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart,
} from 'recharts';

const Statistics = props => {

    const productsData = [
        {
            "product_id": "1",
            "product_title": "Xphone Ultra",
            "product_image": "https://static.digit.in/Xiaomi-15.jpg",
            "category": "Smartphone",
            "price": 999.99,
            "description": "The latest Xphone with an ultra HD display and blazing-fast processor.",
            "specifications": [
                "1. 6.7-inch OLED display",
                "2. 128GB storage",
                "3. Triple 12MP rear cameras",
                "4. 5G connectivity"
            ],
            "availability": true,
            "rating": 4.5
        },
        {
            "product_id": "2",
            "product_title": "Galaxy Pro Max",
            "product_image": "https://www.androidauthority.com/wp-content/uploads/2021/02/Galaxy-S21-Ultra-vs-iPhone-12-Pro-Max-camera.jpg",
            "category": "Smartphone",
            "price": 899.99,
            "description": "High-end Galaxy Pro Max with AI-powered camera and super battery life.",
            "specifications": [
                "1. 6.9-inch Super AMOLED display",
                "2. 256GB storage",
                "3. 108MP rear camera",
                "4. 5G connectivity"
            ],
            "availability": true,
            "rating": 4.8
        },
        {
            "product_id": "3",
            "product_title": "Pixel Pro X",
            "product_image": "https://i.guim.co.uk/img/media/2f6082f5edb313aa955a3df84e140f9854b4274e/84_124_5168_3100/master/5168.jpg?width=465&dpr=1&s=none&crop=none",
            "category": "Smartphone",
            "price": 799.99,
            "description": "Google's Pixel Pro X with the latest Android OS and excellent camera features.",
            "specifications": [
                "1. 6.5-inch OLED display",
                "2. 128GB storage",
                "3. Dual 50MP rear cameras",
                "4. 5G connectivity"
            ],
            "availability": true,
            "rating": 4.6
        },
        {
            "product_id": "4",
            "product_title": "OnePlus Titanium",
            "product_image": "https://www.trustedreviews.com/wp-content/uploads/sites/54/2023/10/OnePlus-Open-3-920x690.jpg",
            "category": "Smartphone",
            "price": 749.99,
            "description": "Premium OnePlus Titanium with smooth display and high-speed performance.",
            "specifications": [
                "1. 6.55-inch Fluid AMOLED display",
                "2. 128GB storage",
                "3. 48MP main camera",
                "4. 5G connectivity"
            ],
            "availability": false,
            "rating": 4.3
        },
        {
            "product_id": "5",
            "product_title": "Moto Edge Z",
            "product_image": "https://www.notebookcheck.net/typo3temp/_processed_/4/8/csm_4_zu_3_Motorola_Edge_ca262bac1c.jpg",
            "category": "Smartphone",
            "price": 699.99,
            "description": "Moto Edge Z with immersive display and high-speed charging technology.",
            "specifications": [
                "1. 6.7-inch OLED display",
                "2. 256GB storage",
                "3. 64MP main camera",
                "4. 5G connectivity"
            ],
            "availability": true,
            "rating": 4.1
        },
        {
            "product_id": "6",
            "product_title": "Sony Xperia G",
            "product_image": "https://www.gizmochina.com/wp-content/uploads/2014/04/Xperia-G.jpg",
            "category": "Smartphone",
            "price": 649.99,
            "description": "Sony Xperia G, built for entertainment with its crisp display and advanced audio.",
            "specifications": [
                "1. 6.1-inch OLED display",
                "2. 128GB storage",
                "3. 12MP main camera",
                "4. 5G connectivity"
            ],
            "availability": false,
            "rating": 4.2
        },

        {
            "product_id": "10",
            "product_title": "ZenBook Pro Duo",
            "product_image": "https://images-cdn.ubuy.com.sa/65952c722f00ef2d7f554b3b-asus-zenbook-pro-duo-ux581-15-6-4k-uhd.jpg",
            "category": "Laptop",
            "price": 2499.99,
            "description": "High-performance laptop with dual 4K screens, built for multitasking and creative professionals.",
            "specifications": [
                "1. Intel Core i9",
                "2. 32GB RAM",
                "3. 1TB SSD",
                "4. NVIDIA RTX 2060"
            ],
            "availability": true,
            "rating": 4.7
        },
        {
            "product_id": "11",
            "product_title": "MacBook Air M2",
            "product_image": "https://images.squarespace-cdn.com/content/v1/5e949a92e17d55230cd1d44f/1ac21f98-226e-47d9-b624-bf749bbfbbff/MBAM2.png",
            "category": "Laptop",
            "price": 1199.99,
            "description": "Lightweight and powerful, equipped with the M2 chip for enhanced performance and battery life.",
            "specifications": [
                "1. Apple M2 chip",
                "2. 8GB RAM",
                "3. 512GB SSD",
                "4. Retina Display"
            ],
            "availability": false,
            "rating": 4.5
        },
        {
            "product_id": "12",
            "product_title": "SmartFit Pro",
            "product_image": "https://devicenext.com/wp-content/uploads/2022/06/Shaaimu-Fit-pro-1-smartwatch.jpg",
            "category": "Smartwatch",
            "price": 199.99,
            "description": "The SmartFit Pro is an advanced smartwatch with fitness tracking, heart rate monitoring, and a sleek, modern design.",
            "specifications": [
                "1. Heart Rate Monitor",
                "2. GPS Tracking",
                "3. Water Resistant",
                "4. Bluetooth Connectivity"
            ],
            "availability": true,
            "rating": 4.5
        },
        {
            "product_id": "13",
            "product_title": "EliteWatch 5",
            "product_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ZBibMvc31F70Twv3ZUWFAvNfFxN70lmaNwI3TYWy7aw46RiHyyAO_JA8NeK6eejpXPY&usqp=CAU",
            "category": "Smartwatch",
            "price": 249.99,
            "description": "The EliteWatch 5 combines a stylish look with powerful features like step counting, sleep tracking, and smartphone integration.",
            "specifications": [
                "1. Sleep Tracking",
                "2. Step Counter",
                "3. Voice Assistant",
                "4. AMOLED Display"
            ],
            "availability": false,
            "rating": 4.2
        }
    ]

    return (
        <div>
            <div className="hero bg-[#9538E2] pt-10 px-32 pb-5  mx-auto">
                <div className='text-center items-center'>
                    <h1 className="text-5xl font-bold text-white w-5/6 mx-auto">Statistics</h1>
                    <p className="py-6 w-4/6 mx-auto text-white opacity-70">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                </div>
            </div>
            <div className="max-w-6xl mx-auto my-5">
                <h2 className="text-4xl font-bold">Statistics</h2>

                <div className='flex justify-center my-5 card shadow-xl'>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={productsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="product_title" ></XAxis>
                            <XAxis dataKey={'category'}></XAxis>
                            <YAxis></YAxis>
                            <Tooltip></Tooltip>
                            <Legend></Legend>
                            <Bar dataKey="price" fill="#9B5DE5" ></Bar>
                            <Bar dataKey="category" fill="#D24D57" ></Bar>
                            <Line type="monotone" dataKey="rating" stroke="#FF5A5F" strokeWidth={2} dot={{ r: 5 }} ></Line>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

// 


Statistics.propTypes = {
    props: PropTypes
};

export default Statistics;