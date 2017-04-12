class Board extends React.Component {

  constructor() {
    super();
    this.state = {
      width: 7,
      moves: [],
    }
  }

  getPlayerByMoveNum(moveNum) {
    return moveNum % 2 ? 'O' : 'X';
  }

  getRows() {

    // get blank 2D grid of size width * height
    var rows = [];
    for(var i=0; i<this.state.width; i++){
      var row = [];
      for(var j=0; j<this.state.width; j++){
        row[j] = null;
      }
      rows[i] = row;
    }

    // overwrite cells that players have moved in 
    this.state.moves.forEach((move, moveNum) => (
      rows[move.rowNum][move.colNum] = this.getPlayerByMoveNum(moveNum)
    ));

    return rows;
  }

  isSquareTaken(rowNum, colNum) {
    var rows = this.getRows();
    return rows[rowNum][colNum] ? true : false;
  }

  determineWinner(){
    var rows = this.getRows();
    var winner = null;

    rows.forEach((cols, rowNum)=>
      cols.forEach((square, colNum)=>
        winner = 'X'
      )
    );

    return null;//winner;
  }

  registerMove(rowNum, colNum) {

    // bail if that move is already taken
    if(this.isSquareTaken(rowNum, colNum)){return;}

    if(this.determineWinner()){return;}

    var moves = this.state.moves.slice();
    this.setState({
      moves: moves.concat({rowNum, colNum})
    });
  }

  render() {

    var rows = this.getRows();

    return (
      <div>
        <table>
          <tbody>
            {rows.map((squares, rowNum) => 
              <Row key={rowNum} rowNum={rowNum} squares={squares} squareClick={(colNum)=>this.registerMove(rowNum, colNum)} />
            )}
          </tbody>
        </table>
        <div>
          <h1>Moves</h1>
          <ol>
            {this.state.moves.map((move, moveNum) =>
              <li key={moveNum}>{this.getPlayerByMoveNum(moveNum)}: ({move.colNum + 1}, {move.rowNum + 1})</li>
            )}
          </ol>
        </div>
      </div>
    );
  }
}
