import HintBox from './HintBox.jsx';
function HintRow({ hint, sizeFactor }) {
    //console.log(hint);
    const ArrY = Array(hint.length);
    const ArrX = Array(hint.length);
    for (let i = 0; i < hint.length; i++) {
        ArrY[i] = "y" + i;
        ArrX[i] = "x" + i;
    }
    //let myHints = hint.map(ele => 
    //    <HintBox key={hint.indexOf(ele) + "key"} value={ele} sizeFactor={sizeFactor}  FlexDirection="row" />);

    let myHints = ArrX.map(ele =>
        <HintBox key={ArrX.indexOf(ele) + "key"} value={hint[ArrX.indexOf(ele)]} sizeFactor={sizeFactor} FlexDirection="row" />
    );
    //console.log(myHints);
  return (
      <div className="HintRow">
          {myHints }
      </div>
  );
}

export default HintRow;