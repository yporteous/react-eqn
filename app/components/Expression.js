var React = require('react');

var Term = React.createClass({
	render: function () {
		let coefficient = 2;
		let index = 1;
		return (<p>{coefficient} &times; x <sup>index</sup></p>)
	}
})

var Expression = React.createClass({
	render: function () {
		//*
		exp = [];
		var retStr;
		if (!exp.length) {
			retStr = (<p>0</p>);
		}
		else {
			retStr = <p>{exp[0]} + {}</p>;
			for (var i = 1; i < exp.length; i++) {
				/*
				if (exp[i] > 0 && retStr !== 1) {
					retStr += " + " + (exp[i] + "x^" + i);
				} else if (exp[i] < 0 && retStr !== -1) {
					retStr += " – " + (-exp[i] + "x^" + i);
				}
				//*/
				retStr += (" + " + exp[i] + "x<sup>" + i + "</sup>");
			}
		}
		//*/
		return (
			retStr
		)
		//*/
	}
});

module.exports = Expression;
