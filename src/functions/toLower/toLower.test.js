const toLower = require('./toLower');

describe('toLower', () => {
	it('should convert a string to lower case', () => {
		expect(toLower('JAVASCRIPT IS FUN')).toEqual('javascript is fun');
		expect(
			toLower(
				'Hello world. I am writing javascript. I hope I am doing it right.'
			)
		).toEqual(
			'hello world. i am writing javascript. i hope i am doing it right.'
		);
		expect(
			toLower(
				'An exciting day! The adventure of an explorer. And then, there was one.'
			)
		).toEqual(
			'an exciting day! the adventure of an explorer. and then, there was one.'
		);
	});
});
