import { useEffect, useState } from 'react';
import Back from '../Buttons/Back.jsx';
import { Site } from '../Controller/site.jsx';
import { LevelObj } from '../Models/designModel';
import HintBox from '../Elements/HintBox.jsx';
import EditBtn from './EditBtn.jsx';

function BoardTable({ children }) {
    return (

        <table className="dataBaseTable" style={{ gridArea: "2/2", overflowY: "scroll" }} >
            <thead>
                <tr>
                    <td>db _Id</td>
                    <td>Board Id</td>
                    <td>Size</td>
                    <td>Rows</td>
                    <td>Columns</td>
                    <td>Grid</td>
                </tr>

            </thead>


            {children}

            <tfoot></tfoot>


        </table>
    );
}

function HintPane({ type, flexy, wide, items }) {
    if (flexy == "column") {
        if (type == "grid") {
            return (
                <div className="hintPane" style={{ display: "inline-flex", flexDirection: "column", lineHeight: "15px", height: "fit-content" }}>{items}</div>
            );
        } else {
            return (
                <div className="hintPane" style={{ display: "inline-flex", flexDirection: "column", height: "fit-content" }}>{items}</div>
            );
        }

    } else if (flexy == "row") {

        return (
            <div className="hintPane" style={{ display: "inline-flex", flexDirection: "row", height: "fit-content" }}>{items}</div>
        );
    }

}
function HintSquare({ type, flexy, items }) {
    //console.log(items);
    if (flexy == "column") {
        if (items.length > 1) {
            return (
                <div className="hintSquare" style={{ border: "1px solid green", width: "fit-content", lineHeight: "20px", height: "min-content", display: "inline-flex", flexDirection: "column" }}>
                    {items}

                </div>
            );
        } else {
            return (
                <div className="hintSquare" style={{ border: "1px solid green", width: "fit-content", lineHeight: "18px", height: "20px", display: "inline-flex", flexDirection: "column", alignContent: 'center', alignItems: 'center', margin: "0%" }}>
                    {items}

                </div>
            );
        }


    } else if (flexy == "row") {
        if (type == "grid") {
            return (
                <div className="hintSquare" style={{ border: "1px solid green", width: "fit-content", lineHeight: "18px", height: "20px", display: "flex", flexDirection: "row", alignItems: 'center' }}>
                    {items}

                </div>
            );
        } else {
            return (
                <div className="hintSquare" style={{ border: "1px solid green", width: "fit-content", lineHeight: "18px", height: "20px", display: "inline-flex", flexDirection: "row", alignItems: 'center' }}>
                    {items}

                </div>
            );
        }

    }

}
function HintItem({ nums }) {
    //console.log(nums);
    if (nums.length > 1) {
        return (
            <>{nums.map(ola => <HintNum num={ola} />)}</>
        );
    } else { return <p style={{ border: "1px solid red", width: "fit-content", height: "17px", alignItems: 'center', margin: "0px" }}>{nums}</p> }

}
function HintNum({ num }) {
    return (
        <p style={{ border: "1px solid red", width: "fit-content", height: "17px", alignItems: 'center' }}>{num}</p>
    );
}

function BoardView({ homePage, sendToEditor }) {
    const [activePuzzle, setActivePuzzle] = useState([]);
    const { data, fetchData, addData, deleteData, updateData } = Site(activePuzzle);
    const [AllBoards, setAllBoards] = useState(data);
    const [boards, setBoards] = useState(data.level1);
    const [board, setBoard] = useState(boards);
    const [boardSize, setBoardSize] = useState();
    const [Grid, setGrid] = useState([]);
    const [HintsCol, setHintsCol] = useState([]);
    const [HintsRow, setHintsRow] = useState([]);
    const [levelProgress, setLevelProgress] = useState(0);
    const [sizeFactor, setSizeFactor] = useState(1);
    const [RowArr, setRowArr] = useState([]);
    const ArrY = Array(boardSize);
    const ArrX = Array(boardSize);

    useEffect(() => {
        //console.log(data);
        setAllBoards(data);
        //console.log(AllBoards);
        if (AllBoards.level1 !== undefined) {
            //console.log(AllBoards["level" + sizeFactor][0].Size);
            setBoardSize(AllBoards["level" + sizeFactor][0].Size);
            setHintsCol(AllBoards["level" + sizeFactor][0].Rows);
            setHintsRow(AllBoards["level" + sizeFactor][0].Columns);
            setGrid(AllBoards["level" + sizeFactor][0].Grid);
            for (let i = 0; i < boardSize; i++) {
                ArrY[i] = "y" + i;
                ArrX[i] = "x" + i;
            }
        }

    }, [data]);

    let testRun = Array(4);
    let o = 0;
    for (let level in AllBoards) {
        //console.log(level);
        testRun[o] = Array(AllBoards[level].length);
        //console.log(testRun);
        for (let board in AllBoards[level]) {
            //console.log(board);
            let isHead;
            if (board === "0") {
                isHead = <thead><tr><td>{level}</td></tr></thead>;
            }
            testRun[o][board] =
                <>
                    {isHead}
                    <tbody>
                        <tr>

                            <td> {AllBoards[level][board].Id}</td>
                            <td> {AllBoards[level][board].BoardId}</td>
                            <td> {AllBoards[level][board].Size}</td>
                            <td >
                                <div className="rowsPane">
                                    <HintPane flexy="column" wide="3dvw" items={AllBoards[level][board].Rows.map(eli => <HintSquare flexy="row" items={eli.map(ali => <HintItem nums={ali} />)} />)} />

                                </div>

                            </td>
                            <td>
                                <div className="columnsPane" >
                                    <HintPane flexy="row" wide="12dvw" items={AllBoards[level][board].Columns.map(eli => <HintSquare flexy="column" items={eli.map(ali => <HintItem nums={ali} />)} />)} />


                                </div>

                            </td>
                            <td >
                                <div className="gridPane">
                                    <HintPane type="grid" flexy="column" wide="1dvw" items={AllBoards[level][board].Grid.map(eli => <HintSquare type="grid" flexy="row" items={eli.map(ali => <HintItem nums={ali} />)} />)} />

                                </div>
                            </td>
                            <td>
                            <EditBtn
                                db_Id={AllBoards[level][board].Id}
                                board_Id={AllBoards[level][board].BoardId}
                                board_Size={AllBoards[level][board].Size}
                                board_Rows={AllBoards[level][board].Rows}
                                board_Columns={AllBoards[level][board].Columns}
                                board_Grid={AllBoards[level][board].Grid}
                                sendVals={getVals }
                            >Edit</EditBtn>
                            </td>
                        </tr>
                    </tbody>
                </>;



        }

        o++;
    }

    function getVals(db_Id, board_Id, board_Size, board_Rows, board_Columns, board_Grid) {
        //console.log("trrigger");
        //console.log(db_Id, board_Id, board_Size, board_Rows, board_Columns, board_Grid);
        sendToEditor(db_Id, board_Id, board_Size, board_Rows, board_Columns, board_Grid);
    }



    function goingAllTheWay() {
        homePage();
    }
    if (AllBoards.level1 !== undefined) {
        
        return (
            <>
                <div className="dbHead">
                    <Back sendBack={goingAllTheWay} style={{ gridArea: "1/1" }} />
                    <h1 className="WelcomeMsg" style={{ fontSize: "4dvw", gridArea: "1/2" }}>View boards in the database</h1>
                </div>

                <div className="dbFrame">

                    <BoardTable >

                        {testRun}
                    </BoardTable>


                </div>
            </>



        );
    }

}
//{RowArr}
export default BoardView;