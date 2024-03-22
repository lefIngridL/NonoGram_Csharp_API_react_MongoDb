function Pick({modus, cap, level }) {
    const GG = [3, 5, 10, 15];
    function capture(x) {
        cap(x);
    }
    return (
        <button className="onOffBtn3" onClick={() => capture(level)}>{modus} {GG[level-1]}x{GG[level-1]}</button>
    )
}

export default Pick;