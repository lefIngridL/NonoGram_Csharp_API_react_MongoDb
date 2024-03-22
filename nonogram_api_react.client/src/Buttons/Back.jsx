import { HoverGif } from './Home.jsx';
import React from 'react';
import { useEffect, useState } from 'react';
import BackIcon from '../assets/navigate-previous-svgrepo-com.svg';
import BackGif from '../assets/Next.gif';

function Back({ sendBack }) {
    const [hover, setHover] = useState(false);
    function getBack() {
        sendBack();
    }
    function animate() {
        setHover(true);
        setTimeout(() => setHover(false), 1000);
    }
    function stop() {
        setHover(false);
    }
    return (
        <button className="BackBtn" onClick={() => getBack()} >  
            <img src={BackIcon } width="60dvw"/>     
        </button>);
}

export default Back;