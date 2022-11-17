import { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.something,
      listOfColors: ["#fff", "#aaa", "#2600ff", "#aaa222"],
    };

    this.changeMyStateYo = this.changeMyStateYo.bind(this);
  }

  changeMyStateYo() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    console.log("rendering");

    return (
      <>
        <h1>This is the h1 title {this.props.something}</h1>
        <p>Count is: {this.state.count}</p>
        <ul>
          {this.state.listOfColors.map((colorString, index) => {
            return (
              <li key={`${colorString}${index}`}>
                <p>{colorString}</p>
              </li>
            );
          })}
        </ul>
        <button onClick={this.changeMyStateYo}>Increment the count</button>
        <p>{this.props.trivia}</p>
      </>
    );
  }
}
