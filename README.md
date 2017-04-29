# Description

This is Simple PDF React component with vertical scroll bar. However, If your pdf document has only one page there will not be any scroll bar by default. If you still need scroll bars, just use CSS example (see demo [index.html](https://github.com/javascriptiscoolpl/npm-simple-react-pdf/blob/master/demo/index.html) code for more details).

This version uses [pdfjs-dist](https://www.npmjs.com/package/pdfjs-dist) (npm [PDF.js](https://mozilla.github.io/pdf.js/) version) and ES6 syntax. Has been built with [Babel](https://babeljs.io/) and contains demo built with [Browserify](http://browserify.org/).

Screenshot example (3 x Simple PDF React component):

![demo](https://raw.githubusercontent.com/javascriptiscoolpl/npm-simple-react-pdf/master/screenshot.png)

# Install

    npm install simple-react-pdf

However, in production or if you do not plan to re-build it, do not install <code>devDependencies</code>. See [npm documentation page](https://docs.npmjs.com/cli/install).

# Usage - quickstart

##### index.html

This is simple example that should be used in most cases. The pdf size (each canvas) will be automatically adjusted to the box size (<code>div</code> with class <code>SimplePDF</code>).

    .SimplePDF {
      width: 350px; /* width of pdf document box should be != 0 */
      height: 500px; /* height of pdf document box should be != 0 */
      border: 1px dashed red; /* optional */
      margin: 15px; /* optional */
      padding: 15px; /* optional */
      float: left; /* optional */
    }

##### index.js

The JavaScript React component code you have to use in your project:

    import React from "react";
    import ReactDOM from "react-dom";
    import spdf from "simple-react-pdf";

    <spdf.SimplePDF file="./example1.pdf"/>

*) Of course change the "<code>example1.pdf</code>" to your pdf document filename and re-build the JavaScript code.

# Usage - with update

To update React component (e.g. load new pdf file after button click), you just have to send new <code>props</code> to the React component again (see demo [index.js](https://github.com/javascriptiscoolpl/npm-simple-react-pdf/blob/master/demo/src/index.js) for more details).

# Demo

The demo is available in module directory. To test the demo just go to <code>demo</code> directory in module folder and open <code>index.html</code> in your browser.

    cd node_modules/simple-react-pdf/demo
    firefox index.html

However, you can build the demo again with npm tool (e.g. after your private changes). To re-build the demo just go to <code>demo</code> directory in module folder (if you are not there already):

    cd node_modules/simple-react-pdf/demo

and run command:

    npm run build

This should download all packages and build the demo <code>index.js</code> file again. After it, you can open <code>index.html</code> in your browser. Should work :-)

# License

MIT
