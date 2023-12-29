import {useEffect, useState} from "react";

export function useIntersectionObserver(){
    const [selected, setSelected] = useState("");
    useEffect(() => {
        const sections : NodeListOf<Element> = document.querySelectorAll(".section-wrapper")
        const options :{threshold: number} ={
            threshold: 0.3
        }

        // called whenever any observer element enters or exits the viewport
        const callback = (entries:any) => {
            entries.forEach((entry: any) =>{
                if (entry.isIntersecting)
                    setSelected(entry.target.id)
            })
        }
        // it allows you to detect when an element comes into or goes out of the viewport
        const observer :  IntersectionObserver = new IntersectionObserver(callback, options);
        sections.forEach((section: any) => observer.observe(section))
    }, []);
    return selected;
}