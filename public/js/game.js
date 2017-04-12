class Game extends React.Component {

  constructor() {
    super();
    this.state = {
      width: 4,
      height: 5,
      moves: []
    };
  }

  getValues() {
    var values = [];
    for(var i=0; i<this.state.height; i++){
      values[i] = Array(this.state.width).fill(null)
    }
    return values;
  }

  render() {

    var values = this.getValues();
    var status = "status";
    var moves = "moves";

    return (
      <div className="game">
        <div className="game-board">
          <Board
            values={values}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ul>{moves}</ul>
        </div>
      </div>
    );
  }
}
