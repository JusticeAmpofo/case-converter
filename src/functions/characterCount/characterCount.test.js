const characterCount = require('./characterCount');

describe('characterCount', () => {
	it('should return the number of characters in a string', () => {
		expect(characterCount('hello world')).toEqual(11);
		expect(characterCount('JAVASCRIPT IS FUN')).toEqual(17);
		expect(characterCount('hello world. how are you? I am fine!')).toEqual(36);
		expect(
			characterCount(
				'hello world. i am writing JavaScript. i hope i am doing it right.'
			)
		).toEqual(65);
		expect(
			characterCount(
				'hello world. i am excited about this project. do i look ready? yes, i do.'
			)
		).toEqual(73);
		expect(
			characterCount('hello world, an example of title case conversion.')
		).toEqual(49);
		expect(
			characterCount(
				'hello world! an example of title case conversion? yes, it is.'
			)
		).toEqual(61);
		expect(
			characterCount(
				'an exciting day! the adventure of an explorer. and then, there was one.'
			)
		).toEqual(71);
		expect(
			characterCount(
				"Hello! How are you doing today? I hope you're doing well."
			)
		).toEqual(57);
		expect(
			characterCount('Here is an example sentence to count words.')
		).toEqual(43);
	});
});
