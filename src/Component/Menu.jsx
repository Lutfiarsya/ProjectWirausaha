import data from '../data.json'
import { AnimatePresence, motion, usePresence, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { CaretRight, CaretLeft } from 'phosphor-react';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';




const Menu = ({Menu}) => {
  const mapping = data.product.main_food
  const[view,setView] = useState(false)
  const mobile = useMediaQuery({maxWidth : 767})
  const menuRef = useRef(null)

  const ScrollHorizontal = (scrollOffset) => {
    menuRef.current.scrollLeft += scrollOffset;

  }

  const {ref, inView} = useInView({
    threshold: 0.3,
  })


    return(
        <div className='w-full flex flex-col items-center'>
            <h1 className='text-7xl max-sm:text-4xl font-bold font-[Lexend]'>Our <span className='text-[#594545]'>Menu</span></h1>
            {data &&(
                <motion.div className='snap-x scroll-smooth w-[90%] grid max-sm:w-[350px] max-sm:h-[470px] z-10 max-sm:items-center max-sm:shadow-[inset_0px_2px_10px_0px_black] max-sm:rounded-xl grid-cols-4 max-sm:flex max-sm:flex-row md:gap-5 w-[90%] h-96 mt-6 max-sm:overflow-x-auto max-sm:overscroll-x-contain'
                ref={menuRef && ref}
                initial={mobile ? {} : {opacity:0 , y:-30}}
                animate={mobile ? null : inView ? {opacity:1, y:0} : {opacity:0, y:-30}}
                transition={{duration: 0.8}}
                >
                     {mapping.map((items,indexUtama) => { 
                       return(  
                         <div  className='inline-block snap-center bg-[#FFF8EA] max-sm:w-[300px] max-sm:mx-6 max-sm:px-4 shadow-[3px_2px_6px_2px_#594545] rounded-2xl h-[670px] max-sm:h-[370px] transform hover:scale-110 hover:cursor-pointer transition duration-500'>
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
                                <motion.ul className={`max-sm:grid max-sm:grid-cols-2 ${view === indexUtama ? 'bg-[#594545]' : 'bg-none'} max-sm:rounded-xl max-sm:w-[300px] max-sm:bottom-10 max-sm:right-4  max-sm:p-2 max-sm:relative max-sm:z-10`}                                                            
                                initial={mobile ? {opacity:0, y:-10} : {}}
                                animate={mobile && view === indexUtama  ? {opacity: 1, y: 0 } : mobile ? {opacity:0, y:-10} : {}}
                                transition={{duration: 0.5}}
                                >             
                                     
                                    {items.data.ingridients.map((items, index) => {
                                      return( 
                                        <div>
                                        {/* comman "view === indexUtama untuk menyamakan index diatas"  */}
                              
                                        {mobile ? (view === indexUtama &&                                          
                                         <div className='max-sm:relative max-sm:z-10' >
                                            <li  key={index} className={`ml-2 max-sm:text-sm text-md font-[Kufam] text-[#815B5B] max-sm:text-[#FFF8EA]`}>- {items}</li>
                                          </div> )
                                          :
                                          (view === indexUtama ||    
                                            <div className=''>
                                           <li  key={index} className={`ml-2 max-sm:text-sm text-md font-[Kufam] text-[#815B5B] max-sm:text-[#FFF8EA]`}>- {items}</li>
                                         </div>)
              
                                         }
                                       
                                        </div>
                                      )
                                  })}
                                  </motion.ul>
                              </div>
                            <div className='w-full absolute z-0 bottom-0 bg-[#9E7676] left-0 h-12 rounded-b-xl max-sm:z-0'>
                            <h1 className='text-white font-bold text-2xl text-center mt-2 ml-1 text-[#594545] max-sm:z-0'>Rp{items.data.Price}</h1>
                            </div>
                          </div>
                      </div>
                    )
                  })}
                </motion.div>
            )}
            {mobile ? 
              <div className='mt-8 flex flex-row justify-between items-center w-[50%] h-16'>
                <button onClick={() => ScrollHorizontal(-348)} className='bg-[#9E7676] p-4 rounded-full text-white transform transition duration-700 hover:scale-110 shadow-[2px_2px_5px_2px_#594545] hover:shadow-[4px_3px_7px_3px_#594545]'><CaretLeft size={32}  /></button>
                <button  onClick={() => ScrollHorizontal(348)} className='bg-[#9E7676] p-4 rounded-full text-white transform transition duration-700 hover:scale-110 shadow-[2px_2px_5px_2px_#594545] hover:shadow-[4px_3px_7px_3px_#594545]'><CaretRight size={32}/></button>
            </div> : null}
        </div>
    )
}

export default Menu;