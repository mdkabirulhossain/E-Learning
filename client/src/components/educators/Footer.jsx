import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';

const Footer = () => {
    const {navigate} = useContext(AppContext)
    return (
        <div>
            <footer className="flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-8 border-t">
                <div className='flex items-center flex-col md:flex-row gap-0 md:gap-4 mt-4'>
                    <img onClick={()=> navigate('/')} src={assets.logo1} alt="logo" className='w-28 lg:w-32 cursor-pointer' />
                    {/* <div className='hidden md:block h-7 w-px bg-gray-500/60'>

                    </div> */}
                    <p className='py-4 text-center text-xs md:text-sm text-gray-500'>
                        Copyright 2025 @ Kabirul. All Right Reserved.
                    </p>
                </div>
                <div className='flex items-center gap-3 max-md:mt-4'>
                    <a href="#">
                        <img src={assets.facebook_icon} alt="facebook_icon" />
                    </a>
                    <a href="#">
                        <img src={assets.twitter_icon} alt="twitter" />
                    </a>
                    <a href="#">
                        <img src={assets.instagram_icon} alt="instagram" />
                    </a>
                </div>

            </footer>
        </div>
    );
};

export default Footer;