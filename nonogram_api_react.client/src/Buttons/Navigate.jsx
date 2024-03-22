import Previous from '../assets/navigate-previous-svgrepo-com.svg';
import Next from '../assets/navigate-next-svgrepo-com.svg';


function Navigate({ classy, progress, direction, sendProg, sizeFactor }) {
    var sizing = 6;
    let directionImg;
    let columnPlace;
    switch (direction) {
        case "up":
            directionImg = Next;
            columnPlace = 3;
            break;
        case "down":
            directionImg = Previous;
            columnPlace = 1;
            break;
    }
    switch (sizeFactor) {
        case 1:
            sizing *= 2;
            break;
        case 2:
            sizing *= 2.2;
            break;
        case 3:
            sizing *= 2.2;
            break;
        case 4:
            sizing *= 2.4;
            break;
    }
    const marginStyle = {
        marginTop: sizing + "dvw"
    };
    function handleClick() {
        if (direction == "up") {
            progress++;
        } else if (progress !== 0 && direction == "down") {
            progress--;
        }
        sendProg(progress);
    }

    return (
        <div style={{ gridRow: "3", gridColumn: columnPlace, display: "inline-grid", gridTemplateRows: "3fr",  } }>
            <button className={classy} onClick={() => handleClick()}>
                <img style={{height:sizing/3+"dvw"}} src={directionImg} alt={direction} />
            </button>
        </div>
        
    );
}

export default Navigate;