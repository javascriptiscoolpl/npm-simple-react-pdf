import React from "react";
import ReactDOM from "react-dom";
import spdf from "simple-react-pdf";

// sample page content
class App extends React.Component {

  render() {
    return (
      <div>
        <spdf.SimplePDF file="./example2.pdf"/>
        <spdf.SimplePDF file="./example1.pdf"/>
        <spdf.SimplePDF file="./example2.pdf"/>
      </div>
    );
  }
}

ReactDOM.render( <App/>, document.getElementById('app') );

// sample page content with update
/*
class App extends React.Component {

  constructor() {
    super();
    this.load1 = this.load1.bind(this);
    this.load2 = this.load2.bind(this);
    this.state = { filename: "./example1.pdf" };
  }

  load1() {
    this.state.filename = "./example1.pdf";
    this.forceUpdate();
  }

  load2() {
    this.state.filename = "./example2.pdf";
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <spdf.SimplePDF file={this.state.filename}/>
        <spdf.SimplePDF file={this.state.filename}/>
        <spdf.SimplePDF file={this.state.filename}/>
        <br/>
        <button onClick={this.load1}>load example1.pdf</button>
        <button onClick={this.load2}>load example2.pdf</button>
      </div>
    );
  }
}

ReactDOM.render( <App/>, document.getElementById('app') );
*/
