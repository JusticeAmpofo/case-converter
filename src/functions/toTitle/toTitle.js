function toTitle(value) {
	const exceptions = [
		'of',
		'an',
		'and',
		'the',
		'or',
		'is',
		'if',
		'in',
		'to',
		'for',
		'by',
	];
	// This regex will match either sentence endings followed by space (or end of string) or words directly.
	const sentenceEndingsOrWords = /([.!?]\s|\s$)|\w+('\w+)?/g;

	// Process the text, identifying sentence parts and words.
	let isStartOfSentence = true; // Flag to indicate the start of a new sentence or the whole text.

	return value.toLowerCase().replace(sentenceEndingsOrWords, (match) => {
		// If the match is a sentence ending, keep it as is and mark the start of a new sentence.
		if (/[.!?]\s|\s$/.test(match)) {
			isStartOfSentence = true;
			return match;
		}

		// For words, capitalize if it's the start of a sentence or not an exception.
		// Lowercase exceptions unless it's the start of a sentence.
		if (isStartOfSentence || !exceptions.includes(match)) {
			isStartOfSentence = false; // Any word encountered marks the end of a start of a sentence.
			return match.charAt(0).toUpperCase() + match.slice(1);
		} else {
			isStartOfSentence = false; // Ensure to reset for words that are exceptions but not at the start.
			return match; // Return exceptions in lowercase.
		}
	});
}

module.exports = toTitle;
