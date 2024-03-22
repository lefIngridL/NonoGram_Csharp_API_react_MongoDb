//import { s } from "../../node_modules/vite/dist/node/types.d-jgA8ss1A";

export function Check(activeGame, activeGrid) {
    console.log("Checking ...");
    let Verdict;
    if (activeGame !== undefined && activeGrid !== undefined) {
        for (let y = 0; y < activeGrid.length; y++) {
            //console.log("ny runde under--------------");
            //console.log("y runde: " + y);
            //console.log("--------------");
            for (let x = 0; x < activeGrid.length; x++) {
                //console.log("x runde: " + x);
                if ((activeGrid[y][x] === 0 && activeGame[y][x] === 1) || (activeGrid[y][x] === 1 && activeGame[y][x] === 0)) {
                    return false;
                }
            }
        } return true;
    }
    
}
function CheckElement({ activeGame, activeGrid, sendVerdict }) {
    console.log(activeGame);
    let Verdict = Check(activeGame, activeGrid);
    //console.log(Verdict);
    sendVerdict(Verdict);
    //setInterval(() => sendVerdict(Verdict),  3000);


    return (
        <p>Hello world!</p>
    );
}

export default CheckElement;