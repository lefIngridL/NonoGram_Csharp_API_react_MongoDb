

function Frame({ mode, children, Endfun }) {

    function funEnd() {
        Endfun();
    }
    if (mode) {
        return (
            <>
                

                <div className="Window" >{children}</div>


            </>

        );
    } else {
        return (
            <>
               

                <div className="Window" onMouseLeave={funEnd}>{children}</div>


            </>
        );
    }
}

export default Frame;