import { HoverGif } from './Home.jsx';
import React from 'react';
import { useEffect, useState } from 'react';
import NextIcon from '../assets/Next.png';
import NextGif from '../assets/Next.gif';

function Next({sendNext, prog }) {
    const [hover, setHover] = useState(false);
    
    function getNext() {
        console.log(prog);
        prog++;
        console.log(prog);
        sendNext(prog);
    }
    function animate() {
        setHover(true);
        setTimeout(() => setHover(false), 1000);
    }
    function stop() {
        setHover(false);
    }
    return (
        <button className="bannerBtn" onClick={() => getNext()} onMouseEnter={() => animate()} onMouseLeave={() => stop()}>
            <HoverGif hover={hover} size="40dvh" still={NextIcon} move={NextGif} />
        </button>);
}

export default Next;