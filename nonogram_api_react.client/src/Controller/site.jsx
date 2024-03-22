import React, { useState, useEffect } from 'react';
const boards = [];

export function Site(activePuzzle) {

    const [data, setData] = useState([]);
    const [rawData, setRawData] = useState([]);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const response = await fetch('api/Boards');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setData(data);
            setRawData(data);
            sortBoards(data);
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
            setError(error.message);
        }

    };
    function idCount() {
        console.log("trigger");
        let countId = 1
        console.log(rawData.length);
        for (let i = 0; i < rawData.length; i++) {
            if (rawData[i].Size == activePuzzle.size) {
                countId++;
            }
        }
        console.log(countId);
        return countId;
    }
    const addData = async () => {

        try {
            let id1;
            switch (activePuzzle.size) {
                case 3:
                    id1 = 1;
                    break;
                case 5:
                    id1 = 2;
                    break;
                case 10:
                    id1 = 3;
                    break;
                case 15:
                    id1 = 4;
                    break;
            }
            const id2 = idCount();
            console.log("BoardId: " + `${id1}.${id2}`);
            // Prepare the board object
            const board = {
                BoardId: `${id1}.${id2}`,
                Size: activePuzzle.size,
                Rows: activePuzzle.rows,
                Columns: activePuzzle.columns,
                Grid: activePuzzle.grid
            };

            //send POST request to add the new board
            const response = await fetch('api/Boards', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(board)
            });
            // Check if response is ok
            if (!response.ok) {
                throw new Error('Failed to add Board:');
            }
            await fetchData();
            const boards = await response.json();
            alert("Board was saved to database");
            // Fetch updated list of boards

        } catch (error) {
            console.error('Failed to add data:', error);
        }
    };

    const deleteData = async (id) => {
        try {
            const response = await fetch(`api/Boards/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete data');
            }
            await fetchData();
        } catch (error) {
            console.error('Failed to delete data:', error);
        }
    };

    const updateData = async (id, updatedData) => {
        try {
            const response = await fetch(`api/Boards/${id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedData),
            });
            if (!response.ok) {
                throw new Error('Failed to update data');
            }
            await fetchData();
            alert('Board update comitted to database. ')
        } catch (error) {
            console.error('Failed to update data:', error);
        }
    };

    const sortBoards = (data) => {
        const sortedBoards = {
            level1: [],
            level2: [],
            level3: [],
            level4: []
        };

        data.forEach(board => {
            switch (board.Size) {
                case 3:
                    sortedBoards.level1.push(board);
                    break;
                case 5:
                    sortedBoards.level2.push(board);
                    break;
                case 10:
                    sortedBoards.level3.push(board);
                    break;
                case 15:
                    sortedBoards.level4.push(board);
                    break;
                default:
                    break;
            }
        });

        setData(sortedBoards);
    };
    return { data, fetchData, addData, deleteData, updateData };
}
function dud() {

}

export default dud;