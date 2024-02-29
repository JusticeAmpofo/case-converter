const wordCount = require('./wordCount');

describe('wordCount', () => {
	it('should return the number of characters in a string', () => {
		expect(wordCount('hello world')).toEqual(2);
		expect(wordCount('JAVASCRIPT IS FUN')).toEqual(3);
		expect(wordCount('hello world. how are you? I am fine!')).toEqual(8);
		expect(
			wordCount(
				'hello world. i am writing JavaScript. i hope i am doing it right.'
			)
		).toEqual(13);
		expect(
			wordCount(
				'hello world. i am excited about this project. do i look ready? yes, i do.'
			)
		).toEqual(15);
		expect(
			wordCount('hello world, an example of title case conversion.')
		).toEqual(8);
		expect(
			wordCount('hello world! an example of title case conversion? yes, it is.')
		).toEqual(11);
		expect(
			wordCount(
				'an exciting day! the adventure of an explorer. and then, there was one.'
			)
		).toEqual(13);
		expect(
			wordCount("Hello! How are you doing today? I hope you're doing well.")
		).toEqual(11);
		expect(wordCount('Here is an example sentence to count words.')).toEqual(8);
	});
});
