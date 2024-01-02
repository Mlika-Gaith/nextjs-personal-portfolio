import {useEffect, useState} from "react";

export function useScreenWidth (){
    const [screenWidth, setScreenWidth] =
        useState( window.innerWidth);
        useEffect(() => {
            const handleResize = () => setScreenWidth(window?.innerWidth);
            window.addEventListener('resize', handleResize);
            // console.log(screenWidth);
            return () : void => {
                window.removeEventListener('resize', handleResize);
            }
        }, []);
    return screenWidth;
}