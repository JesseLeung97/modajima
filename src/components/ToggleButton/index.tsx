import { FunctionalComponent } from "preact";
import { useState, useEffect } from "preact/hooks";
import classes from "./styles.module.css";

type TToggleState = "icon_1" | "icon_2";
type THoverState = "hoverStart" | "hoverEnd";

interface ToggleButtonProps {
    className?: string,
    inputState?: TToggleState,
    toggleName: string,
    iconToggle_1: string,
    iconToggle_2?: string,
    toggleFunction: () => any
}

const ToggleButton: FunctionalComponent<ToggleButtonProps> = ({
    className,
    inputState,
    toggleName,
    iconToggle_1,
    iconToggle_2,
    toggleFunction
}) => {
    const [currentToggle, setCurrentToggle] = useState<TToggleState>(inputState ?? "icon_1");
    const [hoverState, setHoverState] = useState<THoverState>("hoverEnd");

    const flipState = () => {
        document.getElementById(`${toggleName}_icon_1`)?.animate([
            { transform: "translateY(0px)", opacity: 1, easing: "ease-out"},
            { transform: `translateY(${currentToggle === "icon_1" ? "20px" : "-20px"})`, opacity: 0, easing: "ease-out" },
            { transform: `translateY(${currentToggle === "icon_1" ? "-20px" : "20px"})`, opacity: 0, easing: "ease-out"},
            { transform: "translateY(0px)", opacity: 1, easing: "ease-out"},
        ], {duration: 350});
        toggleFunction();
        setTimeout(() => {
            setCurrentToggle(currentToggle === "icon_1" ? "icon_2": "icon_1");
        }, 175);
        
    }

    return (
        <div 
            id={`${toggleName}_icon_1`}
            class={`${className} ${classes.toggle_button_container} ${hoverState === "hoverEnd" ? classes.background_1 : classes.background_2}`}>
            <button 
                className={classes.toggle_button} 
                onClick={flipState}
                onMouseOver={() => setHoverState("hoverStart")}
                onMouseOut={() => setHoverState("hoverEnd")}>
                <img 
                    className={classes.icon} 
                    src={currentToggle === "icon_1" ? iconToggle_1 : iconToggle_2} 
                />
            </button>
        </div>
    );
}

export {
    ToggleButton
}




