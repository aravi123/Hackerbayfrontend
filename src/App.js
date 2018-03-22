import React, { Component } from 'react';
import './App.css';


class Square extends Component {

    constructor(props){
        super(props);
        this.state = {userposition:2};

    }



    render() {
        let dom;
        if(this.props.user===this.props.value){

           dom = <button className={`square`} ><img src={"mario.png"} className={"mario"} alt={"U"}/></button>
        }
        else if (this.props.enemies.indexOf(this.props.value)!==-1){
            console.log("Inside"+this.props.enemies);
            dom = <button className={`square ${this.props.value}`} ><img src={"mushroom.png"} className={"mario"} alt={"E"}/> </button>
        }
        else{

            dom = <button className={`square ${this.props.value}`} > </button>
        }
        return (

            dom
        );
    }
}

class Board extends Component {



    renderSquare(i) {
        return <Square value={i} user={this.props.user} enemies={this.props.enemies}/>;
    }

    render() {

        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}

                </div>
                <div className="board-row">
                    {this.renderSquare(10)}
                    {this.renderSquare(11)}
                    {this.renderSquare(12)}
                    {this.renderSquare(13)}
                    {this.renderSquare(14)}
                    {this.renderSquare(15)}
                    {this.renderSquare(16)}
                    {this.renderSquare(17)}
                    {this.renderSquare(18)}
                    {this.renderSquare(19)}

                </div>
                <div className="board-row">
                    {this.renderSquare(20)}
                    {this.renderSquare(21)}
                    {this.renderSquare(22)}
                    {this.renderSquare(23)}
                    {this.renderSquare(24)}
                    {this.renderSquare(25)}
                    {this.renderSquare(26)}
                    {this.renderSquare(27)}
                    {this.renderSquare(28)}
                    {this.renderSquare(29)}
                </div>
                <div className="board-row">
                    {this.renderSquare(30)}
                    {this.renderSquare(31)}
                    {this.renderSquare(32)}
                    {this.renderSquare(33)}
                    {this.renderSquare(34)}
                    {this.renderSquare(35)}
                    {this.renderSquare(36)}
                    {this.renderSquare(37)}
                    {this.renderSquare(38)}
                    {this.renderSquare(39)}
                </div>
                <div className="board-row">
                    {this.renderSquare(40)}
                    {this.renderSquare(41)}
                    {this.renderSquare(42)}
                    {this.renderSquare(43)}
                    {this.renderSquare(44)}
                    {this.renderSquare(45)}
                    {this.renderSquare(46)}
                    {this.renderSquare(47)}
                    {this.renderSquare(48)}
                    {this.renderSquare(49)}
                </div>
                <div className="board-row">
                    {this.renderSquare(50)}
                    {this.renderSquare(51)}
                    {this.renderSquare(52)}
                    {this.renderSquare(53)}
                    {this.renderSquare(54)}
                    {this.renderSquare(55)}
                    {this.renderSquare(56)}
                    {this.renderSquare(57)}
                    {this.renderSquare(58)}
                    {this.renderSquare(59)}
                </div>
                <div className="board-row">
                    {this.renderSquare(60)}
                    {this.renderSquare(61)}
                    {this.renderSquare(62)}
                    {this.renderSquare(63)}
                    {this.renderSquare(64)}
                    {this.renderSquare(65)}
                    {this.renderSquare(66)}
                    {this.renderSquare(67)}
                    {this.renderSquare(68)}
                    {this.renderSquare(69)}
                </div>
                <div className="board-row">
                    {this.renderSquare(70)}
                    {this.renderSquare(71)}
                    {this.renderSquare(72)}
                    {this.renderSquare(73)}
                    {this.renderSquare(74)}
                    {this.renderSquare(75)}
                    {this.renderSquare(76)}
                    {this.renderSquare(77)}
                    {this.renderSquare(78)}
                    {this.renderSquare(79)}
                </div>
                <div className="board-row">
                    {this.renderSquare(80)}
                    {this.renderSquare(81)}
                    {this.renderSquare(82)}
                    {this.renderSquare(83)}
                    {this.renderSquare(84)}
                    {this.renderSquare(85)}
                    {this.renderSquare(86)}
                    {this.renderSquare(87)}
                    {this.renderSquare(88)}
                    {this.renderSquare(89)}
                </div>
                <div className="board-row">
                    {this.renderSquare(90)}
                    {this.renderSquare(91)}
                    {this.renderSquare(92)}
                    {this.renderSquare(93)}
                    {this.renderSquare(94)}
                    {this.renderSquare(95)}
                    {this.renderSquare(96)}
                    {this.renderSquare(97)}
                    {this.renderSquare(98)}
                    {this.renderSquare(99)}
                </div>
            </div>
        );
    }
}

class Game extends Component {

    constructor(props){
        super(props);
        this.state = {userposition:33,moves:64,enemies:[0,21,22,36,42,50,61,80,84,88]};
        this.getKeyvalue = this.getKeyvalue.bind(this);

    }
    componentDidMount(){
            console.log("Component Mounted");
            document.addEventListener("keydown",this.getKeyvalue,false);
        }
    getKeyvalue(event){
        if (event.keyCode===40){
            this.updateState(this.state.userposition+10);
        }
        else if(event.keyCode===38){
            this.updateState(this.state.userposition-10);
        }
        else if(event.keyCode===37){
            this.updateState(this.state.userposition-1);
        }
        else if(event.keyCode===39){
            this.updateState(this.state.userposition+1);
        }

    }
    updateState(i){
        if (this.state.enemies.length===0){
            alert("You Won the Game");
            if (window.confirm){
                window.location.reload();
            }
        }
        if(i>=0 && i<=99){
            if (this.state.moves!==1){
                let e = this.state.enemies;
                if (e.indexOf(i)!==-1){
                    e.splice(e.indexOf(i),1);
                }
                this.setState({userposition:i,moves:this.state.moves-1,enemies:e});
            }
            else{
                alert("Game over");
                if (window.confirm){
                    window.location.reload();
                }
            }
        }

    }

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board user={this.state.userposition} enemies={this.state.enemies} />
                </div>
                <div className="game-info">
                    <div>{this.state.moves} Moves more</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}




export default Game;
