'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _pdfCombined = require('pdfjs-dist/build/pdf.combined.js');

var _pdfCombined2 = _interopRequireDefault(_pdfCombined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimplePDF = function (_React$Component) {
  _inherits(SimplePDF, _React$Component);

  function SimplePDF(props) {
    _classCallCheck(this, SimplePDF);

    // bind
    var _this = _possibleConstructorReturn(this, (SimplePDF.__proto__ || Object.getPrototypeOf(SimplePDF)).call(this, props));

    _this.loadPDF = _this.loadPDF.bind(_this);
    return _this;
  }

  _createClass(SimplePDF, [{
    key: 'loadPDF',
    value: function loadPDF() {

      // get node for this react component
      var node = _reactDom2.default.findDOMNode(this).getElementsByClassName("S-PDF-ID")[0];

      // clean for update
      node.innerHTML = "";

      // set styles
      node.style.width = "100%";
      node.style.height = "100%";
      node.style.overflowX = "hidden";
      node.style.overflowY = "scroll";
      node.style.padding = '0px';

      _pdfCombined2.default.getDocument(this.props.file).then(function (pdf) {

        // no scrollbar if pdf has only one page
        if (pdf.numPages === 1) {
          node.style.overflowY = "hidden";
        }

        for (var id = 1, i = 1; i <= pdf.numPages; i++) {

          pdf.getPage(i).then(function (page) {

            // calculate scale according to the box size
            var boxWidth = node.clientWidth;
            var pdfWidth = page.getViewport(1).width;
            var scale = boxWidth / pdfWidth;
            var viewport = page.getViewport(scale);

            // set canvas for page
            var canvas = document.createElement('canvas');
            canvas.id = "page-" + id;id++;
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            node.appendChild(canvas);

            // get context and render page
            var context = canvas.getContext('2d');
            var renderContext = {
              canvasContext: context,
              viewport: viewport
            };
            page.render(renderContext);
          });
        }
      }).catch(this.props.onError);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'SimplePDF' },
        _react2.default.createElement('div', { className: 'S-PDF-ID' })
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadPDF();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.loadPDF();
    }
  }]);

  return SimplePDF;
}(_react2.default.Component);

exports.default = SimplePDF;


SimplePDF.defaultProps = {
  onError: function onError() {},
  file: null
};

module.exports = { SimplePDF: SimplePDF };
