import confetti from '../assets/confetti.gif';
import confetti2 from '../assets/confetti.png';
import confetti3 from '../assets/party-popper-joypixels.gif';
import React, { useState } from 'react';
function Party() {
    const [hurray, setHurray] = useState(true);

    setTimeout(() => setHurray(false), 3000);
    if (hurray) {
        return (
            <>


                <img src={confetti} alt="confetti gif" width="1000px" style={{ gridArea: "1/1", justifySelf: "start" }} />
            </>

        );
    }
    //else { return <img src={confetti2} alt="confetti png" width="1000px" style={{ gridArea: "1/1", justifySelf: "start" }} /> }

}

export default Party;

//<img src={confetti2} alt="confetti gif" width="400px" style={{ gridArea: "2/2" }} />