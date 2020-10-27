import React, {useState} from 'react';

const Title = ({title}) => <h1 className="text-center mt-4 mb-4">{title}</h1>
const BoardCell = (props) => { 

    const [sign, setSign] = useState("");
    
    const select = () => {
        setSign(props.sign);
        props.onSelect(props.sign)
    }

    return  (
        <div className="square" onClick={select}>
            <div className="cell">{sign}</div>
        </div>
    );
}

const BoardRow = (props) => {
    return (
        <div className="row m-0">
            <div className="col-4 m-0 p-0">
              <BoardCell {...props}/>
            </div>
            <div className="col-4 m-0 p-0">
              <BoardCell {...props}/>
            </div>
            <div className="col-4 m-0 p-0">
              <BoardCell {...props}/>
            </div>
        </div>
    );
}

const Board = () => {
    const [nextSign, setNextSign] = useState("X")

    const onSelect = (sign) => {
        setNextSign(sign === "X" ? "O" : "X");
    }

    return (
        <div className="board mx-auto">
            <BoardRow sign={nextSign} onSelect= {onSelect}/>
            <BoardRow sign={nextSign} onSelect= {onSelect}/>
            <BoardRow sign={nextSign} onSelect= {onSelect}/>
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
