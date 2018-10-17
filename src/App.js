import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const welcom = "Edit src/App.js and save to reload";

class App extends Component {
  state = {
    toggle: true
  };

  heandClick = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Welcome text={welcom} />
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {this.state.toggle && <p>This should show and hide</p>}
          <button onClick={this.heandClick}>Show / Hidden</button>
        </header>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    const { text } = this.props;
    return <h1 className="App-title">{text}</h1>;
  }
}

export default App;
