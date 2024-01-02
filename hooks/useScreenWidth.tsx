import {useEffect, useState} from "react";

export function useScreenWidth (){
    if (typeof window !== "undefined"){
        const [screenWidth, setScreenWidth] = useState(window.innerWidth)
        useEffect(() => {
            const handleResize = () => setScreenWidth(window?.innerWidth);
            window.addEventListener('resize', handleResize);
            console.log( typeof window.innerWidth);
            console.log(screenWidth);
            return () : void => {
                window.removeEventListener('resize', handleResize);
            }
        }, []);
        return screenWidth;
    }
}