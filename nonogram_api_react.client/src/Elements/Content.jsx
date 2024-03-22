import Frame from './Window.jsx';
import { useEffect, useState } from 'react';
import Mode from '../Buttons/Mode';
import { ModeX } from '../Buttons/Mode';
import HintColumn from './HintColumn';
import HintRow from './HintRow';
import Life from './Life.jsx';
import Grid from './Grid.jsx';
import { LevelObj, games } from '../Models/gameModel.js';
import { Check } from './CheckElement.jsx';

//data = { data } Size = { boardSize } grid = { Grid } sizeFactor = { sizeFactor } rowHint = { HintsRow } colHint = { HintsCol } sendVerdict = { getVerdict } sendGameOver = { getGameOver } gameStateLoss = { gameOver } gameStateWin = { gameWin }

function Content({ data, Size, grid, sizeFactor, rowHint, colHint, sendVerdict, sendGameOver, gameStateLoss, gameStateWin }) {
    const [mode, setMode] = useState(true);
    const [modeStr, setModeStr] = useState("true");
    const [modeXor, setModeXor] = useState(false);
    const [modeXorStr, setModeXorStr] = useState("false");
    //const [redX, setRedX] = useState(false);

    const [styleColor, setStyleColor] = useState("blue");
    const [boardSize, setBoardSize] = useState(Size);
    const [activeGrid, setActiveGrid] = useState(grid);
    const [activeGame, setActiveGame] = useState();

    const [activeRowHint, setActiveRowHint] = useState(rowHint);
    const [activeColHint, setActiveColHint] = useState(colHint);
    const [lives, setLives] = useState(5);
    const [gameOver, setGameOver] = useState(gameStateLoss);
    const [gameWin, setGameWin] = useState(gameStateWin);
    var GridArr = Array(Size);
    useEffect(() => { setActiveGrid(grid); }, [grid]);

    useEffect(() => {
        if (gameWin) {

            sendVerdict(true);
        }
    }, [gameWin]);
    useEffect(() => {
        if (gameOver) {

            sendGameOver(true);
        }
    }, [gameOver]);
    useEffect(() => {
        /*console.log(gameWin);*/
        //console.log("boardSize: " + boardSize);
        //console.log("Size: " + Size);
        //console.log("Data: " + data.level1);
        setBoardSize(Size);
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
            setActiveGame(games[level]);
        //console.log(games[level]);
        //console.log(activeGrid);
        //GridArr = activeGrid.map(item => {
        //    console.log("grid: "+ item )
            
        //});
        //console.log(GridArr);
        //console.log("Grid: " + activeGrid[2]);


    }, [Size, gameWin, activeGrid]);
    function Receive() {

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

    let Verdict;



    function GetXY(boxID) {

        //console.log(activeGame);
        //console.log("box ID: " + boxID);
        //console.log(activeGrid);
        //console.log(activeGrid[boxID[3]][boxID[1]]);
        //console.log(gameWin);

        let CooY;
        let CooX;
        if (boxID[2] == "y" && boxID.length < 5) {
            //console.log("snap: " + boxID);
            CooX = boxID[1];
            CooY = boxID[3];
            //console.log("X: " + CooX + " -- Y: " + CooY);
        } else if (boxID[2] == "y" && boxID.length === 5) {
            //console.log("long y: " + boxID);
            CooX = boxID[1];
            CooY = boxID.substring(3, 5);
            //console.log("X: " + CooX + " -- Y: " + CooY);
        } else if (boxID[3] === "y" && boxID.length === 5) {
            //console.log("long x: " + boxID);
            CooX = boxID.substring(1, 3);
            CooY = boxID[4];
            //console.log("X: " + CooX + " -- Y: " + CooY);
        } else if (boxID.length === 6) {
            //console.log("long x and y: " + boxID);
            CooX = boxID.substring(1, 3);
            CooY = boxID.substring(4, 6);
            //console.log("X: " + CooX + " -- Y: " + CooY);
        }

        let player;
        let blueprint = activeGrid[CooY][CooX];
        if (!modeXor && styleColor == "blue") {
            //console.log("make blue 1");

            //activeGame[CooY][CooX] = 1;
            //console.log(activeGame[boxID[3]][boxID[1]]);
            player = 1;

            //blueprint = activeGrid[CooY][CooX];



        } else if (!modeXor && styleColor == "white") {
            //console.log("make white 0");
            //activeGame[CooY][CooX] = 0;
            player = 0;
        } else if (modeXor) {
            //console.log("make X 2");
            //activeGame[CooY][CooX] = 2;
            player = 2;
        } else {
            console.log("trigger");
            console.log("mode: " + mode, "modeXor: " + modeXor, "styleColor: " + styleColor);
        }
        
        if (player === blueprint || (player === 0 && blueprint === 2) || (player === 2 && blueprint === 0) ||(player===0 && blueprint === 1)) {
            console.log("Match");
            //setRedX(false);
        } else if (player !== blueprint || !(blueprint == 2 && player == 1)) {
            //setRedX(true);
            console.log("no match");
            if (lives > 1) { setLives(lives - 1); } else if (lives === 1) {
                setLives(lives - 1);
                setGameOver(true);
                //alert("Game over");
            }
        }
        console.log(activeGame);
        console.log(activeGrid);

      
        Verdict = Check(activeGame, activeGrid);
        setGameWin(Verdict);
       

        console.log("Verdict: " + Verdict);
        

    }

    if (boardSize) {
        return (

            <>



                <div className="modeCard">
                    <Mode color={styleColor} cap={Catch} />
                    <ModeX cap={CatchX} xModeStr={modeXorStr} xMode={modeXor} />
                </div>
                <Life lives={lives} />


                <Frame mode={mode} Endfun={Terminate} >
                    <HintColumn hint={rowHint} sizeFactor={sizeFactor} />
                    <HintRow hint={colHint} sizeFactor={sizeFactor} />
                    <Grid color={styleColor} mode={mode} fun={Receive} funny={funEnd} size={boardSize} Xor={modeXor} Sendxy={GetXY} sizeFactor={sizeFactor}  grid={grid} game={activeGame } />
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


export default Content;