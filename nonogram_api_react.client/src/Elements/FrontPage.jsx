

function FrontPage({ director }) {
    function direction(x) {
        director(x);
    }
    return (
        <div className="frontpage">
            <h1 className="WelcomeMsg" style={{ gridArea: "1/1", fontSize: "6dvw"}} >Welcome to my NonoGram WebApp</h1>
            <div className="frontBtnRow">
                <button className="frontBtn" onClick={() => direction("game")}><span className="frontBtnText">Game</span></button>
                <button className="frontBtn" onClick={() => direction("designer")} ><span className="frontBtnText">Designer</span> </button>
            </div>


        </div>

    );
}

export default FrontPage;