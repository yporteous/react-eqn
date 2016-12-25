var React = require('react');
var ReactDOM = require('react-dom');

var Expression = require("./components/Expression");

function Side() {
	this.terms = [];
}

Side.prototype.add = function (index, value) {
	while (this.terms.length < index) {
		this.terms.push(0);
	}
	this.terms[index] += value;
};

Side.prototype.scale = function (factor) {
	for (var i = 0; i < this.terms.length; i++) {
		this.terms[i] *= factor;
	}
};

Side.prototype.set = function (terms) {
	this.terms = terms;
};

var lhs = new Side();
var rhs = new Side();

lhs.set([1,2]);
rhs.set([2,1]);

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lhs: this.props.lhs,
			rhs: this.props.rhs
		};
		this.add = this.add.bind(this);
	}

	add(index, value, toBoth) {
		var rhs = this.state.rhs;
		rhs.add(index, value);
		var lhs = this.state.lhs;
		if (toBoth) {
			lhs.add(index, value);
		}
		this.setState({
			lhs: lhs,
			rhs: rhs
		});
	}

	scale(factor, toBoth) {
		var rhs = this.state.rhs;
		rhs.scale(factor);
		var lhs = this.state.lhs;
		if (toBoth) {
			lhs.scale(factor);
		}
		this.setState({
			lhs: lhs,
			rhs: rhs
		});
	}

	render() {
		return (<div>
			<p>
				<Expression terms={this.props.lhs.terms}/>
				<span> = </span>
				<Expression terms={this.props.rhs.terms}/>
			</p>
			<p>
				<button onClick={() => this.add(0,1,true)}>+1</button>
				<button onClick={() => this.scale(2,true)}>&times;2</button>
			</p>
		</div>);
	}
}

ReactDOM.render(
	<App lhs={lhs} rhs={rhs} />,
	document.getElementById('app')
);
