'use client'

import { useState, useEffect } from "react";


const ChangingText = () => {

    const texts = ['Software Developer', 'Full-Stack Developer', 'Golfer', 'Software Engineer', 'Marvel Fan']

    const [currIndex, setCurrIndex] = useState<number>(0)

    useEffect(() => {
       
        const intervalId = setInterval(() => {
          setCurrIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 850)
    
        return () => clearInterval(intervalId)
      });

    return ( 
        <h1 className='lowercase tracking-wider text-3xl sm:text-4xl mt-7 mb-7 bg-gradient-to-r from-orange-600 via-yellow-600 to-yellow-300 text-transparent bg-clip-text h-20'>{texts[currIndex]}.</h1>
     );
}
 
export default ChangingText;