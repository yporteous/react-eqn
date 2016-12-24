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

var App = React.createClass({
	add: function(index, value, toBoth) {
		if (toBoth) {
			this.props.lhs.add(index, value);
		}
		this.props.rhs.add(index, value);
	},
	render: function() {
		return (
			<div>
				<p>
					<Expression terms={this.props.lhs.terms}/>
					<span> = </span>
					<Expression terms={this.props.rhs.terms}/>
				</p>
				<p>
					<button>+1</button>
				</p>
			</div>
		);
	}
});


ReactDOM.render(
	<App lhs={lhs} rhs={rhs} />,
	document.getElementById('app')
);
