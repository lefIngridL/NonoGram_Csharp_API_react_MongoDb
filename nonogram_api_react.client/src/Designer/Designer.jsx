import homeIcon from '../assets/icons8-home.svg';
import homeGif_dark from '../assets/home6.gif';
import { LevelObj } from '../Models/designModel';
import { Site } from '../Controller/site.jsx';
import { useEffect, useState } from 'react';
import '../Experiment.css';
import Home from '../Buttons/Home.jsx';
import Back from '../Buttons/Back.jsx';
import Pick from '../Buttons/Pick.jsx';
import DContent from './Elements/DContent';
import Save from './Buttons/Save.jsx';
import Clear from './Buttons/Clear';
import { size } from 'lodash';


function Designer({ homePage }) {
    const [activePuzzle, setActivePuzzle] = useState([]);
    const { data, fetchData, addData, deleteData, updateData } = Site(activePuzzle);
    const [AllBoards, setAllBoards] = useState(data);
    const [boards, setBoards] = useState(LevelObj.level1);
    const [board, setBoard] = useState(boards);
    const [boardSize, setBoardSize] = useState();
    const [Grid, setGrid] = useState([]);
    const [HintsCol, setHintsCol] = useState([]);
    const [HintsRow, setHintsRow] = useState([]);
    const [levelProgress, setLevelProgress] = useState(0);
    const [sizeFactor, setSizeFactor] = useState(1);

    useEffect(() => {
        console.log(activePuzzle);
    }, [activePuzzle]);

    useEffect(() => {
        //console.log(Grid);
        //console.log(activePuzzle);
        const puzzle = {
            id: activePuzzle.id,
            size: activePuzzle.size,
            rows: HintsRow,
            columns: HintsCol,
            grid: Grid
        }

        setActivePuzzle(puzzle);
    }, [Grid]);
    function Rec(x) {
        console.log("triggered Rec(x)");
        setActivePuzzle(LevelObj["level" + x].puzzles[0]);

        setBoards(LevelObj["level" + x]);
        setSizeFactor(x);
        setBoardSize(LevelObj["level" + x].puzzles[0].size);
        setGrid(LevelObj["level" + x].puzzles[levelProgress].grid);
        if (activePuzzle.size == undefined) {
            console.log("YEAH");
            setHintsCol(LevelObj["level" + x].puzzles[levelProgress].columns);
            setHintsRow(LevelObj["level" + x].puzzles[levelProgress].rows);
        } else {
            setHintsCol(Array(activePuzzle.size).fill(Array()));
            setHintsRow(Array(activePuzzle.size).fill(Array()));
        }
        console.log(activePuzzle);


    }
    function IAmHome() {
        //console.log(LevelObj.level1.puzzles[0].grid);

        //LevelObj.level1.puzzles[0].rows = [[], [], []];
        //LevelObj.level1.puzzles[0].columns = [[], [], []];
        LevelObj.level1.puzzles[0].grid = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        LevelObj.level2.puzzles[0].grid =
            [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]
            ];
        LevelObj.level3.puzzles[0].grid =
            [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ];
        LevelObj.level4.puzzles[0].grid =
            [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ];
        setHintsCol([]);
        setHintsRow([]);
        console.log("resetting");
        setBoardSize();


    }

    function ClearBoard(x) {

        console.log("REPLAY");

        setHintsCol(Array(x).fill(Array()));
        setHintsRow(Array(x).fill([]));

        switch (x) {
            case 3:
                setGrid([
                    [0, 0, 0],
                    [0, 0, 0],
                    [0, 0, 0]
                ]);
                break;
            case 5:
                setGrid([
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0]
                ]);
                break;
            case 10:
                setGrid([
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ]);
                break;
            case 15:
                setGrid([
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ]);
                break;
        }




    }
    function goingAllTheWay() {
        homePage();
    }
    function getBoardSave() {
        addData(activePuzzle);
    }
    if (!boardSize) {
        return (
            <>
                <Back sendBack={goingAllTheWay} />
                <div style={{ gridColumnStart: "1", gridColumnEnd: "3", marginRight: "5dvw" }}>
                    <h1 className="WelcomeMsg" style={{ fontSize: "6dvw" }}>Welcome to the NonoGram Board Designer!</h1>
                    <h2 className="WelcomeMsg">Choose the size of the board</h2>
                    <Pick modus="Make" cap={Rec} level={1} />
                    <Pick modus="Make" cap={Rec} level={2} />
                    <Pick modus="Make" cap={Rec} level={3} />
                    <Pick modus="Make" cap={Rec} level={4} />
                </div>
            </>
        );
    }
    else {

        return (

            <div className="Dcontent">
                <Back sendBack={IAmHome} />
                <Save SavingBoard={getBoardSave} />
                <Clear clearingBoard={ClearBoard} Size={boardSize} />
                <h1 style={{ fontFamily: 'Burple', fontSize: "3dvw" }} >level {levelProgress + 1}</h1>
                <DContent data={data} Size={boardSize} grid={Grid} sizeFactor={sizeFactor} rowHint={HintsRow} colHint={HintsCol} />
            </div>
        );
    }
}



export default Designer;

