import React from 'react';
import { Link } from 'react-router-dom';
import AutoSlider from './AutoSlider';

const Header = () => {
    return (
        <div className='grid grid-cols-2 gap-4 mx-auto my-auto'>
            <div className='mt-20'>
                <AutoSlider></AutoSlider>
            </div>
            <div>
                <h1 className='text-center'>
                    What are you looking for?
                </h1>
                <div>
                    <div className='flex justify-around'>

                        <Link to='/electrician'>
                            <div>
                                <img style={{ width: "100px" }} src="https://i.ibb.co/KyfHH0q/Whats-App-Image-2023-02-24-at-22-02-37.jpg" alt="" />
                                <h1>Electrician</h1>
                            </div>
                        </Link>

                        <Link to='/plumber'>
                            <div>
                                <img style={{ width: "100px" }} src="https://i.ibb.co/3sZDsv5/Whats-App-Image-2023-02-24-at-22-05-42.jpg" alt="" />
                                <h1>Plumber</h1>
                            </div>
                        </Link>

                        <Link to='/carpenter'>
                            <div>
                                <img style={{ width: "100px" }} src="https://i.ibb.co/jrD6BcM/Whats-App-Image-2023-02-24-at-22-06-35.jpg" alt="" />
                                <h1>Carpenter</h1>
                            </div>
                        </Link>

                        <Link to='/television'>
                            <div>
                                <img style={{ width: "100px" }} src="https://i.ibb.co/YpM5qyn/Whats-App-Image-2023-02-24-at-22-07-18.jpg" alt="" />
                                <h1>Television</h1>
                            </div>
                        </Link>


                    </div>


                    <div className='flex justify-around'>
                        <Link to='/carpenter'>
                            <div>
                                <img style={{ width: "100px" }} src="https://i.ibb.co/y4mWDcP/Whats-App-Image-2023-02-24-at-22-07-58.jpg" alt="" />
                                <h1>Home Deep Cleaning</h1>
                            </div>
                        </Link>

                        <Link>
                            <div>
                                <img style={{ width: "100px" }} src="https://i.ibb.co/y4mWDcP/Whats-App-Image-2023-02-24-at-22-07-58.jpg" alt="" />
                                <h1>Commercial Cleaning</h1>
                            </div>
                        </Link>

                        <Link>
                            <div>
                                <img style={{ width: "100px" }} src="https://i.ibb.co/ChQxJW3/Whats-App-Image-2023-02-24-at-22-08-46.jpg" alt="" />
                                <h1>Kitchen Clean</h1>
                            </div>
                        </Link>

                        <Link>
                            <div>
                                <img style={{ width: "100px" }} src="https://i.ibb.co/sqgHkM1/Whats-App-Image-2023-02-24-at-22-09-16.jpg" alt="" />
                                <h1>Sofa Cleaning</h1>
                            </div>
                        </Link>


                    </div>

                    <div className='flex justify-around'>
                        <Link>
                            <div>
                                <img style={{ width: "100px" }} src="https://i.ibb.co/gy4tdGs/Whats-App-Image-2023-02-24-at-22-09-45.jpg" alt="" />
                                <h1>Bathroom Cleaning</h1>
                            </div>
                        </Link>

                        <Link>
                            <div>
                                <img style={{ width: "100px" }} src="https://i.ibb.co/KyfHH0q/Whats-App-Image-2023-02-24-at-22-02-37.jpg" alt="" />
                                <h1>Disinfection</h1>
                            </div>
                        </Link>

                        <Link>
                            <div>
                                <img style={{ width: "100px" }} src="https://i.ibb.co/KyfHH0q/Whats-App-Image-2023-02-24-at-22-02-37.jpg" alt="" />
                                <h1>Pest Control</h1>
                            </div>
                        </Link>

                        <Link>
                            <div>
                                <img style={{ width: "100px" }} src="https://i.ibb.co/gy4tdGs/Whats-App-Image-2023-02-24-at-22-09-45.jpg" alt="" />
                                <h1>Air Conditioner</h1>
                            </div>
                        </Link>


                    </div>

                    <div className='flex justify-around'>
                        <Link>
                            <div>
                                <img style={{ width: "100px" }} src="https://i.ibb.co/pwJpwGr/Whats-App-Image-2023-02-24-at-22-12-13.jpg" alt="" />
                                <h1>Washing Machine</h1>
                            </div>
                        </Link>

                        <Link>
                            <div>
                                <img style={{ width: "100px" }} src="https://i.ibb.co/KyfHH0q/Whats-App-Image-2023-02-24-at-22-02-37.jpg" alt="" />
                                <h1>Geyser</h1>
                            </div>
                        </Link>

                        <Link>
                            <div>
                                <img style={{ width: "100px" }} src="https://i.ibb.co/sb7ZR1r/Whats-App-Image-2023-02-24-at-22-12-15.jpg" alt="" />
                                <h1>Refrigerator</h1>
                            </div>
                        </Link>

                        <Link>
                            <div>
                                <img style={{ width: "100px" }} src="https://i.ibb.co/QrW8g8J/Whats-App-Image-2023-02-24-at-22-12-56.jpg" alt="" />
                                <h1>Water Purifier</h1>
                            </div>
                        </Link>


                    </div>


                    <div className='flex justify-around'>
                        <Link>
                            <div>
                                <img style={{ width: "100px" }} src="https://i.ibb.co/KyfHH0q/Whats-App-Image-2023-02-24-at-22-02-37.jpg" alt="" />
                                <h1>Electrician</h1>
                            </div>
                        </Link>

                        <Link>
                            <div>
                                <img style={{ width: "100px" }} src="https://i.ibb.co/QYbbKCB/Whats-App-Image-2023-02-24-at-22-13-28.jpg" alt="" />
                                <h1>Microwave</h1>
                            </div>
                        </Link>

                        <Link>
                            <div>
                                <img style={{ width: "100px" }} src="https://i.ibb.co/FKgrt2d/Whats-App-Image-2023-02-24-at-22-13-59.jpg" alt="" />
                                <h1>Chimney</h1>
                            </div>
                        </Link>

                        <Link>
                            <div>
                                <img style={{ width: "100px" }} src="https://i.ibb.co/KNpXzVL/Whats-App-Image-2023-02-24-at-22-14-46.jpg" alt="" />
                                <h1>Air Purifier</h1>
                            </div>
                        </Link>


                    </div>


                </div>
            </div>
        </div>
    );
};

export default Header;