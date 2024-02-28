const toTitle = require('./toTitle');

describe('toTitle', () => {
	it('should convert a string to title case', () => {
		expect(toTitle('hello world')).toEqual('Hello World');
		expect(toTitle('JAVASCRIPT IS FUN')).toEqual('Javascript is Fun');
		expect(toTitle('hello world. how are you? I am fine!')).toEqual(
			'Hello World. How Are You? I Am Fine!'
		);
		expect(
			toTitle(
				'hello world. i am writing javascript. i hope i am doing it right.'
			)
		).toEqual(
			'Hello World. I Am Writing Javascript. I Hope I Am Doing It Right.'
		);
		expect(
			toTitle(
				'hello world. i am excited about this project. do i look ready? yes, i do.'
			)
		).toEqual(
			'Hello World. I Am Excited About This Project. Do I Look Ready? Yes, I Do.'
		);
		expect(
			toTitle('hello world, an example of title case conversion.')
		).toEqual('Hello World, an Example of Title Case Conversion.');
		expect(
			toTitle('hello world! an example of title case conversion? yes, it is.')
		).toEqual('Hello World! An Example of Title Case Conversion? Yes, It is.');
		expect(
			toTitle(
				'an exciting day! the adventure of an explorer. and then, there was one.'
			)
		).toEqual(
			'An Exciting Day! The Adventure of an Explorer. And Then, There Was One.'
		);
	});
});
