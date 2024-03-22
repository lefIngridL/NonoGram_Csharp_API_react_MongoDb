function Row({ keyid, boxArr }) {

    let newId = keyid;
    return (
        <div key={newId}>{boxArr}</div>
    )
}

export default Row;