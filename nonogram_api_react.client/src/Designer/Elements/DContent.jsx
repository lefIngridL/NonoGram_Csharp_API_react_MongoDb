import Frame from 'G:/INGRID/UTDANNING/GET_Prepared_OwnProject/NonoGram_API_react/nonogram_api_react.client/src/Elements/Window.jsx';
import { useEffect, useState } from 'react';
import Mode from '/src/Buttons/Mode';
import { ModeX } from '/src/Buttons/Mode';
import HintColumn from '/src/Elements/HintColumn';
import HintRow from '/src/Elements/HintRow';
import DGrid from './DGrid.jsx';
import { LevelObj, games } from '/src/Models/gameModel.js';
function DContent({ data, Size, grid, sizeFactor, rowHint, colHint }) {
    const [mode, setMode] = useState(true);
    const [modeStr, setModeStr] = useState("true");
    const [modeXor, setModeXor] = useState(false);
    const [modeXorStr, setModeXorStr] = useState("false");


    const [styleColor, setStyleColor] = useState("blue");
    const [boardSize, setBoardSize] = useState(Size);
    const [activeGrid, setActiveGrid] = useState(grid); ///
    const [activeGame, setActiveGame] = useState();

    const [activeRowHint, setActiveRowHint] = useState(rowHint);
    const [activeColHint, setActiveColHint] = useState(colHint);

    var GridArr = Array(Size);
    
    useEffect(() => {

        setBoardSize(Size);
        GridArr = activeGrid.map(item => {
            //console.log("grid: "+ item )
            let level;
            switch (Size) {
                case 3:
                    level = "level1";
                    break;
                case 5:
                    level = "level2";
                    break;
                case 10:
                    level = "level3";
                    break;
                case 15:
                    level = "level4";
                    break;
            }
            setActiveGame(LevelObj[level]);

        });

    }, [Size]);

    function Receive() {
        MakeHints(Size, grid, rowHint, colHint);
        
        // console.log(data[0].Size);

        if (mode) {
            setMode(false);
            setModeStr("false");
        }
    }
    function funEnd() {
        setMode(true);
        setModeStr("false");

    }
    function Terminate() {
        setMode(true);
        setModeStr("true");
        // console.log("hei");
    }
    function Catch() {
        if (styleColor == "blue") {
            setStyleColor("white");
        } else { setStyleColor("blue"); }
    }
    function CatchX() {
     
        if (modeXor) {
            setModeXor(false);
            setModeXorStr("false");
        } else {
            setModeXor(true);
            setModeXorStr("true");

        }

    }
    if (boardSize) {
        return (
            <>
                <div className="DmodeCard">
                    <Mode color={styleColor} cap={Catch} />
                    <ModeX cap={CatchX} xModeStr={modeXorStr} xMode={modeXor} />
                </div>
                <Frame mode={mode} Endfun={Terminate} >
                    <HintColumn hint={rowHint} sizeFactor={sizeFactor} />
                    <HintRow hint={colHint} sizeFactor={sizeFactor} />
                    <DGrid color={styleColor} mode={mode} fun={Receive} funny={funEnd} size={boardSize} Xor={modeXor}  sizeFactor={sizeFactor} grid={grid}  />
                </Frame >
            </>
        );
    }
    else {
        return (
            <h1>Choose Boardsize</h1>
        )
    }

}



export function MakeHints(size, puzzleGrid, rowHint, colHint) {
    
    let counter = 0;
    let pass;
    //let myRow;
    let n = 1;
let colcounter = 0;
    const edgeObj = {
        allRows: Array(15).fill(Array(0)),
        allColumn: Array(15).fill(Array(0))
    }
    const resultsObj = {
        rowRes: Array(15).fill(Array(0)),
        colRes: Array(15).fill(Array(0))
    }

    //-- bool Arrays ----
    //lager bool (true/false) arrays utifra data i puzzle.grid -----
    boolArrRow(size, puzzleGrid, rowHint, colHint);
    boolArrCol(size, puzzleGrid, rowHint, colHint);
    function boolArrRow(size, puzzleGrid, rowHint, colHint) {
        let i = 0;
        
        for (let row in puzzleGrid) {
            let mykey = [];
            for (let cell in puzzleGrid[row]) {
                if (puzzleGrid[row][cell] == 1) {
                    mykey.push(true);
                }
                else { mykey.push(false); }
            } i++;
            edgeObj.allRows[row] = mykey;
            getNumbers(edgeObj.allRows[row], size, puzzleGrid, row, rowHint, colHint);
        }
    }

    function boolArrCol(size, puzzleGrid, rowHint, colHint) {
        let i = 0;
        for (let num = 0; num < size; num++) {
            let myRes = [];
            for (let row in puzzleGrid) {
                myRes.push(edgeObj.allRows[row][i]);
               
            } i++;
            edgeObj.allColumn[num] = myRes;
            getNumbersCol(edgeObj.allColumn[num], size, puzzleGrid, num, rowHint, colHint);
        }
    }
    //---end bool arrays---


    //---number arrays---
    // --- Gjør om bool arrays til tall arrays (hvor mange "true" på rad) ----
    function getNumbers(row, size, puzzle, num, rowHint, colHint) {
        let myRes = [];
        for (let i = 0; i < size; i++) {
            if (row[i]) {
                counter++;
            }
            else {
                if (counter !== 0) {
                    myRes.push(counter);
                    counter = 0;
                }
            }
        }
        if (counter !== 0) {
            myRes.push(counter);
        }
        resultsObj.rowRes[num] = myRes;
        counter = 0;
        placeNumbers(size, puzzle, rowHint, colHint);
    }

    let coln = 1;
    function getNumbersCol(col, size, puzzle, num, rowHint, colHint) {
        let myRes = [];
        for (let i = 0; i < size; i++) {
            if (col[i]) {
                counter++;
            }
            else {
                if (counter !== 0) {
                    myRes.push(counter);
                    counter = 0;
                }
            }
        }
        if (counter !== 0) {
            myRes.push(counter);
        }
        resultsObj.colRes[num] = myRes;
        
        counter = 0;
        placeNumbersCol(size, puzzle, rowHint, colHint);
    }
    
    function placeNumbers(size, puzzle, rowHint, colHint) {
        for (let i = 0; i < size; i++) {
           rowHint[i] = resultsObj.rowRes[i];
        }
    }

    function placeNumbersCol(size, puzzle, rowHint, colHint) {
        for (let i = 0; i < size; i++) {
            colHint[i] = resultsObj.colRes[i];
        }      
    }
}

export default DContent;