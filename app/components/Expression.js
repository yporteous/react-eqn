var React = require('react');

var Term = React.createClass({
	render: function () {
		let coeff = Number(this.props.coefficient);
		let index = this.props.index;
		let sign = "+";
		if (this.props.first) {
			sign = "";
		}
		if (coeff < 0) {
			sign = "–";
			coeff *= -1;
		}
		if (coeff === 1) {
			coeff = "";
		} else {
			coeff = coeff.toString();
		}
		switch (index) {
			case 0:
				if (coeff) {
					return (<span key={index}>{sign}{coeff}</span>);
				} else {
					return null;
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
		let last = terms.length - 1;

		if (terms[-1] === 0) {
			while (terms[last] === 0) {
				last--;
			}
			last++;
			terms.splice(last, terms.length - last);
		}

		if (!terms.length) {
			return (<p>0</p>);
		}
		else {
			return (
				<p>
					{terms.slice(0).reverse().map((coeff, index) => (
						<Term key={index.toString()} first={!index} index={terms.length-index-1} coefficient={coeff} />
					))}
				</p>
			);
		}
	}
});

module.exports = Expression;
