import React from 'react';

const Title = ({title}) => <h1 className="text-center mt-4 mb-4">{title}</h1>
class BoardCell extends React.Component { 
    constructor(props) {
        super(props);
        this.state =  {
            sign: ""
        }
    }

    setSign() {
        this.setState({
            sign: this.props.sign
        })
    }

    render() {
        return  (
            <div className="square" onClick={this.setSign.bind(this)}>
                <div className="cell">{this.state.sign}</div>
            </div>
        );
    } 
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

class Board extends React.Component {
    constructor() {
        super();
        this.state = {
            nextSign: "X",
        };
    }

    render() {
        const {nextSign} = this.state;
        return (
            <div className="board mx-auto">
                <BoardRow sign={nextSign}/>
                <BoardRow sign={nextSign}/>
                <BoardRow sign={nextSign}/>
            </div>
        );
    }
    
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
