const isNumber = input => /^\d*$/g.test(input);
const isAlphanum = input => /^\w$/gi.test(input);

module.exports = {
	isNumber,
	isAlphanum,
};
