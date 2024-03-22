function EditBtn({ db_Id, board_Id, board_Size, board_Rows, board_Columns, board_Grid, sendVals }) {

    function handleClick() {
        sendVals(db_Id, board_Id, board_Size, board_Rows, board_Columns, board_Grid);
    }
  return (
      <button className="editBtn" onClick={() => handleClick() }>Edit</button>
  );
}

export default EditBtn;

 