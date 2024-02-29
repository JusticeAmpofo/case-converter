function sentenceCount(value) {
	// Regular expression to match sentence endings (. ! ?)
	const sentenceEndings = /[.!?]/g;

	// Split the text by sentence endings and filter out any empty strings
	const sentences = value.trim().split(sentenceEndings).filter(Boolean);

	return sentences.length;
}

module.exports = sentenceCount;
