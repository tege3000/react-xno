import React, {useState} from 'react';

const Title = ({title}) => <h1 className="text-center mt-4 mb-4">{title}</h1>
const BoardCell = ({sign, rowIndex, colIndex, onSelect}) => { 

    // const [sign, setSign] = useState("");
    
    const onCellClick = () => {
        // setSign(props.sign);
        onSelect(rowIndex, colIndex);
    }

    return  (
        <div className="square" onClick={onCellClick}>
            <div className="cell">{sign}</div>
        </div>
    );
}

const BoardRow = ({row, ...others}) => {
    return (
        <div className="row m-0">
            {row.map((cell, index) => (
                <div key={index} className="col-4 m-0 p-0">
                    <BoardCell {...others} colIndex={index} sign={cell}/>
                </div>
            ))}
        </div>
    );
}

const Board = () => {
    const [nextSign, setNextSign] = useState("X");
    const [grid,] = useState([['', '', ''], ['', '', ''], ['', '', '']]);
    const [win, setWin] = useState(false);

    const checkWinner = cells  => {
        // if you flatten the array (turn to a 1D array), the rows and cols
        // can be indexed as follows
        const winners = {
            row1: [0, 1, 2],
            row2: [3, 4, 5],
            row3: [6, 7, 8],
            col1: [0, 3, 6],
            col2: [1, 4, 7],
            col3: [2, 5, 8],
            diag1: [0, 4, 8],
            diag2: [2, 4, 6]
        }

        for(let key in winners) {
            const [a, b, c] = winners[key];
            if(cells[a] !== "" && cells[a] === cells[b] && cells[a] === cells[c]) {
                return key;
            }
        }
        return null;
    }

    const onSelect = (row, col) => {
        if(grid[row][col] !== "") {
            return;
        }

        grid[row][col] = nextSign;
        setNextSign(nextSign === "X" ? "O" : "X");
        // const winner = checkWinner(grid.reduce)
    }

    return (
        <>
            <div className="board mx-auto">
                {grid.map((row, index) => (
                    <BoardRow key={index} row={row} rowIndex={index} sign={nextSign} onSelect= {onSelect}/>
                ))}
            </div>
            <div className="controls">
                <Button text="Play Again" className="btn btn-primary"/>
                <Button text="End Game" className="btn btn-secondary"/>
            </div>
        </>
    );
     
}

const Button = ({text, className, onClick}) => {
    return (
        <div className="text-center mt-3">
            <button onClick={onClick} className= {className}>{text}</button>
        </div>
    );
}

const App =  () => {

    return (
        <div className="card container p-4">
            <Title title="X & O Game"/>
            <Board /> 
        </div>
    );
};

export default App;
