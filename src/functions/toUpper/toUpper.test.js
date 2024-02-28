const toUpper = require('./toUpper');

describe('toUpper', () => {
	it('should convert a string to upper case', () => {
		expect(toUpper('javascript is fun')).toEqual('JAVASCRIPT IS FUN');
		expect(
			toUpper(
				'Hello world. I am writing javascript. I hope I am doing it right.'
			)
		).toEqual(
			'HELLO WORLD. I AM WRITING JAVASCRIPT. I HOPE I AM DOING IT RIGHT.'
		);
		expect(
			toUpper(
				'An exciting day! The adventure of an explorer. And then, there was one.'
			)
		).toEqual(
			'AN EXCITING DAY! THE ADVENTURE OF AN EXPLORER. AND THEN, THERE WAS ONE.'
		);
	});
});
