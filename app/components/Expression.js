var React = require('react');

var Term = React.createClass({

	render: function () {
		let coefficient = 2;
		let index = 1;
		return (<p>{coefficient} &times; x <sup>index</sup></p>);
	}
})

var Expression = React.createClass({
	detDefaultProps: function () {
		return ({
			terms: [1]
		});
	},

	render: function () {
		//*
		var retStr;
		if (!this.props.terms.length) {
			return (<p>0</p>);
		}
		else {
			return (
				<p>
					{this.props.terms.slice(0).reverse().map((coeff, index) => (
						<span key={index.toString()}> {coeff >= 0 ? "+": "–"} {Math.abs(coeff)===1 ? "" : Math.abs(coeff)}<em>x</em><sup>{exp.length-index}</sup></span>
					))}
				</p>
			);
		}
	}
});

module.exports = Expression;
