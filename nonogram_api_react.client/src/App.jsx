import { useEffect, useState } from 'react';
import './App.css';
import './Models/gameModel.js';
import Site from './Controller/site.jsx';
import Content from './Experiment.jsx'


console.log("YOMAMA");
function Meee(i) {
    console.log(i);

}

function Square({ name, value, onSquareClick }) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}{name}
        </button>
    );
}

function MyMath({ squares, handle }) {
    //console.log(squares.length);
    let size = squares.length;
    let root = Math.sqrt(size);

    let Brett = Array(root).fill().map(() => Array());
    function handleme(i) {
        handle(i);
        console.log("reached handleme" + i);
    }
    for (let f = 0; f < size; f++) {
        let choice = calc(f);
        Brett[choice.i].push(<Square key={"key" + f} name={f} value={squares[f]} onSquareClick={() => handleme(f)} />);
    }
    function calc(x) {
        for (let i = 0; i < root; i++) {
            let it = i + 1;
            let from = (it - 1) * root;
            let to = (root * it) - 1;
            //console.log(x+ "fra: " + from + " .Til: " + to);
            if (x >= from && x <= to) {
                //console.log(i);
                return { i, from, to };
            }
        }
    }
    //console.log(Brett);
    let TheBoard = [];
    Brett.forEach(element => {
        TheBoard.push(<div key={"row-key" + TheBoard.length} className='board-row'>{element}</div>);
    });
    //console.log(TheBoard);
    // ----
    TheBoard.forEach(element => {

        //console.log(element.props.children);
        element.props.children.forEach(ele => {
            // console.log(ele.props);
        })
    });
    return <>{TheBoard}</>;
}
function Grid({ boards, squares, setIntLvl }) {
    let int = 0;
    var levelNr = "level" + int;
    //console.log(boards["level1"][0].Grid[0]);
    const rootArr = [3, 5, 10, 15];
    const [board, setBoard] = useState(0)
    const [level, setLevel] = useState(boards[levelNr]);
    const [root, setRoot] = useState(rootArr[int - 1]);
    const [size, setSize] = useState(Math.pow(root, 2));
    const [lvlInt, setLvlInt] = useState(int);
    const [brett, setBrett] = useState([]);

    let Brett = Array(root).fill().map(() => Array());
    function setLevelNr1(i) {
        console.log(rootArr[i]);
        let nextRoot = rootArr[i];
        setRoot(nextRoot);
        let newSize = Math.pow(nextRoot, 2);
        setSize(newSize);
        console.log("old root: " + root + "...nextRoot: " + nextRoot + "...old size: " + size + "...newSize: " + newSize);
        setBrett(Array(nextRoot).fill().map(() => Array()));
        i++;
        int = i;
        levelNr = "level" + int;
        setLvlInt(int);
        setLevel(boards[levelNr]);
        let B = boards[levelNr][0];
        setBoard(B);
        if (!size || size === undefined) { console.log("its not defined yet"); }
        console.log(lvlInt);
        console.log("size: " + size, ".-.-.- activeboard: " + board + " or ..." + B);
        console.log(board, B);

        console.log(Brett)

    }
    //if (level) {
    //    //setLevel();

    //    //setSize(Math.pow(root, 2));
    //    useEffect(() => {
    //        setRoot(level[board].Size);
    //        console.log("hei der");
    //        console.log(board);
    //        console.log(boards[levelNr]);
    //        //setLevel(boards[levelNr]);
    //        setRoot(level[board].Size);
    //        setSize(Math.pow(root, 2));
    //        console.log(level);
    //        console.log(board);
    //        console.log(levelNr[5]);
    //    }, [levelNr]);
    //}






    function handleme(i) {
        //handle(i);
        console.log("reached handleme" + i);
        //console.log(root);
    }
    if (board || board !== undefined) {


        for (let i = 0; i < size; i++) {
            let choice = calc(i);
            let values = board.Grid[choice.m];
            let ya = [];
            values.forEach(val => { ya.push(val) })
            
            //console.log(values);
            Brett[choice.m].push(<Square key={"key" + i} name={} value={squares[i]} onSquareClick={() => handleme(i)} />);
        }
    }

    function calc(x) {
        for (let m = 0; m < root; m++) {
            let it = m + 1;
            let from = (it - 1) * root;
            let to = (root * it) - 1;
            //console.log(x+ "fra: " + from + " .Til: " + to);
            if (x >= from && x <= to) {
                //console.log(i);
                return { m, from, to };
            }
        }
    }
    let TheBoard = [];
    Brett.forEach(element => {
        TheBoard.push(<div key={"row-key" + TheBoard.length} className='board-row'>{element}</div>);
    });




    if (!level || level === undefined) {
        return (
            <>
                <div>that sucks...</div>
                <SizeUp int={lvlInt} setLevel={setLevelNr1} levelNr />
            </>

        )
    }



    return (
        <div>
            <h1 id="tabelLabel">Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            <SizeUp int={lvlInt} setLevel={setLevelNr1} levelNr />
            {TheBoard}
        </div>
    );


}

