import React from 'react';
import { Link } from 'react-scroll';

const Electrician = () => {
    return (
        <div>
            <div className='pb-28' style={{ backgroundImage: "url(https://i.ibb.co/NCQDzwT/male-electrician-works-switchboard-with-electrical-connecting-cable.jpg)", backgroundPosition: "center", backgroundSize: "cover" }}>
                {/* <img src="https://i.ibb.co/NCQDzwT/male-electrician-works-switchboard-with-electrical-connecting-cable.jpg" alt="" /> */}
                <h1 className='text-white text-4xl font-extrabold pt-28 pl-28 pb-12'>Best Electrician Service Near You</h1>
                <ul className='text-white text-xl pl-28'>
                    <li className='pb-4'>Doorstep repair within 90 mins</li>
                    <li className='pb-4'>30 day post-service guarantee</li>
                    <li className='pb-4'>Hassle free service</li>
                </ul>
            </div>


            <div>

                <h1 className='text-2xl font-bold text-blue text-center'>Select-category</h1>
                <div className='flex ElectricianServices-container'>


                    <div class="ElectricianServices-box">
                        <input type="radio" name="dot" id="one" />
                        <input type="radio" name="dot" id="two" />
                        <div class="main-card">

                            <div class="ElectricianServices-cards">

                                <div class="ElectricianServices-card">

                                    <Link to="appliance" spy={true} smooth={true} offset={50} duration={500}>  <div class="sameday-box">
                                        <div class="sameday-img-container">
                                            <div class="img-inner">
                                                <div class="sameday-inner-skew">
                                                    <img src="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt='' />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sameday-text-container">
                                            <h3>Appliance</h3>
                                        </div>
                                    </div></Link>

                                </div>

                                <div class="ElectricianServices-card">

                                    <Link to="chandelier" spy={true} smooth={true} offset={50} duration={500}>  <div class="sameday-box">
                                        <div class="sameday-img-container">
                                            <div class="img-inner">
                                                <div class="sameday-inner-skew">
                                                    <img src="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt='' />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sameday-text-container">
                                            <h3>Appliance</h3>
                                        </div>
                                    </div></Link>

                                </div>

                                <div class="ElectricianServices-card">

                                    <Link to="doorbell" spy={true} smooth={true} offset={50} duration={500}>  <div class="sameday-box">
                                        <div class="sameday-img-container">
                                            <div class="img-inner">
                                                <div class="sameday-inner-skew">
                                                    <img src="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt='' />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sameday-text-container">
                                            <h3>Appliance</h3>
                                        </div>
                                    </div></Link>

                                </div>

                                <div class="ElectricianServices-card">

                                    <Link to="fan" spy={true} smooth={true} offset={50} duration={500}>  <div class="sameday-box">
                                        <div class="sameday-img-container">
                                            <div class="img-inner">
                                                <div class="sameday-inner-skew">
                                                    <img src="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt='' />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sameday-text-container">
                                            <h3>Appliance</h3>
                                        </div>
                                    </div></Link>

                                </div>

                                <div class="ElectricianServices-card">

                                    <Link to="inverter" spy={true} smooth={true} offset={50} duration={500}>  <div class="sameday-box">
                                        <div class="sameday-img-container">
                                            <div class="img-inner">
                                                <div class="sameday-inner-skew">
                                                    <img src="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt='' />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sameday-text-container">
                                            <h3>Appliance</h3>
                                        </div>
                                    </div></Link>

                                </div>

                                <div class="ElectricianServices-card">

                                    <Link to="appliance" spy={true} smooth={true} offset={50} duration={500}>  <div class="sameday-box">
                                        <div class="sameday-img-container">
                                            <div class="img-inner">
                                                <div class="sameday-inner-skew">
                                                    <img src="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt='' />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sameday-text-container">
                                            <h3>Appliance</h3>
                                        </div>
                                    </div></Link>

                                </div>

                                <div class="ElectricianServices-card">

                                    <Link to="appliance" spy={true} smooth={true} offset={50} duration={500}>  <div class="sameday-box">
                                        <div class="sameday-img-container">
                                            <div class="img-inner">
                                                <div class="sameday-inner-skew">
                                                    <img src="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt='' />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sameday-text-container">
                                            <h3>Appliance</h3>
                                        </div>
                                    </div></Link>

                                </div>

                            </div>

                            <div class="ElectricianServices-cards">

                                <div class="ElectricianServices-card">

                                    <Link to="appliance" spy={true} smooth={true} offset={50} duration={500}>  <div class="sameday-box">
                                        <div class="sameday-img-container">
                                            <div class="img-inner">
                                                <div class="sameday-inner-skew">
                                                    <img src="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt='' />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sameday-text-container">
                                            <h3>Appliance</h3>
                                        </div>
                                    </div></Link>

                                </div>
                                <div class="ElectricianServices-card">

                                    <Link to="appliance" spy={true} smooth={true} offset={50} duration={500}>  <div class="sameday-box">
                                        <div class="sameday-img-container">
                                            <div class="img-inner">
                                                <div class="sameday-inner-skew">
                                                    <img src="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt='' />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sameday-text-container">
                                            <h3>Appliance</h3>
                                        </div>
                                    </div></Link>

                                </div>
                                <div class="ElectricianServices-card">

                                    <Link to="appliance" spy={true} smooth={true} offset={50} duration={500}>  <div class="sameday-box">
                                        <div class="sameday-img-container">
                                            <div class="img-inner">
                                                <div class="sameday-inner-skew">
                                                    <img src="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt='' />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sameday-text-container">
                                            <h3>Appliance</h3>
                                        </div>
                                    </div></Link>

                                </div>




                            </div>


                        </div>
                        <div class="button">
                            <label for="one" class=" active one"></label>
                            <label for="two" class="two"></label>
                        </div>
                    </div>


                </div>
            </div>

            <div>
                <div id='appliance'>
                    <h1 className='text-3xl font-semibold ml-16 mb-16'>Appliance</h1>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>

                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>

                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div id='chandelier'>
                    <h1 className='text-3xl font-semibold ml-16 mb-16'>Chandelier</h1>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>

                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>

                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className='text-3xl font-semibold ml-16 mb-16'>Fan</h1>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>

                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>

                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                </div>


                <div>
                    <h1 className='text-3xl font-semibold ml-16 mb-16'>Light</h1>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>

                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>

                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                </div>


                <div>
                    <h1 className='text-3xl font-semibold ml-16 mb-16'>Looking for Something else?</h1>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>

                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>

                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                </div>


                <div>
                    <h1 className='text-3xl font-semibold ml-16 mb-16'>Switch and Socket
                    </h1>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>

                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>

                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex mb-16'>
                        <div>
                            <img src="https://i.ibb.co/GFT6Gm0/geyser-installation.webp" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Geyser Installation</h1>
                            <h2 className='text-lg font-semibold mt-3 mb-1'>Lowes Price: $589</h2>
                            <ol>
                                <li className='mb-1'>Installation or uninstallation of one geyser</li>
                                <li>Procurement of spare parts (at extra cost)</li>
                            </ol>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Electrician;