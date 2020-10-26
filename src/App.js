import React from 'react';

const Title = ({title}) => <h1 className="text-center mt-4 mb-4">{title}</h1>
const BoardCell = () => { 
    return  (
        <div className="square">
            <div className="cell">X
            </div>
        </div>
    );
}
const BoardRow = () => {
    return (
        <div className="row m-0">
            <div className="col-4 m-0 p-0">
              <BoardCell />
            </div>
            <div className="col-4 m-0 p-0">
              <BoardCell />
            </div>
            <div className="col-4 m-0 p-0">
              <BoardCell />
            </div>
        </div>
    );
}

const Board = () => {
    return (
        <div className="board mx-auto">
            <BoardRow />
            <BoardRow />
            <BoardRow />
        </div>
    );
}

const Button = ({text, className}) => {
    return (
        <div className="text-center mt-3">
            <button className= {className}>{text}</button>
        </div>
    );
}

const App =  () => {

    const btn =  {
        text: 'Play Again',
        className: 'btn btn-primary'
    }

    return (
        <div className="card container p-4">
            <Title title="X & O Game"/>
            <Board />
            <Button {...btn} />
            <Button text="End Game" className="btn btn-secondary"/>
        </div>
    );
};

export default App;
