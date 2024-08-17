import { useState } from "react";

const Contact = () => {
    const[value, setValue] = useState('')
    const number = 6285774301300
    
    const handleClick = () => {
        const url = `https://wa.me${number}?text=${encodeURI(value)}`
        return url
    }
    
    return(
        <div className="flex flex-col items-center mb-6 p-6">
            <h1 className='text-6xl font-bold font-[Lexend] mb-6'>Contact<span className='text-[#594545]'> Us</span></h1>
            {/* Maps */}
            <div className="flex flex-row justify-around w-[80%] bg-[#FFF8EA] p-4 shadow-[3px_2px_6px_2px_#594545] rounded-xl">
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.5859601942855!2d106.81704923849318!3d-6.218307880107957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1557e660c2d%3A0xfd8f4c2647a6e9bb!2sTenda%20Biru!5e0!3m2!1sid!2sid!4v1723906015736!5m2!1sid!2sid" width="400" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="rounded-xl"></iframe>
            </div>
            <div className="flex flex-col justify-around mt-10">
                <input placeholder="Name" className="w-96 h-12 rounded-xl px-4 text-lg font-[Lexend]" />
                <input 
                placeholder="How can i help you?" 
                className="w-96 h-12 rounded-xl px-4 text-lg font-[Lexend]"
                onChange={((e) => setValue(e.target.value))}
                />
                <button className="bg-[#594545] w-24 ml-36 h-8 rounded-xl font-[Lexed] text-white shadow-[2px_1px_4px_0px_#594545]" onClick={handleClick}>Send</button>
            </div>
            </div>
        </div>
    )
}

export default Contact;