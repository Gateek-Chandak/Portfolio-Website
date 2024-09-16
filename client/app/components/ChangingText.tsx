'use client'

import { useState, useEffect } from "react";


const ChangingText = () => {

    const texts = ['Software Engineer', 'Full-Stack Developer', 'Marvel Fan']

    const [currIndex, setCurrIndex] = useState<number>(0)

    useEffect(() => {
       
        const intervalId = setInterval(() => {
          setCurrIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 1500)
    
        return () => clearInterval(intervalId)
      });

    return ( 
        <h1 className='z-40 lowercase tracking-wider text-3xl sm:text-4xl mt-7 mb-7 bg-gradient-to-r from-orange-600 via-yellow-600 to-yellow-300 text-transparent bg-clip-text h-20'>{texts[currIndex]}.</h1>
     );
}
 
export default ChangingText;