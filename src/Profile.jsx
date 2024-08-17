import { useEffect, useState } from 'react';
import banner from './Assets/BannerSoto.jpg'
import Menu from './Component/Menu';
import Contact from './Component/Contact';

const Profile = () => {
const [catchData, setCatchData] = useState('')
const [error, setError] = useState(true)
const [loading, setLoading] = useState(null)



    return(
        <div>
            <div className='flex flex-col items-center justify-center'>
            {/* Title */}
            <div className='flex flex-col h-[450px] w-full items-center mb-56'>
            <h1 className='text-7xl font-bold mb-6 mt-8 font-[Lexend]'>SOTO US<span className='text-[#594545]'>WATUN</span></h1>
            <img
                    src={banner}
                    className='object-cover h-[450px] w-[90%] rounded-xl '
                    />
                    <h2 className='relative bottom-32 right-48 font-bold text-5xl font-[Fira Sans] text-[#FFF8EA]'>Rasanya yang bikin kangen<br/> Do you think i have forgotten</h2>
                    </div>
                    <Menu />
                    <div>
                <div>
                </div>
            </div>
            {/* Contact */}
            <div className='mt-[370px] w-[90%]'>
                <Contact/>
            </div>
        </div>
    </div>
    )
}

export default Profile;