import { useEffect, useState } from 'react';
function Box({ mode, id, color, fun, FunEx, sendBox, sendBox2, startBox, Xor, sizeFactor, grid, game }) {
    const [btnValue, setBtnValue] = useState();
    const [colour, setColor] = useState(color);
    const [classColor, setClassColor] = useState("square");
    const [modeX, setModeX] = useState(Xor);
    const [activeGame, setActiveGame] = useState(game);
    const [blackX, setBlackX] = useState(false);

    let CooY;
    let CooX;
    useEffect(() => {

        if (id[2] == "y" && id.length < 5) {
            CooX = id[1];
            CooY = id[3];
        } else if (id[2] == "y" && id.length === 5) {
            CooX = id[1];
            CooY = id.substring(3, 5);
        } else if (id[3] === "y" && id.length === 5) {
            CooX = id.substring(1, 3);
            CooY = id[4];
        } else if (id.length === 6) {
            CooX = id.substring(1, 3);
            CooY = id.substring(4, 6);
        }
        if (grid[CooY][CooX] === 2) {
            console.log("X X baby");
            setClassColor("squareX")
            setBlackX(true);
            //console.log(grid);
        } else {
            setBlackX(false);
            setClassColor("square");
        }
    }, [id, grid])

    function funhandle1() {

        console.log(grid);
        console.log(game);
        let redX = XYdata(id, grid, game, Xor, color);
        console.log("RED X VALUE from funhandle1: " + redX);

        let newclass;
        if (color != "white") {
            newclass = color + "Square";
        } else { newclass = "square"; }
        if (Xor && redX) {
            setClassColor("redSquareX");
            setBtnValue("X");
            setTimeout(() => setClassColor("blueSquare"), 500);
            setTimeout(() => setBtnValue(), 500);
        }
        else if (!Xor) {
            if (!redX) {
                setClassColor(newclass);
                setBtnValue(null);
            } else {
                if (color !== "white") {
                    setClassColor(newclass);
                    setBtnValue(null);
                    setTimeout(() => setClassColor("redSquareX"), 500);
                    setTimeout(() => setBtnValue("X"), 500);
                } else {
                    setClassColor(newclass);
                    setBtnValue(null);
                }

            }


        } else {
            setBtnValue("X");

            setClassColor("squareX");
        }
        fun();
        sendBox(id);
    }
    function funhandle2() {
        let redX = XYdata(id, grid, game, Xor, color);
        console.log("RED X VALUE from funhandle2: " + redX);

        let newclass;

        if (color != "white") {
            newclass = color + "Square";
        } else { newclass = "square"; }
        if (Xor && redX) {
            setClassColor("redSquareX");
            setBtnValue("X");
            setTimeout(() => setClassColor("blueSquare"), 500);
            setTimeout(() => setBtnValue(), 500);

        }
        else if (!Xor) {
            if (!redX) {
                setClassColor(newclass);
                setBtnValue(null);
            } else {
                if (color !== "white") {
                    setClassColor(newclass);
                    setBtnValue(null);
                    setTimeout(() => setClassColor("redSquareX"), 500);
                    setTimeout(() => setBtnValue("X"), 500);
                } else {
                    setClassColor(newclass);
                    setBtnValue(null);
                }
            }

        } else {
            setBtnValue("X");
            setClassColor("squareX");
        }
        fun();
        sendBox2(id);

    }

    function Exfun() {
        FunEx();
    }
    var sizing = 1.7;
    switch (sizeFactor) {
        case 1:
            sizing *= 4;
            break;
        case 2:
            sizing *= 2.5;
            break;
        case 3:
            sizing *= 1.3;
            break;
        case 4:
            sizing *= 1.0101;
            break;
    }
    if (mode) {
        if (!blackX) {
            return (
                <button style={{ width: sizing + "dvw", height: sizing + "dvw", fontSize: sizing + "dvw", lineHeight: sizing + "dvw" }} className={classColor} key={id} onMouseDown={() => funhandle1()} onMouseEnter={(event) => event.preventDefault()} >{btnValue}</button>
            );
        } else {
            return (
                <button style={{ width: sizing + "dvw", height: sizing + "dvw", fontSize: sizing + "dvw", lineHeight: sizing + "dvw" }} className="squareX" key={id}>X</button>
            );
        }

    }
    else if (!mode && startBox[3] === id[3] || startBox[1] === id[1]) {
        if (!blackX) {
            return (
                <button style={{ width: sizing + "dvw", height: sizing + "dvw", fontSize: sizing + "dvw", lineHeight: sizing + "dvw" }} className={classColor} key={id} onMouseOver={() => funhandle2()} onMouseUp={() => Exfun()} onMouseEnter={(event) => event.preventDefault()}  >{btnValue}</button>
            );
        } else {
            return (
                <button style={{ width: sizing + "dvw", height: sizing + "dvw", fontSize: sizing + "dvw", lineHeight: sizing + "dvw" }} className="squareX" key={id}>X</button>
            );
        }

    } else {
        if (!blackX) {
            return (
                <button style={{ width: sizing + "dvw", height: sizing + "dvw", fontSize: sizing + "dvw", lineHeight: sizing + "dvw" }} className={classColor} key={id}>{btnValue}</button>
            );
        } else {
            return (
                <button style={{ width: sizing + "dvw", height: sizing + "dvw", fontSize: sizing + "dvw", lineHeight: sizing + "dvw" }} className="squareX" key={id}>X</button>
            );
        }

    }
}

function XYdata(boxID, activeGrid, activeGame, modeXor, styleColor) {
    console.log(activeGame);
    console.log(activeGrid);
    console.log("color: " + styleColor);
    let redX;
    let CooY;
    let CooX;
    if (boxID[2] == "y" && boxID.length < 5) {
        CooX = boxID[1];
        CooY = boxID[3];
    } else if (boxID[2] == "y" && boxID.length === 5) {
        CooX = boxID[1];
        CooY = boxID.substring(3, 5);
    } else if (boxID[3] === "y" && boxID.length === 5) {
        CooX = boxID.substring(1, 3);
        CooY = boxID[4];
    } else if (boxID.length === 6) {
        CooX = boxID.substring(1, 3);
        CooY = boxID.substring(4, 6);
    }

    let player;
    let blueprint = activeGrid[CooY][CooX];
    if (!modeXor && styleColor == "blue") {
        player = 1;
        activeGame[CooY][CooX] = 1;
    } else if (!modeXor && styleColor == "white") {
        player = 0;
        activeGame[CooY][CooX] = 0;
    } else if (modeXor) {
        player = 2;
        activeGame[CooY][CooX] = 2;
    } else {
            console.log("trigger");
           
    }
console.log("mode: " + styleColor, "modeXor: " + modeXor, "styleColor: " + styleColor);
    console.log("player: " + player);
    console.log("activeGame[CooY][CooX]: " + activeGame[CooY][CooX]);
    if (player === blueprint || (player === 0 && blueprint === 2) || (player === 2 && blueprint === 0) || (player === 0 && blueprint===1)) {
        console.log("Match on box Xy fun");
        redX = false;
    } else if (player !== blueprint ||  !(blueprint == 2 && player == 1) ) {
        redX = true;
        activeGame[CooY][CooX] = 2;
        console.log("no match on box Xy fun");
    }
    return redX;
}

export default Box;