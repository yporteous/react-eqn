var React = require('react');

var Term = React.createClass({
	render: function () {
		let coeff = Number(this.props.coefficient);
		let index = this.props.index;
		let sign = " + ";

		if (coeff === 0 && !this.props.first) {
			return null;
		}

		if (this.props.first) {
			sign = "";
		}
		if (coeff < 0) {
			sign = " – ";
			coeff *= -1;
		}
		if (coeff === 1 && index) {
			coeff = "";
		} else {
			coeff = coeff.toString();
		}
		switch (index) {
			case 0:
				if (coeff !== 0) {
					return (<span key={index}>{sign}{coeff}</span>);
				} else if (this.props.first) {
					return (<span key={index}>0</span>);
				}
				break;
			case 1:
				if (coeff === 1) {
					return (<span key={index}>{sign}<em>x</em></span>);
				} else {
					return (<span key={index}>{sign}{coeff}<em>x</em></span>);
				}
				break;
			default:
				if (coeff === 1) {
					return (<span key={index}>{sign}<em>x</em><sup>{index}</sup></span>);
				} else {
					return (<span key={index}>{sign}{coeff}<em>x</em><sup>{index}</sup></span>);
				}
		}
	}
});

var Expression = React.createClass({
	render: function () {
		let terms = this.props.terms;

		while (terms[terms.length-1] === 0) {
			terms.pop()
		}

		if (!terms.length) {
			return (<span>0</span>);
		}
		else {
			return (
				<span>
					{terms.slice(0).reverse().map((coeff, index) => (
						<Term key={index.toString()} first={!index} index={terms.length-index-1} coefficient={coeff} />
					))}
				</span>
			);
		}
	}
});

module.exports = Expression;
