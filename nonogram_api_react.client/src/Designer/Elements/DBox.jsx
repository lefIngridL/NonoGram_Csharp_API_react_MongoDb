import { useEffect, useState } from 'react';
import { LevelObj } from '/src/Models/designModel';
function DBox({ mode, id, color, fun, FunEx, sendBox, startBox, Xor, sizeFactor, grid }) {
    const [btnValue, setBtnValue] = useState();
    const [colour, setColor] = useState(color);
    const [classColor, setClassColor] = useState("square");
    const [modeX, setModeX] = useState(Xor);
    const [activeGame, setActiveGame] = useState(grid);
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
            setBlackX(true);
        } else { setBlackX(false); }
       
        if (grid[CooY][CooX] === 1) {
            setClassColor("blueSquare")
        }
        if (grid[CooY][CooX] === 0) {
            setClassColor("square");
        }
    }, [id, grid])

    function funhandle1() {
        console.log(grid);
       
        XYdata(id, grid, Xor, color);
        //console.log(LevelObj);

        let newclass;
        if (color != "white") {
            newclass = color + "Square";
        } else { newclass = "square"; }

        if (!Xor) {
            setClassColor(newclass);
            setBtnValue(null);
        } else {
            setBtnValue("X");

            setClassColor("squareX");
        }
        fun();
        sendBox(id);
    }
    function funhandle2() {
        XYdata(id, grid, Xor, color);
       
        //console.log("RED X VALUE from funhandle2: " + redX);

        let newclass;

        if (color != "white") {
            newclass = color + "Square";
        } else { newclass = "square"; }

        if (!Xor) {
            setClassColor(newclass);
            setBtnValue(null);
        } else {
            setBtnValue("X");
            setClassColor("squareX");
        }
        fun();
       

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
            return (
                <button style={{ width: sizing + "dvw", height: sizing + "dvw", fontSize: sizing + "dvw", lineHeight: sizing + "dvw" }} className={classColor} key={id} onMouseDown={() => funhandle1()} onMouseEnter={(event) => event.preventDefault()} >{btnValue}</button>
            );
    }
    else if (!mode && startBox[3] === id[3] || startBox[1] === id[1]) { 
            return (
                <button style={{ width: sizing + "dvw", height: sizing + "dvw", fontSize: sizing + "dvw", lineHeight: sizing + "dvw" }} className={classColor} key={id} onMouseOver={() => funhandle2()} onMouseUp={() => Exfun()} onMouseEnter={(event) => event.preventDefault()}  >{btnValue}</button>
            );
    } else {
            return (
                <button style={{ width: sizing + "dvw", height: sizing + "dvw", fontSize: sizing + "dvw", lineHeight: sizing + "dvw" }} className={classColor} key={id}>{btnValue}</button>
            );
    }
}

export function XYdata(boxID, activeGrid, modeXor, styleColor) {
    
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
        activeGrid[CooY][CooX] = 1;
    } else if (!modeXor && styleColor == "white") {
        player = 0;
        activeGrid[CooY][CooX] = 0;
    } else if (modeXor) {
        player = 2;
        activeGrid[CooY][CooX] = 2;
    } else {
        console.log("trigger");

    }


}

export default DBox;

