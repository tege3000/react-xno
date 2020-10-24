import React from 'react';

const Title = () => <h1 className="text-center mt-4 mb-4">X & O Game</h1>
const BoardCell = () => { 
    return  (
        <div className="square">
            <div className="cell">
            </div>
        </div>
    )
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
    )
}

const Board = () => {
    return (
        <div className="board mx-auto">
            <BoardRow />
            <BoardRow />
            <BoardRow />
        </div>
    )
}

const Retry = () => {
    return (
        <div className="text-center mt-3">
            <button className="btn btn-primary">Play Again</button>
        </div>
    )
}

const App =  () => (
    <div className="card container p-4">
        <Title />
        <Board />
        <Retry />
    </div>
)

export default App;
