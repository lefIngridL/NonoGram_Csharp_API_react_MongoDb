function HintBox({ value, sizeFactor, FlexDirection }) {
    const ArrY = Array(5);
    const ArrX = Array(5);
    for (let i = 0; i < value.length; i++) {
        ArrY[i] = "y" + i;
        ArrX[i] = "x" + i;
    }
    var sizing = 1.7;
    //console.log(FlexDirection);
    let myHints = ArrY.map(ele => <span style={{ paddingInline: (12 / sizeFactor) + "px", paddingTop: (10 / sizeFactor) + "px" }} key={ele}>{value[ArrY.indexOf(ele)]}</span>);

    switch (sizeFactor) {
        case 1:
            sizing *= 4;
            break;
        case 2:
            sizing *= 2.5;
            break;
        case 3:
            sizing *= 1.3;
            break;
        case 4:
            sizing *= 1.0101;
            break;
    }
    if (FlexDirection == "column") {
        return (
            <div style={{ minWidth: sizing+2 + "dvw", height: sizing + "dvw", fontSize: sizing / 3 + "dvw", display: "inline-flex", flexDirection: "row", justifyContent: "center",  alignItems:"center" }} className="square">{myHints}</div>
        );
    } else {
        return (
            <div style={{ width: sizing + "dvw", minHeight: sizing + "dvw" ,height: "auto", fontSize: sizing / 3 + "dvw", display: "inline-flex", flexDirection: "column",  alignItems:"center", justifyContent:"center-baseline" }} className="square">{myHints}</div>
        );
    }

}

export default HintBox;