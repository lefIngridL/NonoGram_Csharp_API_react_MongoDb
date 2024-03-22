
import Row from '/src/Elements/Row.jsx';
import { useState } from 'react';
import DBox from './DBox.jsx';

function DGrid({ color, mode, fun, funny, size, Xor, sizeFactor, redX, grid, game }) {
    const [startBox, setStartBox] = useState("x0y0");
    const ArrY = Array(size);
    const ArrX = Array(size);
    for (let i = 0; i < size; i++) {
        ArrY[i] = "y" + i;
        ArrX[i] = "x" + i;
    }

    const SizeStyle = {
        heigth: "fitContent",
        width: "fitContent",
    };
    function funhandle() {

        fun();
    }
    function handleExFun() {
        funny();
    }
    async function getBox(box) {
        
        setStartBox(box);
    }
    async function getBox2(box) {

        
    }

    let rowArr = ArrY.map(ele =>
        <Row
            key={"row-" + ele}
            keyid={ele}
            boxArr={ArrX.map(ele2 =>
                <DBox
                    mode={mode}
                    key={ele2 + ele}
                    id={ele2 + ele}
                    color={color}
                    fun={funhandle}
                    FunEx={handleExFun}
                    sendBox={getBox}
                    
                    startBox={startBox}
                    Xor={Xor}
                    sizeFactor={sizeFactor}
                    redX={redX}
                    grid={grid}
                    game={game}
                />
            )}
        />);
    //console.log(rowArr);
    return (
        <>
            <div style={SizeStyle} className="Grid">
                {rowArr}
            </div>

        </>
    );
}

export default DGrid;


