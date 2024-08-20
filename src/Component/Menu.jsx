import data from '../data.json'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';


const Menu = ({Menu}) => {
  const mapping = data.product.main_food
  const[view,setView] = useState(false)
  const mobile = useMediaQuery({maxWidth : 767})


    return(
        <div className='w-full flex flex-col items-center'>
            <h1 className='text-7xl max-sm:text-4xl font-bold font-[Lexend]'>Our <span className='text-[#594545]'>Menu</span></h1>
            {data &&(
                <div className='w-[90%] grid max-sm:w-[350px] max-sm:h-[470px]  max-sm:items-center max-sm:shadow-[inset_2px_2px_7px_0px_black] max-sm:rounded-xl grid-cols-4 max-sm:flex max-sm:flex-row md:gap-5 w-[90%] h-96 mt-6 max-sm:overflow-x-auto max-sm:overscroll-x-contain' ref={Menu}>
                     {mapping.map((items,indexUtama) => { 
                       return(  
                         <div className='bg-[#FFF8EA] max-sm:w-[300px] max-sm:mx-6 max-sm:px-4 shadow-[3px_2px_6px_2px_#594545] rounded-2xl h-[670px] max-sm:h-[370px] transform hover:scale-110 hover:cursor-pointer transition duration-500'>
                          <div className='bg-black w-44 h-44 m-auto my-6 max-sm:mt-6 rounded-full'> 
                            {/* <img 
                            src={items.data.Image}
                            width={50}
                            height={50}
                            /> */}
                          </div>
                          <div className='flex flex-col w-[90%]'>
                          <h1 className='font-bold text-[#594545] text-4xl ml-2 max-sm:text-xl font-[Lexend] h-16'>{items.data.name}</h1>
                          <h2 className='text-lg max-sm:text-sm z-10 font-bold ml-2 mt-6 text-[#815B5B] max-sm:hidden'>Contain:</h2>
                              <div>
                                  {/* Untuk menampilkan tombol pada mobile display */}
                                 {mobile ? <button onClick={() => setView(view === indexUtama ? null : indexUtama)} className='max-sm:relative max-sm:bottom-10 text-md max-sm:ml-2 max-sm:z-0 max-sm:relative hover:cursor-pointer'>View More</button> : null}
                                <ul className={`max-sm:grid max-sm:grid-cols-2 ${view === indexUtama ? 'bg-[#FFF8EA]' : 'bg-none'} max-sm:rounded-b-xl max-sm:w-[300px] max-sm:bottom-10 max-sm:right-4  max-sm:p-2 max-sm:relative max-sm:z-10`}>                    
                                    {items.data.ingridients.map((items, index) => {
                                      return( 
                                        <>
                                        {/* comman "view === indexUtama untuk menyamakan index diatas" */}
                                        
                                        {mobile ? (view === indexUtama &&                                          
                                         <div className='max-sm:relative max-sm:z-10'>
                                            <li key={index} className={`ml-2 max-sm:text-sm text-md font-[Kufam] text-[#815B5B] max-sm:text-[#9E7676]`}>- {items}</li>
                                          </div> )
                                          :
                                           (view === indexUtama ||    
                                         <div className=''>
                                           <li key={index} className={` ml-2 max-sm:text-sm text-md font-[Kufam] text-[#815B5B]`}>- {items}</li>
                                         </div>)
              
                                        }
                                        </>
                                      )
                                  })}
                                  </ul>
                              </div>
                            <div className='w-full absolute z-0 bottom-0 bg-[#9E7676] left-0 h-12 rounded-b-xl max-sm:z-0'>
                            <h1 className='text-white font-bold text-2xl text-center mt-2 ml-1 text-[#594545] max-sm:z-0'>Rp{items.data.Price}</h1>
                            </div>
                          </div>
                      </div>
                    )
                  })}
                </div>
            )}
        </div>
    )
}

export default Menu;