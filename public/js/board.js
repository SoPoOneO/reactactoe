class Board extends React.Component {

  getRow(row, i){
    return (
      <tr key={i}>
        {row.map((value, j) =>
          <Square key={j} value={value} onClick={()=>alert('no')} />
        )}
      </tr>
    );
  }

  render() {
    return (
      <table>
        <tbody>
          {this.props.values.map(this.getRow)}
        </tbody>
      </table>
    );
  }

}