function toSentence(value) {
	return value
		.toLowerCase()
		.replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => c.toUpperCase())
		.replace(/(\bi\b)/g, 'I');
}

module.exports = toSentence;
