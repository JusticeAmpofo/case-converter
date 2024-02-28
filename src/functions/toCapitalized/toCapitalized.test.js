const toCapitalized = require('./toCapitalized');

describe('toCapitalized', () => {
	it('should convert a string to capitalized', () => {
		expect(toCapitalized('hello world')).toEqual('Hello World');
		expect(toCapitalized('JAVASCRIPT IS FUN')).toEqual('Javascript Is Fun');
		expect(
			toCapitalized(
				'hello world. i am writing javascript. i hope i am doing it right.'
			)
		).toEqual(
			'Hello World. I Am Writing Javascript. I Hope I Am Doing It Right.'
		);
		expect(
			toCapitalized(
				'hello world. i am excited about this project. do i look ready? yes, i do.'
			)
		).toEqual(
			'Hello World. I Am Excited About This Project. Do I Look Ready? Yes, I Do.'
		);
	});
});
