import React from 'react';
import homeGif from '../assets/home3.gif';
import homeIcon from '../assets/icons8-home.svg';
import Home from '../Buttons/Home.jsx';
//attribution: <a target="_blank" href="https://icons8.com/icon/jPDM9Pv61iP5/home">Home</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
import Replay from '../Buttons/Replay.jsx';
import Next from '../Buttons/Next';
import Party from './Party.jsx';
import Loss from './Loss.jsx';

function GameOver({ homeBound, PlayAgain }) {
    function sendMeHome() {
        homeBound();
    }
    function getReplay() {
        PlayAgain();
    }
    return (
        <>
            <div className="Banner">
                <span className="bannerText">
                    GAME OVER
                </span>
                <div className="buttonRow2">
                    <Home goingHome={sendMeHome} classy="bannerBtn" size="40dvh" still={homeIcon} move={homeGif} />
                    <Replay rePlaying={getReplay} classy="bannerBtn" />
                </div>

            </div>

        </>

    );
}
function GameWin({ homeBound, PlayAgain, Continue, prog }) {
    function sendMeHome() {
        homeBound();
    }
    function getReplay() {
        PlayAgain();
    }
    function getNext(p) {
        Continue(p);
    }
    return (
        <>
            <div className="Banner">
                <span className="bannerText2">
                    Level Won

                </span>
                <div className="buttonRow">
                    <Replay rePlaying={getReplay} classy="bannerBtn" />
                    <Home goingHome={sendMeHome} classy="bannerBtn" size="40dvh" still={homeIcon} move={homeGif} />
                    <Next sendNext={getNext} prog={prog} />
                </div>

            </div>



        </>

    );
}

function Banner({ game, sendHome, blankBoard, NextBoard, prog }) {
    function RoadHome() {
        sendHome();
    }
    function DoOver() {
        blankBoard();
    }
    function sendProg(p) {
        NextBoard(p);
    }
    if (game) {
        return (
            <>
                <GameWin homeBound={RoadHome} PlayAgain={DoOver} Continue={sendProg} prog={prog } />
               
            </>

        );
    } else {
        return (
            <>
                <GameOver homeBound={RoadHome} PlayAgain={DoOver} />
               
            </>

        );
    }

}

export default Banner;