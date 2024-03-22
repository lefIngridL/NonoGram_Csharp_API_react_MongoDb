import React from 'react';
import { useEffect, useState } from 'react';
import replayIcon from '../assets/replay.png';
import replayGif from '../assets/replay1.gif';
import { HoverGif } from './Home.jsx'

function Replay({ rePlaying, classy, }) {
    const [hover, setHover] = useState(false);
    function goReplay() {
        rePlaying();
    }
    function animate() {
        setHover(true);
        setTimeout(() => setHover(false), 1000);
    }
    function stop() {
        setHover(false);
    }
    return (
        <button className={classy} onClick={() => goReplay()} onMouseEnter={() => animate()} onMouseLeave={() => stop()}>
            <HoverGif hover={hover} size="40dvh" still={replayIcon} move={replayGif} />
        </button>);
}

export default Replay;