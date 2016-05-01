# Description

This is Simple PDF React component with vertical scroll bar. However, If your document has only one page there will not be any scroll bar. This version support [pdfjs-dist](https://www.npmjs.com/package/pdfjs-dist) (npm [PDF.js](https://mozilla.github.io/pdf.js/) version) and ES6 syntax. Has been built with [Babel](https://babeljs.io/) and contains demo built with [Browserify](http://browserify.org/).

# Install

    npm install simple-react-pdf

However, in production or if you do not plan to rebuild it, do not install <code>devDependencies</code>. See [npm documentation page](https://docs.npmjs.com/cli/install).

# Usage - quickstart

##### Decoration - index.html

    .SimplePDF {
      width: 350px;
      height: 500px;
      border: 1px dashed red;
      margin: 15px;
      padding: 15px;
      float: left;
    }

The PDF document will calculate size according to the <code>SimplePDF</code> size. So no <code>0px</code> is possible.

##### Usage - index.js

    import React from "react";
    import ReactDOM from "react-dom";
    import spdf from "simple-react-pdf";

    <spdf.SimplePDF file="./example1.pdf"/>

##### Update

To update just send new <code>props</code> to the React component again.

# Demo

##### Description

The demo is available in module directory. To test the demo just go to <code>demo</code> directory in module folder and open <code>index.html</code> in your browser.

However, you can build the demo again with npm. To re-build the demo just go to <code>demo</code> directory in module folder and run command:

    npm run build

This should download all packages and build the demo <code>index.js</code> file again. After it, you can open <code>index.html</code> in your browser. Should work :-)

##### Code - index.html

    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>demo</title>
        <style>
        .SimplePDF {
          width: 350px;
          height: 500px;
          border: 1px dashed red;
          margin: 15px;
          padding: 15px;
          float: left;
        }
        </style>
      </head>
      <body>
        <div id="app"></div>
        <script src="index.js"></script>
      </body>
    </html>

##### Code - index.js

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


##### Code - index.js (update)

    // sample page content with update
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

##### Screenshot

![demo](https://raw.githubusercontent.com/javascriptiscoolpl/npm-simple-react-pdf/master/screenshot.png)

# License

MIT
