import React, { Component } from 'react';
import Circle from './Circle';

class Ball extends Component {
  render() {
    return (
      <tr>
        <td>4</td>
        <td>Ball</td>
      </tr>
    )
  }
}

class App extends Component {

  constructor() {
    super();
    this.count = 12;
    this.state = { color : "red" };
  }

  changeColor = () => {
    this.setState({color : "blue"});
  }

  render() {
    return (
      <div className="App">
        <table>
          <tr>
            <th>S.No</th>
            <th>Name</th>
          </tr>
          <tr>
            <td>1</td>
            <td>AAA</td>
          </tr>
          <Circle/>
          <tr>
            <td>2</td>
            <td>BBB</td>
          </tr>
          <Ball />
          <tr aria-rowspan = "2"> Count {this.count + this.props.count}</tr>
        </table>

        <span >My color is {this.state.color}</span>
        <button onClick={this.changeColor}>Change color!</button>
      </div>
    );
  }

  shouldComponentUpdate () {
    return true;
  }

  componentDidMount() {
    setTimeout( ()=> {
      this.setState({color : "yellow"});
    }, 1000);
  }
}

export default App;