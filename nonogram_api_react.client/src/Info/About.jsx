import { Children, useEffect, useState } from 'react';
import Back from '../Buttons/Back.jsx';
import { Site } from '../Controller/site.jsx';

function About({ homePage }) {
    function goingAllTheWay() {

        homePage();
    }
    return (
        <div className="aboutPage">
            <Back sendBack={goingAllTheWay} style={{ gridArea: "1/1" }} />
            <h1 className="WelcomeMsg" style={{ fontSize: "6dvw", gridArea: "1/2" }}>About NonoGrams</h1>
            <article className="aboutArticle">
                <h2>Invention</h2>
               
                <p>Nonograms were invented in Japan in 1987 by two different people independently from one another.
                    The first inventor was Non Ishida, a Graphic editor that got the idea following a design competition
                    where he made pictures on a skyscraper by turning the lights on the windows off and on.
                    The other was Tetsuya Nishio, a puzzle-writer, who began publishing them in a local magazine.
                </p>
                <p>The puzzle goes by many names; Nonogram, Picross, Hanjie, 'Paint by Numbers' and 'Griddlers'</p>
                <p>Nonogram comes from 'Non'(from Non Ishida) + 'o' + 'gram' from (dia)gram. </p>
               
                <span style={{ fontFamily: "fantasy", fontSize: "0.8dvw" }}>information from <a href="https://www.puzzles.wiki/wiki/Nonogram">puzzles.wiki</a></span>
            </article>
        </div>

    );
}

export default About;