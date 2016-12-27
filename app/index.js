var React = require('react');
var ReactDOM = require('react-dom');

var Expression = require("./components/Expression");

function Side() {
	this.terms = [];
}

Side.prototype.add = function (index, value) {
	while (this.terms.length <= index) {
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

lhs.set([1]);
rhs.set([1]);

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lhs: this.props.lhs,
			rhs: this.props.rhs,
			solve: true
		};
		this.handleToggle = this.handleToggle.bind(this);
		this.handleSwap = this.handleSwap.bind(this);
	}

	handleAdd(index, value, toBoth) {
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

	handleScale(factor, toBoth) {
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

	handleToggle() {
		this.setState(prevState => ({
			solve: !prevState.solve
		}));
	}

	handleSwap() {
		this.setState(prevState => ({
			lhs: prevState.rhs,
			rhs: prevState.lhs
		}))
	}

	render() {
		return (<div>
			<p>
				<Expression terms={this.state.lhs.terms}/>
				<span> = </span>
				<Expression terms={this.state.rhs.terms}/>
			</p>
			<p>
				<button onClick={() => this.handleAdd(0,1,this.state.solve)}>+1</button>
				<button onClick={() => this.handleAdd(0,-1,this.state.solve)}>–1</button>
			</p>
			<p>
				<button onClick={() => this.handleAdd(1,1,this.state.solve)}>+x</button>
				<button onClick={() => this.handleAdd(1,-1,this.state.solve)}>–x</button>
			</p>
			<p>
				<button onClick={() => this.handleAdd(2,1,this.state.solve)}>+x<sup>2</sup></button>
				<button onClick={() => this.handleAdd(2,-1,this.state.solve)}>–x<sup>2</sup></button>
			</p>
			<p>
				<button onClick={() => this.handleScale(2,this.state.solve)}>&times;2</button>
				<button onClick={() => this.handleScale(0.5,this.state.solve)}>&divide;2</button>
			</p>
			<p>
				<button onClick={this.handleSwap}>Swap sides</button>
			</p>
			<p>
				<button onClick={this.handleToggle}>{this.state.solve ? 'Solve' : 'Set'}</button>
			</p>
		</div>);
	}
}

ReactDOM.render(
	<App lhs={lhs} rhs={rhs} />,
	document.getElementById('app')
);
