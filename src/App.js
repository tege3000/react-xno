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
    const [grid, setGrid] = useState([['', '', ''], ['', '', ''], ['', '', '']]);

    const onSelect = (row, col) => {
        console.log(row, col);
        // setNextSign(nextSign === "X" ? "O" : "X");
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
