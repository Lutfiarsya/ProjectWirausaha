import { useEffect, useState } from 'react';
import banner from './Assets/BannerSoto.jpg'
import Menu from './Component/Menu'
import Contact from './Component/Contact';
import ToppingFood from './Component/ToppingFood';



const Profile = ({Home, MenuScroll, ContactScroll}) => {

    

    return(
        <div>
            <div className='flex flex-col items-center justify-center'>
            {/* Title */}
            <div className='flex flex-col h-[450px] w-full items-center md:mb-56 max-sm:mb-0' ref={Home}>
            <h1 className='text-7xl font-bold mb-6 mt-8 font-[Lexend] max-sm:text-4xl'>SOTO US<span className='text-[#594545]'>WATUN</span></h1>
            <img
                    src={banner}
                    className='object-cover h-[450px] max-sm:h-[200px] w-[90%] rounded-xl '
                    />
                    <h2 className='relative bottom-32 right-48 max-sm:right-2 max-sm:bottom-16 font-bold text-5xl max-sm:text-xl font-[Fira Sans] text-[#FFF8EA]'>Rasanya yang bikin kangen<br/> Do you think i have forgotten</h2>
                    </div>
                <div ref={MenuScroll} className='max-sm:mt-[-80px]'>
                   <Menu />
                   <ToppingFood />
                </div>
            {/* Contact */}
            <div className='mt-[370px] max-sm:mt-24 w-[90%]' ref={ContactScroll}>
                <Contact />
            </div>
        </div>
    </div>
    )
}

export default Profile;