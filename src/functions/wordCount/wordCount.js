function wordCount(value) {
	// Trim the text to remove leading and trailing spaces and then split the text by spaces and other whitespace characters
	const words = value.trim().split(/\s+/);

	return words.length;
}

module.exports = wordCount;
