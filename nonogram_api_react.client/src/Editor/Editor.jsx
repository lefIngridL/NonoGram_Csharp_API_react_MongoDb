import { useState } from 'react';
import Back from '../Buttons/Back.jsx';
import { useEffect } from 'react';
import EContent from './EContent.jsx';
import { toInteger } from 'lodash';
import Update from './Buttons/Update.jsx';
import { Site } from '../Controller/site.jsx';


function Editor({ board_info, homePage, toggleEdit }) {
    const [activeBoard, setActiveBoard] = useState(board_info);
    const [activePuzzle, setActivePuzzle] = useState(board_info);
    const { data, fetchData, addData, deleteData, updateData } = Site(activePuzzle);

    function goingAllTheWay() {
        homePage("dataBase");
        toggleEdit(false);
    }
    function getBoardUpdate() {
        console.log(activePuzzle);
        const _Id = activePuzzle.db_Id;
        console.log(_Id);
        const board = {
            BoardId: activePuzzle.board_Id,
            Size: activePuzzle.board_Size,
            Rows: activePuzzle.board_Rows,
            Columns: activePuzzle.board_Columns,
            Grid: activePuzzle.board_Grid
        };
        console.log(board);
        updateData(_Id, board);
    }
    if (activeBoard !== undefined) {
        return (
            <>
                <div className="dbHead">
                    <Back sendBack={goingAllTheWay} style={{ gridArea: "1/1" }} />
                    <h1 className="WelcomeMsg" style={{ fontSize: "4dvw", gridArea: "1/2" }}>Edit and update a Board</h1>
                    <Update UpdateBoard={getBoardUpdate} />
                </div>
                <div className="Econtent">
                    <EContent info_pack={board_info} />
                </div>
            </>



        );
    }

}

export default Editor;
           