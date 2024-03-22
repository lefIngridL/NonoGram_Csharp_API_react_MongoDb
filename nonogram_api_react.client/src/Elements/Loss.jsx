import React, { useState } from 'react';
import broke from '../assets/broken-heart.gif';

function Loss() {
    const [mourn, setMourn] = useState(true);

    setTimeout(() => setMourn(false), 1320);
    if (mourn) {
        return (
            <>


                <img src={broke} alt="confetti gif" width="800px" style={{ gridArea: "1/1", justifySelf: "start" }} />
            </>

        );
    }
 
}

export default Loss;