import { Children, useEffect, useState } from 'react';
import Back from '../Buttons/Back.jsx';
import { Site } from '../Controller/site.jsx';

function Rules({ homePage }) {
    function goingAllTheWay() {

        homePage();
    }
    return (
        <div className="rulePage">
            <Back sendBack={goingAllTheWay} style={{ gridArea: "1/1"}} />
            <h1 className="WelcomeMsg" style={{ fontSize: "6dvw", gridArea: "1/2" }}>How to solve Nonograms</h1>
            <article className="aboutArticle">
                <h2>Rules</h2>
                <ol>
                    <li>All shaded cells in the solution must be indicated both by the clues in their
                        row and by the clues in their column, allowing every cell to be cross-checked</li>
                    <li>These clues are presented in the same order that they appear in the grid, from left to right or top to bottom.</li>
                    <li>When a 'run' of cells (any amount of 1 or greater) is clued to be shaded in a row or column, that run must have at
                        least one unshaded cell between it and the next run in the same row/column. For example, a clue of '4 3' would result
                        in a run of four shaded cells, then at least one unshaded cell, followed by a run of three shaded cells.</li>
                </ol>
                <span style={{ fontFamily: "fantasy", fontSize: "0.8dvw" }}>Rules from <a href="https://www.puzzles.wiki/wiki/Nonogram">puzzles.wiki</a></span>
                {/*<p>The numbers at the left and top of the board tells you how many colored squares there should be in each row and column.*/}
                {/*    if there are more than one number in the numbered squares, it means that there are gaps between the squares in that*/}
                {/*    particular row or column. F.ex. "2   2   1" means that there are first 2 consecutive squares, then a gap, then 2 squares,*/}
                {/*    then a gap and one final square. */}
                {/*    The very most important thing, is to make sure that the square you are attemting to fill in, agrees with both the number*/}
                {/*    for the rows and the numbers for the columns.*/}
                {/*</p>*/}
            </article>
      </div>
      
  );
}

export default Rules;