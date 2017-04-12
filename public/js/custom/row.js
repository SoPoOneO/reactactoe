function Row(props) {
  return (
    <tr>
      {props.squares.map((player, colNum) => 
        <Square key={colNum} player={player} handleClick={()=>props.squareClick(colNum)} />
      )}
    </tr>
  );
}