import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

console.log("App.js is running!");

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Indecision App",
      subtitle: "Put your life in the hands of a computer",
      options: []
    };
  }

  onRemoveAll = () => this.setState({ options: [] });

  onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  };

  onFormSubmit = e => {
    e.preventDefault();
    let option = e.target.elements.option.value;
    this.setState(
      {
        options: [...this.state.options, option]
      },
      () => this.setState(console.log(this.state))
    );
    this.removeEntry(e);
  };

  removeEntry = event => (event.target.elements.option.value = "");

  // ========> SYNTAX <=============================
  // this.setState(prevState => ({
  //   arrayvar: [...prevState.arrayvar, newelement]
  // }))

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        {this.state.subtitle && <p>{this.state.subtitle}</p>}
        <p>
          {this.state.options.length > 0
            ? "Here are your options"
            : "No options"}
        </p>
        <button
          disabled={this.state.options.length === 0}
          onClick={this.onMakeDecision}
        >
          What should I do?
        </button>
        <button onClick={this.onRemoveAll}>Remove All</button>
        <ol>
          {this.state.options.map(option => (
            <li key={option}>{option}</li>
          ))}
        </ol>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

// const app = {
//   title: 'Indecision App',
//   subtitle: 'Put your life in the hands of a computer',
//   options: []
// };

// const onFormSubmit = (e) => {
//   e.preventDefault();

//   const option = e.target.elements.option.value;

//   if (option) {
//     app.options.push(option);
//     e.target.elements.option.value = '';
//     render();
//   }
// };

// const onRemoveAll = () => {
//   app.options = [];
//   render();
// };

// const onMakeDecision = () => {
// const randomNum = Math.floor(Math.random() * app.options.length);
// const option = app.options[randomNum];
// alert(option);
// };

// const appRoot = document.getElementById('app');

// const render = () => {
//   const template = (
// <div>
//   <h1>{app.title}</h1>
//   {app.subtitle && <p>{app.subtitle}</p>}
//   <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
//   <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
//   <button onClick={onRemoveAll}>Remove All</button>
//   <ol>
//     {
//       app.options.map((option) => <li key={option}>{option}</li>)
//     }
//   </ol>
//   <form onSubmit={onFormSubmit}>
//     <input type="text" name="option" />
//     <button>Add Option</button>
//   </form>
// </div>
//   );

//   ReactDOM.render(template, appRoot);
// };

// render();

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
