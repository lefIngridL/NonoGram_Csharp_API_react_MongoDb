import X_Icon from '../assets/XIcon.png';
import Square_Icon from '../assets/Square.png';
import Green_square from '../assets/greenSquare.png';
import White_square from '../assets/whiteSquare1.png';

function Mode({ color, cap }) {
    console.log(color);
    let modeImg;
    if (color==="blue") {
        modeImg = <img src={Green_square} alt="green square png" height="50dvw" />;
    } else {
        modeImg = <img src={White_square} alt="white Square  png" height="50dvw" />;
    }
    function capture() {
        cap();
    }
    return (
        <button className="onOffBtn1" onClick={() => capture()}>{modeImg}</button>
    )
}

export function ModeX({ cap, xModeStr, xMode }) {

    let modeImg;
    if (xMode) {
        modeImg = <img src={X_Icon } alt="X Icon png" height="50dvw"/>;
    } else {
        modeImg = <img src={Square_Icon} alt="Square Icon png" height="50dvw" />;
    }
    function capture(x) {
        cap(x);
    }
    return (
        <button className="onOffBtn2" onClick={() => capture(xMode)}>{modeImg}</button>
    )
}

export default Mode;