const toSentence = require('./toSentence');

describe('toSentence', () => {
	it('should convert a string to sentence case', () => {
		expect(toSentence('hello world')).toEqual('Hello world');
		expect(toSentence('JAVASCRIPT IS FUN')).toEqual('Javascript is fun');
		expect(toSentence('hello world. how are you? I am fine!')).toEqual(
			'Hello world. How are you? I am fine!'
		);
		expect(
			toSentence(
				'hello world. i am writing JavaScript. i hope i am doing it right.'
			)
		).toEqual(
			'Hello world. I am writing javascript. I hope I am doing it right.'
		);
		expect(
			toSentence(
				'hello world. i am excited about this project. do i look ready? yes, i do.'
			)
		).toEqual(
			'Hello world. I am excited about this project. Do I look ready? Yes, I do.'
		);
		expect(
			toSentence('hello world, an example of title case conversion.')
		).toEqual('Hello world, an example of title case conversion.');
		expect(
			toSentence(
				'hello world! an example of title case conversion? yes, it is.'
			)
		).toEqual('Hello world! An example of title case conversion? Yes, it is.');
		expect(
			toSentence(
				'an exciting day! the adventure of an explorer. and then, there was one.'
			)
		).toEqual(
			'An exciting day! The adventure of an explorer. And then, there was one.'
		);
	});
});
