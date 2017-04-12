function Square(props) {
  return (
    <td>
        <button className="square" onClick={props.handleClick}>
          {props.player}
        </button>
    </td>
  );
}