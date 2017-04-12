function Square(props) {
  return (
    <td>
        <button className="square" onClick={() => props.onClick()}>
          {props.value}
        </button>
    </td>
  );
}