import React from "react";
import './section.css'
import { FaCheck } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";

const iconTypes = {
    'check': (color)=> <FaCheck className='Icon-svg'  fill={color}/>,
    'delete': (color) => <FaX  className='Icon-svg' fill={color}/>,
};
function TodoIcon({type,color, onClick}){
    return (
        <span
            className={`icon-data icon-data-${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export {TodoIcon};