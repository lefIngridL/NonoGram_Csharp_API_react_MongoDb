function Verdict({ gameOver, gameWin, sendVerdict }) {
    sendVerdict(gameOver, gameWin);
    //console.log(gameOver);
    if (!gameOver && !gameWin) {

        return (
            <>
                <p>Game Ongoing</p>
            </>
        );
    }
    else if (gameOver && !gameWin) {
        return (
            <>
                <p>Game Over: {gameOver}</p>
            </>

        );
    } else if (!gameOver && gameWin) {
        return (
            <>
                <p>Game Win: {gameWin}</p>
            </>
        );
    }

}

export default Verdict;