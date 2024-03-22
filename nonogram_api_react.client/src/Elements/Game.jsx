import { useEffect, useState } from 'react';
import viteLogo from '/vite.svg';
import '../Experiment.css';
import { LevelObj, games } from '../Models/gameModel.js';
import { Site } from '../Controller/site.jsx';
import Home from '../Buttons/Home.jsx';
import Navigate from '../Buttons/Navigate';
import Pick from '../Buttons/Pick';
import Content from './Content.jsx';
import Banner from './Banner.jsx';
import homeIcon from '../assets/icons8-home.svg';
import homeGif_dark from '../assets/home6.gif';
import Party from './Party.jsx';
import Loss from './Loss.jsx';
import Back from '../Buttons/Back.jsx';








function Game({ homePage }) {
    const { data, fetchData, addData, deleteData, updateData } = Site();
    const [AllBoards, setAllBoards] = useState(data);
    const [boards, setBoards] = useState(data.level1);
    const [board, setBoard] = useState(boards);
    const [boardSize, setBoardSize] = useState();
    const [Grid, setGrid] = useState([]);
    const [HintsCol, setHintsCol] = useState([]);
    const [HintsRow, setHintsRow] = useState([]);
    const [levelProgress, setLevelProgress] = useState(0);
    const [sizeFactor, setSizeFactor] = useState(1);
    const [gameOver, setGameOver] = useState(false);
    const [gameWin, setGameWin] = useState(false);
    let myBoards = [];
    useEffect(() => {
        console.log("controlling...");
        console.log(levelProgress);
        if (levelProgress > 0 && data["level" + sizeFactor][levelProgress] !== undefined) {
            console.log(data["level" + sizeFactor][levelProgress]);
            setGrid(data["level" + sizeFactor][levelProgress].Grid);
            setHintsCol(data["level" + sizeFactor][levelProgress].Columns);
            setHintsRow(data["level" + sizeFactor][levelProgress].Rows);
        }

    }, [levelProgress]);

    useEffect(() => {
        if (gameWin) {
            console.log("topLevel gamewin");
        }
    }, [gameWin])
    useEffect(() => {
        if (gameOver) {
            console.log("toplevel gameOver");
        }
    }, [gameOver]);
    function Rec(x) {
        console.log(data);
        setBoards(data["level" + x]);
        setSizeFactor(x);
        setBoardSize(data["level" + x][0].Size);
        setGrid(data["level" + x][levelProgress].Grid);

        setHintsCol(data["level" + x][levelProgress].Columns);
        setHintsRow(data["level" + x][levelProgress].Rows);

    }
    function IAmHome() {
        console.log(LevelObj.level1.puzzles[0].grid);
        setLevelProgress(0);
        games.level1 = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        games.level2 =
            [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]
            ];
        games.level3 =
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
        games.level4 =
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
        setGameWin(false);
        setGameOver(false);

    }
    function RePlay() {

        console.log("REPLAY");

        games.level1 = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        games.level2 =
            [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]
            ];
        games.level3 =
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
        games.level4 =
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
        console.log(games.level1);
        setGameWin(false);
        setGameOver(false);


    }
    function updateProg(prog) {
        console.log(prog);
        console.log(data["level" + sizeFactor][prog]);
        if (data["level" + sizeFactor][prog] !== undefined) {
            console.log("active");
            setLevelProgress(prog);
            setGrid(data["level" + sizeFactor][prog].Grid);
            setHintsCol(data["level" + sizeFactor][prog].Columns);
            setHintsRow(data["level" + sizeFactor][prog].Rows);
            RePlay();
        } else { alert("No More levels of this size is available."); prog--; }


    }
    function getVerdict(Verdict) {
        setGameWin(Verdict);
    }
    function getGameOver(Verdict) {
        setGameOver(Verdict);
    }
    function goingAllTheWay() {

        homePage();
    }
    if (!boardSize) {

        return (
            <><Back sendBack={goingAllTheWay} />
                <div style={{ gridColumnStart: "1", gridColumnEnd: "3", marginRight: "5dvw" }}>
                    {/*<Home goingHome={goingAllTheWay} classy="homeBtn" size="50dvw" still={homeIcon} move={homeGif_dark} />*/}

                    <h1 className="WelcomeMsg" style={{ fontSize: "6dvw" }}>Welcome!</h1>
                    <h2 className="WelcomeMsg">Ready to solve some Nonograms?</h2>
                    <Pick modus="Play" cap={Rec} level={1} />
                    <Pick modus="Play" cap={Rec} level={2} />
                    <Pick modus="Play" cap={Rec} level={3} />
                    <Pick modus="Play" cap={Rec} level={4} />
                </div>
            </>


        );
    } else if (gameWin) {

        return (
            <div className="content">
                {/*<Home goingHome={IAmHome} classy="homeBtn" size="50dvw" still={homeIcon} move={homeGif_dark} />*/}
                {/*<h1>level {levelProgress + 1}</h1>*/}

                <Banner game={true} sendHome={IAmHome} blankBoard={RePlay} NextBoard={updateProg} prog={levelProgress} />
                <Party />
            </div>
        );

    } else if (gameOver) {

        return (
            <div className="content">
                {/*<Home goingHome={IAmHome} classy="homeBtn" size="50dvw" still={homeIcon} move={homeGif_dark} />*/}
                {/*<h1>level {levelProgress + 1}</h1>*/}
                <Banner game={false} sendHome={IAmHome} blankBoard={RePlay} />
                <Loss />
            </div>
        );

    }
    else {

        if (levelProgress > 0) {
            console.log(levelProgress);
            return (
                <><div className="contentHead">
                    <Back sendBack={IAmHome} />
                    <h1 style={{ fontFamily: 'Burple', fontSize: "3dvw" }} >level {levelProgress + 1}</h1>
                </div>
                    <div className="content">
                        {/*<Home goingHome={IAmHome} classy="homeBtn" size="50dvw" still={homeIcon} move={homeGif_dark} />*/}


                        <Navigate classy="downBtn" progress={levelProgress} direction="down" sendProg={updateProg} sizeFactor={sizeFactor} />
                        <Navigate classy="upBtn" progress={levelProgress} direction="up" sendProg={updateProg} sizeFactor={sizeFactor} />
                        <Content data={data} Size={boardSize} grid={Grid} sizeFactor={sizeFactor} rowHint={HintsRow} colHint={HintsCol} sendVerdict={getVerdict} sendGameOver={getGameOver} gameStateLoss={gameOver} gameStateWin={gameWin} />
                    </div></>


            );
        } else {
            console.log(levelProgress);
            return (
                <>
                    <div className="contentHead">
                        <Back sendBack={IAmHome} />
                        <h1 style={{ fontFamily: 'Burple', fontSize: "3dvw", color: "black" }}>level {levelProgress + 1}</h1>
                    </div>
                    <div className="content">
                        {/*<Home goingHome={IAmHome} classy="homeBtn" size="50dvw" still={homeIcon} move={homeGif_dark} />*/}


                        <Navigate classy="upBtn" progress={levelProgress} direction="up" sendProg={updateProg} sizeFactor={sizeFactor} />
                        <Content data={data} Size={boardSize} grid={Grid} sizeFactor={sizeFactor} rowHint={HintsRow} colHint={HintsCol} sendVerdict={getVerdict} sendGameOver={getGameOver} gameStateLoss={gameOver} gameStateWin={gameWin} />
                    </div>
                </>


            );
        }

    }

}


export default Game;