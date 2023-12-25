import {FC, ReactNode} from "react";
import {useRef, useEffect} from "react";
import {useAnimation, useInView, motion} from "framer-motion";

type Props ={
    children: ReactNode,
    width?: "fit-content" | "100%"
}

export const Reveal: FC<Props>= ({children, width="fit-content"}) => {
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    const ref = useRef(null);
    // detects if provided element is within the viewport
    const isInView = useInView(ref,{once: true})

    useEffect(()=>{
        if (isInView){
            slideControls.start("visible")
            mainControls.start("visible");
        }else{
            slideControls.start("hidden");
            mainControls.start("hidden");
        }
    })

    return (
        <div ref={ref} style={{position:'relative', width, overflow:'hidden'}}>
            <motion.div
            variants={{
                hidden : {opacity: 0, y:75},
                visible : {opacity: 1, y:0}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay:0.25}}>
                {children}
            </motion.div>
            <motion.div
            variants={{
                hidden:{left: 0},
                visible:{left: '100%'}
            }}
            animate={slideControls}
            transition={{duration: 0.5, ease:"easeIn"}}
            className="absolute top-[4] bottom-[4] left-0 right-0 bg-brand z-20"/>
        </div>
    );
};
