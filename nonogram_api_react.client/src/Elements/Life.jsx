import svgHeartRed from '../assets/hjerte_red.svg';
import svgHeartGrey from '../assets/hjerte_grey.svg';


function RedHeart() {
    return (
        <img className="lifeHearts" src={svgHeartRed} alt="red_heart" />
    );
}
function GreyHeart() {
    return (
        <img className="lifeHearts" src={svgHeartGrey} alt="red_heart" />
    );
}
function Life({ lives }) {
    var heartArr = [1, 2, 3, 4, 5];
    heartArr = heartArr.slice(0, lives);
    let Hearts;
        Hearts = heartArr.map(ele =>
            <RedHeart key={"heart" + ele} />);
     
    for (let i = 0; i < 5 - lives; i++) {
        Hearts.push(<GreyHeart key={"greyHeart"+i } />);
    }
    return (

        <div className="LifeCount">
            {Hearts}
        </div>

    );
}

export default Life;