function Board({ xIsNext, squares, onPlay }) {
    //console.log(squares.length);
    function handleClick(i) {
        //console.log(squares);
        //console.log(i);
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            console.log("X");
            nextSquares[i] = "X";
        } else {
            console.log("O");
            nextSquares[i] = "O";
        }

        onPlay(nextSquares);
    }


    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }
    return (
        <>

            <div key="board-status" className='status'>{status}</div>


            <MyMath squares={squares} handle={handleClick} />
        </>
    );
}
//<Row squares={squares} xIsNext={xIsNext} handle={handleClick} />

function SizeUp({ int, setLevel, levelNr }) {


    return (
        <>
            <button
                type="button"
                onClick={() => setLevel(int)}
            >increase Size {int}

            </button>
        </>
    )
}

function Game() {
    const boardRoots = [3, 5, 10, 15];

    const { data, fetchData, addData, deleteData, updateData } = Site();
    const [boards, setBoards] = useState([]);
    const [intLvl, setIntLvl] = useState(1);

    const [levelNr, setLevelNr] = useState("level" + intLvl);
    const [size, setSize] = useState([]);
    const [root, setRoot] = useState([]);


    useEffect(() => {
        const fetchBoards = async () => {
            try {
                const fetchedData = await fetchData();
                setBoards(fetchedData);
            } catch (error) {
                console.error('There has been a problem with your fetch operation:', error);

            }
        };

        fetchBoards();
    }, [fetchData]);
    let myBoards = [];

    //useEffect(() => {
    //    let lvl = "level" + intLvl;
    //    console.log("hei der");
    //    setLevelNr(lvl);
    //    let brC = boardRoots[intLvl - 1];
    //    setRoot(brC);
    //    let udS = Math.pow(brC, 2);
    //    setSize(udS);
    //    console.log(levelNr);
    //    console.log(history);
    //    console.log(intLvl);
    //    console.log(root);
    //    console.log(size);
    //}, [intLvl]);



    useEffect(() => {
        if (data) {
            //const board = data.find(board => board.level === currentLevel);
            myBoards = data;
            //let root1 = myBoards.level1[0].Size;
            console.log(data);
            if (data.level2) {
                console.log(data.level2[0].Id); // Log boards whenever it changes
                const root = data.level2[0].Size
                console.log(root);
                const size = Math.pow(root, 2);
                setSize(size);
                setRoot(root);
            }

        }


    }, [boards]);














    const [history, setHistory] = useState([Array(size).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];
    //console.log(currentSquares);
    if (!data || data.length === 0) {

        // Render a loading state or a message indicating that data is loading
        return <div>Loading...</div>;
    }









    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        let element;
        if (move > 0 && move !== currentMove) {
            description = 'Go to move #' + move;
        } else if (move === currentMove) {
            description = 'You are at move#' + move;
        }
        else {
            description = 'Go to game start';
        }
        if (move !== currentMove) {
            element = <button onClick={() => jumpTo(move)}>{description}</button>;
        } else { element = <p>{description}</p>; }
        return (
            <li key={move}>
                {element}
            </li>
        );
    });


    return (
        <div key="game" className='game'>
            <div key="game-board" className='game-board'>
                HHAAAHA
                {/*<SizeUp int={intLvl} levelNr={levelNr} setLevel={setLevelNr1} />*/}
                {/*<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />*/}
                <Grid boards={data} levelNr={levelNr} squares={currentSquares} />

            </div>
            <div key="game-info" className='game-info'>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
function BoardsComponent() {
    const [boards, setBoards] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('api/Boards')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setBoards(data))
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
                setError(error.message);
            });
    }, []);

    if (error) {
        return <div>Error: {error}</div>;




    }
    // console.log(boards);

    return (
        <>
            <div>
                halla
                {boards.map(board => (
                    <div key={board.Id}>{board.Grid}</div>))}
            </div>
            <Grid boards={boards} />
            <Game boards={boards} />
        </>

    );
}
export default Game;
//export default BoardsComponent;
function App() {
    const [forecasts, setForecasts] = useState();

    useEffect(() => {
        populateWeatherData();
    }, []);



    const contents = forecasts === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>

                {forecasts.map(forecast =>
                    <tr key={forecast.Date}>
                        <td key="1">{forecast.Date}</td>
                        <td key="2">{forecast.TemperatureC}</td>
                        <td key="3">{forecast.TemperatureF}</td>
                        <td key="4">{forecast.Summary}</td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <div>
            <h1 id="tabelLabel">Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>
    );

    async function populateWeatherData() {
        const response = await fetch('weatherforecast');
        //const response = await fetch('api/Boards');
        const data = await response.json();
        //const response2 = await fetch('boards');
        //const data2 = await response2.json();
        //console.log(data2);

        setForecasts(data);
    }
}

//export default App;