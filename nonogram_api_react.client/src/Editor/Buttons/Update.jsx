

function Update({ UpdateBoard }) {
    function sendUpdate() {
        if (confirm("Are you sure you want to commit this Board-pattern Update to the database?")) {
            console.log("go ahead");
            UpdateBoard();
        } else { console.log("not Updated") }

    }
    return (
        <button className="updateBtn" onClick={() => sendUpdate()}>Update</button>
    );
}

export default Update;