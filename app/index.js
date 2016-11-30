var React = require('react');
var ReactDOM = require('react-dom');

var Expression = require("./components/Expression");

ReactDOM.render(
	<Expression terms={[2,4,4]}/>,
	document.getElementById('app')
);
