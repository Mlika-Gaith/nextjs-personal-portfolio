import styles from "./dotGrid.module.css"
import anime from "animejs"
import {useScreenWidth} from "@hooks";
export const DotGrid = () => {
    const screenWidth = useScreenWidth();
    function getGridSize(){
        if (screenWidth > 786 && screenWidth <= 1024){
            return [26,24]
        }
        if (screenWidth>486 && screenWidth <= 768){
            return [24,18]
        }
        if (screenWidth <= 486){
            return [14,16]
        }
        return [26,22]
    }
    const [GRID_WIDTH, GRID_HEIGHT ] : number[] = getGridSize();
    const dots :JSX.Element[] = [];

    const handleDotClick = (e: any) =>{
        anime({
            targets: ".dot-point",
            scale:[
                {value: 1.35, easing: 'easeOutSine', duration:250},
                {value: 1, easing: 'easeInOutQuad', duration:500},
            ],
            translateY:[
                {value: -15, easing: "easeOutSine", duration: 250},
                {value: 1, easing: "easeInOutQuad", duration: 500},
            ],
            opacity:[
                {value:0.7, easing:"easeOutSine", duration:250},
                {value:0.35, easing:"easeInOutQuad", duration:500},
            ],
            delay: anime.stagger(100,{
                grid:[GRID_WIDTH, GRID_HEIGHT],
                from: e.target.dataset.index,
            })
        })
    }

    let index : number = 0;
    for (let i : number = 0; i < GRID_WIDTH; i++){
        for (let j: number = 0; j< GRID_HEIGHT; j++){
            dots.push(
                <div
                    onClick={handleDotClick}
                    className={styles.dotWrapper}
                    data-index={index}
                    key={`${i}-${j}`}
                >
                    <div className={`${styles.dot} dot-point`} data-index={{index}}/>
                </div>
            );
            index++;
        }
    }
    return (
        <div style={{gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)`}}
             className={styles.dotGrid}>
            {dots.map((dot)=>dot)}
        </div>
    );
};
