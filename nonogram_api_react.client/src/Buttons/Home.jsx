
import React from 'react';
import { useEffect, useState } from 'react';
function Home({ goingHome, classy, size, still, move }) {
    const [hover, setHover] = useState(false);
    function goHome() {
        goingHome();
    }
    function animate() {
        setHover(true);
        setTimeout(() => setHover(false), 1000);
    }
    function stop() {
        setHover(false);
    }
    return (
        <button className={classy} onClick={() => goHome()} onMouseEnter={() => animate()  } onMouseLeave={() => stop() }>
            <HoverGif hover={hover} size={size} still={still} move={move } />
        </button>);
}

export function HoverGif({ hover, size, still, move }) {
    if (!hover) {
        return (
            <img src={still} alt="Home SVG" width={size+"dvh"} />
        );
    } else {
        return (
            <img src={move} alt="Home GIF" width={size + "dvh"} />
        );
}
    
}

export default Home;