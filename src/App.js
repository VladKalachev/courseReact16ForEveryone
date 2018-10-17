import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const welcom = "Edit src/App.js and save to reload";

class App extends Component {
  submit = () => {
    console.log(this.text.value);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Welcome text={welcom} />
          </p>
          <input type="text" ref={input => (this.text = input)} />
          <button onClick={this.submit}>Show Value</button>
        </header>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    const { text, toggle } = this.props;
    return <h1 className="App-title">{text}</h1>;
  }
}

export default App;
