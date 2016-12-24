var React = require('react');
var ReactDOM = require('react-dom');

var Expression = require("./components/Expression");

function Side() {
	this.terms = [];
}

Side.prototype.add = function (index, value) {
	while (typeof(this.terms.index) === "undefined") {
		this.terms.push(0);
	}
	this.terms[index] += value;
};

Side.prototype.set = function (terms) {
	this.terms = terms;
};

var lhs = new Side();
var rhs = new Side();

lhs.set([1,2,3]);
rhs.set([2,1]);

ReactDOM.render(
	(<p>
		<Expression terms={lhs.terms}/>
		<span> = </span>
		<Expression terms={rhs.terms}/>
	</p>),
	document.getElementById('app')
);
