function Clear({ clearingBoard, Size }) {
    function sendClear(x) {
        if (confirm("Are you sure you want to clear the board?")) {
            console.log("go ahead");
            clearingBoard(x);
        } else { console.log("not cleared") }

    }
    return (
        <button className="clearBtn" onClick={() => sendClear(Size)}>Clear</button>
    );
}

export default Clear;