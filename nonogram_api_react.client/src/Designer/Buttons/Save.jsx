function Save({ SavingBoard }) {
    function sendSave() {
        if (confirm("Are you sure you want to commit this Board-pattern to the database?")) {
            console.log("go ahead");
            SavingBoard();
        } else {console.log("not commited") }
       
    }
    return (
        <button className="saveBtn" onClick={() => sendSave()}>Save</button>
    );
}

export default Save;