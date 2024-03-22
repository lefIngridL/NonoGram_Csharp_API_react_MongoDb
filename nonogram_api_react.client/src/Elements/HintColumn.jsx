import HintBox from './HintBox.jsx';
function HintColumn({ hint, sizeFactor }) {
    //console.log(hint.length);
    const ArrY = Array(hint.length);
    const ArrX = Array(hint.length);
    for (let i = 0; i < hint.length; i++) {
        ArrY[i] = "y" + i;
        ArrX[i] = "x" + i;
    }
    //console.log(ArrY);
    //console.log(ArrX);
    let p = 0;
    
    
    //let myHints = hint.map(ele => 
    //    <HintBox key={hint.indexOf(ele) + "key"} value={ele} sizeFactor={sizeFactor} FlexDirection="column" />
    //);
    let myHints = ArrY.map(ele => 
        <HintBox key={ArrY.indexOf(ele) + "key"} value={hint[ArrY.indexOf(ele)]} sizeFactor={sizeFactor} FlexDirection="column" />
    );
    return (
        <div style={{ display: "inline-flex", flexDirection: "column", alignSelf: "baseline" }} className="HintColumn">
            {myHints}
        </div>
    );
}

export default HintColumn;