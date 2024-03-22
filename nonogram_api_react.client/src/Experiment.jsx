import { Children, useEffect, useState } from 'react';
import viteLogo from '/vite.svg';
import './Experiment.css';
import { LevelObj, games } from './Models/gameModel.js';
import { Site } from './Controller/site.jsx';
import Home from './Buttons/Home.jsx';
import Navigate from './Buttons/Navigate';
import Pick from './Buttons/Pick';
import Content from './Elements/Content.jsx';
import Banner from './Elements/Banner.jsx';
import homeIcon from './assets/icons8-home.svg';
import homeGif_dark from './assets/home6.gif';
import homeGif from './assets/home3.gif';
import Party from './Elements/Party.jsx';
import Loss from './Elements/Loss.jsx';
import Game from './Elements/Game.jsx';
import Designer from './Designer/Designer.jsx';
import FrontPage from './Elements/FrontPage.jsx';
import backImg from './assets/2427317_334101-PA0OUM-967-01.svg';
import About from './Info/About.jsx';
import Rules from './Info/Rules.jsx';
import BoardView from './Editor/BoardView';
import Editor from './Editor/Editor';


function Footer() {
    return (
        <div className="LicenseFooter">
            <span>Icons by..
                <a href="https://icons8.com/">
                    Icons8
                </a>
            </span>
            <br />
            <span>  Background by <a href="https://pixabay.com/users/madebytin-39325616/">madebytin</a>  via <a href="https://pixabay.com/illustrations/lemon-leaves-leaf-nature-yellow-8293725/">Pixabay</a></span>
            <br />
            <span>Fonts by <a href="https://vpcreativeshop.com/">vpcreativeshop</a> via <a href="https://www.fontspace.com/burble-vp-font-f66937">fontspace</a> and <a href="https://www.glukfonts.pl">gluk</a> via <a href="https://www.fontspace.com/broshk-fruits-font-f42344">fontspace</a></span>
        </div>
    );
}
function WebFrame({ children, homePage }) {
    function AreWeThere(goal) {
        homePage(goal);
    }
    
    return (
        <>
            <div className="WebFrame">
                <div className="menu">
                    <h3 style={{ fontFamily: 'BroshK-Orange', fontSize: "1dvw" }}>Site Navigation</h3>
                    <button className="menuBtn" onClick={() => AreWeThere()}>Front Page</button>
                    <button className="menuBtn" onClick={() => AreWeThere("rules")}>How to Play</button>
                    <button className="menuBtn" onClick={() => AreWeThere("game")}>Game</button>
                    <button className="menuBtn" onClick={() => AreWeThere("designer")}>Board Designer</button>
                    <button className="menuBtn" onClick={() => AreWeThere("dataBase")}>DataBase Viewer</button>
                    <button className="menuBtn" onClick={() => AreWeThere("about")}>About</button>
                    <Footer />
                </div>

                <div className="header">
                    <Home goingHome={AreWeThere} classy="headHomeBtn" size="50dvw" still={homeIcon} move={homeGif} />
                    <h2 style={{ fontFamily: 'BroshK-Orange', fontSize: "3dvw" }}>NONOGRAMS</h2></div>
                <div style={{ gridArea: "2/2", height: "fit content", width: "fit content", display: "inline-grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "5dvw 5dvw auto" }}>{children}</div>


            </div>
        </>
    );
}


export default function App() {
    const [MyChoice, setMyChoice] = useState();
    const [editing, setEditing] = useState(false);
    const [editBoard_info, setEditBoard_info] = useState([]);

    function toggleEditor(db_Id, board_Id, board_Size, board_Rows, board_Columns, board_Grid ) {
        //console.log("reached App()");
        setEditing(!editing);
        //console.log({ editBoard_info });
        //console.log({ db_Id, board_Id, board_Size, board_Rows, board_Columns, board_Grid });
        if (editBoard_info.length === 0) { console.log("confirmed"); }
        setEditBoard_info({ db_Id, board_Id, board_Size, board_Rows, board_Columns, board_Grid });
    }
    function turnOffEditor(x) {
        setEditing(x);
        setEditBoard_info([]);
    }
    function redirection(x) {
        setMyChoice(x);
    }
    if (MyChoice === "game") {
        return <WebFrame homePage={redirection}><Game homePage={redirection} /></WebFrame>
    } else if (MyChoice === "designer") {
        return <WebFrame homePage={redirection}><Designer homePage={redirection} /></WebFrame>
    }
    else if (MyChoice === "rules") {
        return <WebFrame homePage={redirection}><Rules homePage={redirection} /></WebFrame>
    }
    else if (MyChoice === "about") {
        return <WebFrame homePage={redirection}><About homePage={redirection} /></WebFrame>
    } else if (MyChoice === "dataBase") {
        if (!editing || editBoard_info.length === 0) {
            return <WebFrame homePage={redirection}><BoardView homePage={redirection} sendToEditor={toggleEditor} /></WebFrame>
        } else if (editing && editBoard_info.length !==0) {
            return <WebFrame homePage={redirection}><Editor board_info={editBoard_info} homePage={redirection} toggleEdit={turnOffEditor } /></WebFrame>
        }
    }
    else {
        return <WebFrame homePage={redirection}><FrontPage director={redirection} /></WebFrame>

    }

}