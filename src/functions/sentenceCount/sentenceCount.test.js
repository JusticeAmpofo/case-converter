const sentenceCount = require('./sentenceCount');

describe('sentenceCount', () => {
	it('should return the number of characters in a string', () => {
		expect(sentenceCount('hello world')).toEqual(1);
		expect(sentenceCount('JAVASCRIPT IS FUN')).toEqual(1);
		expect(sentenceCount('hello world. how are you? I am fine!')).toEqual(3);
		expect(
			sentenceCount(
				'hello world. i am writing JavaScript. i hope i am doing it right.'
			)
		).toEqual(3);
		expect(
			sentenceCount(
				'hello world. i am excited about this project. do i look ready? yes, i do.'
			)
		).toEqual(4);
		expect(
			sentenceCount('hello world, an example of title case conversion.')
		).toEqual(1);
		expect(
			sentenceCount(
				'hello world! an example of title case conversion? yes, it is.'
			)
		).toEqual(3);
		expect(
			sentenceCount(
				'an exciting day! the adventure of an explorer. and then, there was one.'
			)
		).toEqual(3);
		expect(
			sentenceCount("Hello! How are you doing today? I hope you're doing well.")
		).toEqual(3);
		expect(
			sentenceCount('Here is an example sentence to count words.')
		).toEqual(1);
	});
});
