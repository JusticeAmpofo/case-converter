function toCapitalized(value) {
	// Split the text into sentences based on '.', '!', or '?' followed by a space or end of string.
	const sentenceEndings = /([.!?]\s|\s$)/;
	const sentences = value.toLowerCase().split(sentenceEndings);

	// Process each sentence to capitalize the first letter of each word.
	const capitalizedSentences = sentences.map((part) => {
		// Check if the part is a sentence ending or whitespace, return as is if true.
		if (sentenceEndings.test(part)) return part;

		// Split the sentence into words, capitalize the first letter of each word, then join back.
		return part
			.split(' ')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	});

	// Join the parts back together into the final string.
	return capitalizedSentences.join('');
}

module.exports = toCapitalized;
