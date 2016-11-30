var React = require('react');
var ReactDOM = require('react-dom');

var Expression = require("./components/Expression");

ReactDOM.render(
	<Expression terms={[1,4,2]} />,
	document.getElementById('app')
);
