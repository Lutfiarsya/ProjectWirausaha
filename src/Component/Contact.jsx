import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const Contact = ({Contact}) => {
    const[chat, setChat] = useState('')
    const[name, setName] = useState('')
    const number = 6285694780538
    const mobile = useMediaQuery({maxWidth : 767})
    
    const handleClick = () => {
        const url = `https://wa.me/${number}?text= Name : ${encodeURI(name)} \n Massage: ${encodeURI(chat)}`
        window.location.href = url
    }
    
    return(
        <div className="flex flex-col items-center mb-6 p-6 max-sm:p-0" ref={Contact}>
            <h1 className='max-sm:text-4xl text-7xl font-bold font-[Lexend] mb-6'>Contact<span className='text-[#594545]'> Us</span></h1>
            {/* Maps */}
            <div className="flex max-sm:flex-col flex-row max-sm:h-[500px] justify-around max-sm:w-[95%] w-[80%] bg-[#FFF8EA] p-4 shadow-[3px_2px_6px_2px_#594545] rounded-xl">
            <div>
            {mobile ?  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.5859601942855!2d106.81704923849318!3d-6.218307880107957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1557e660c2d%3A0xfd8f4c2647a6e9bb!2sTenda%20Biru!5e0!3m2!1sid!2sid!4v1723906015736!5m2!1sid!2sid" width="300" height="200"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="rounded-xl border-solid border border-2 border-[#594545]"></iframe> :  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.5859601942855!2d106.81704923849318!3d-6.218307880107957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1557e660c2d%3A0xfd8f4c2647a6e9bb!2sTenda%20Biru!5e0!3m2!1sid!2sid!4v1723906015736!5m2!1sid!2sid" width="400" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="rounded-xl border-solid border border-2 border-[#594545]"></iframe> } 
            </div>
            <div className="flex flex-col justify-around max-sm:items-center max-sm:h-[250px] mt-10 max-sm:mt-0">
                <input 
                placeholder="Name" 
                className="w-96 max-sm:w-72 h-12 rounded-xl px-4 text-lg font-[Lexend]" 
                onChange={((e) => setName(e.target.value))}
                value={name}
                />
                <input 
                placeholder="How can i help you?" 
                className="w-96 max-sm:w-72 h-12 rounded-xl px-4 text-lg font-[Lexend]"
                onChange={((e) => setChat(e.target.value))}
                value={chat}
                />
                <button disabled={!chat.trim() && !name.trim()} className="bg-[#594545] w-24 ml-36 max-sm:ml-0 h-8 rounded-xl font-[Lexed] text-white shadow-[2px_1px_4px_0px_#594545]" onClick={handleClick}>Send</button>
            </div>
            </div>
        </div>
    )
}

export default Contact;