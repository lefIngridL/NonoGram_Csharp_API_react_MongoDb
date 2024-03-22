import Frame from '../Elements/Window.jsx';
import { useEffect, useState } from 'react';
import Mode from '../Buttons/Mode';
import { ModeX } from '../Buttons/Mode';
import HintColumn from '../Elements/HintColumn';
import HintRow from '../Elements/HintRow';
import EGrid from './EGrid.jsx';
import { MakeHints } from '../Designer/Elements/DContent.jsx';
import { toInteger } from 'lodash';

function EContent({ info_pack }) {
    const [mode, setMode] = useState(true);
    const [modeStr, setModeStr] = useState("true");
    const [modeXor, setModeXor] = useState(false);
    const [modeXorStr, setModeXorStr] = useState("false");


    const [styleColor, setStyleColor] = useState("blue");
    const [boardSize, setBoardSize] = useState(info_pack.board_Size);
    const [activeGrid, setActiveGrid] = useState(); ///
    const [activeGame, setActiveGame] = useState(info_pack.board_Grid);

    const [activeRowHint, setActiveRowHint] = useState(info_pack.board_Rows);
    const [activeColHint, setActiveColHint] = useState(info_pack.board_Columns);
    const [sizeFactor, setSizeFactor] = useState(1);
    useEffect(() => {
        let y = info_pack.board_Id;
        let r = y.toString();
        let u = r[0];
        let t = toInteger(u);
        setSizeFactor(t);
    }, [activeGame]);
    var GridArr = Array(info_pack.board_Size);


    useEffect(() => {
        console.log(info_pack);
    }, [info_pack])
   

    function Receive() {
       
        MakeHints(info_pack.board_Size, info_pack.board_Grid, info_pack.board_Rows, info_pack.board_Columns);
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

    return (

        <>



            <div className="EmodeCard">
                <Mode color={styleColor} cap={Catch} />
                <ModeX cap={CatchX} xModeStr={modeXorStr} xMode={modeXor} />
            </div>
            <Frame mode={mode} Endfun={Terminate} >
                <HintColumn hint={info_pack.board_Rows} sizeFactor={sizeFactor} />
                <HintRow hint={info_pack.board_Columns} sizeFactor={sizeFactor} />
                <EGrid color={styleColor} mode={mode} fun={Receive} funny={funEnd} size={info_pack.board_Size} Xor={modeXor} sizeFactor={sizeFactor} grid={info_pack.board_Grid} game={activeGame} />
            </Frame >




        </>
    );
}

export default EContent;


