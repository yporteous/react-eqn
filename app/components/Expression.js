var React = require('react');

var Term = React.createClass({
	render: function () {
		let coeff = Number(this.props.coefficient);
		let index = this.props.key;
		let sign = "+";
		if (coeff < 0) {
			sign = "–";
			coeff *= -1;
		}
		if (coeff === 1) {
			coeff = ""
		} else {
			coeff = coeff.toString();
		}
		switch (index) {
			case 0:
				if (coefficient) {
					return (<span key={props.key}>{sign}{coefficient}</span>);
				} else {
					return null;
				}
				break;
			case 1:
				if (coefficient === 1) {
					return (<span key={this.props.key}>{sign}<em>x</em></span>);
				} else {
					return (<span key={this.props.key}>{sign}{coefficient}<em>x</em></span>);
				}
				break;
			default:
			if (coefficient === 1) {
				return (<span key={props.key}>{sign}<em>x</em><sup>{index}</sup></span>);
			} else {
				return (<span key={props.key}>{sign}{coefficient}<em>x</em><sup>{index}</sup></span>);
			}
		}
	}
});

var Expression = React.createClass({
	render: function () {
		if (!this.props.terms.length) {
			return (<p>0</p>);
		}
		else {
			return (
				<p>
					{this.props.terms.slice(0).reverse().map((coeff, index) => (
						<Term key={index.toString()} coefficient={coeff} />
					))}
				</p>
			)
		}
	}
});

module.exports = Expression;
