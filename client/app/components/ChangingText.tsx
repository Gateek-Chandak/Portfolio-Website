'use client'

import { useState, useEffect } from "react";


const ChangingText = () => {

    const texts = ['Software Developer', 'Full-Stack Developer', 'Software Engineer']

    const [currIndex, setCurrIndex] = useState<number>(0)

    useEffect(() => {
       
        const intervalId = setInterval(() => {
          setCurrIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 850)
    
        return () => clearInterval(intervalId)
      });

    return ( 
        <h1 className='lowercase text-4xl mt-7 mb-20 bg-gradient-to-r from-gradient-left via-gradient-middle to-gradient-right text-transparent bg-clip-text'>{texts[currIndex]}.</h1>
     );
}
 
export default ChangingText;