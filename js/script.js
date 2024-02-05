const buttonsContainer = document.querySelector('.buttons-container');

function displayElements() {
	displayButtons();
	displayYear();
}

function displayButtons() {
	const buttons = [
		{
			className: 'sentence',
			name: 'Sentence case',
		},
		{
			className: 'lower',
			name: 'lower case',
		},
		{
			className: 'upper',
			name: 'UPPER CASE',
		},
		{
			className: 'capitalized',
			name: 'Capitalized Case',
		},
		{
			className: 'title',
			name: 'Title Case',
		},
		{
			className: 'download',
			name: 'Download Text',
		},
		{
			className: 'copy',
			name: 'Copy to Clipboard',
		},
		{
			className: 'clear',
			name: 'Clear',
		},
	];

	buttons.forEach((btn) => {
		const buttonEl = document.createElement('button');
		buttonEl.className = `btn ${btn.className}`;

		const name = document.createTextNode(btn.name);

		buttonEl.appendChild(name);
		buttonsContainer.appendChild(buttonEl);
	});
}

function displayYear() {
	document
		.querySelector('.footer__year')
		.appendChild(document.createTextNode(new Date().getFullYear()));
}

function onTextSubmit(e) {
	const formTextArea = document.querySelector('.form__textarea');
	const targetClassName = e.target.className;

	if (targetClassName.includes('sentence')) {
		formTextArea.value = toSentence(formTextArea.value);
	} else if (targetClassName.includes('lower')) {
		formTextArea.value = toLower(formTextArea.value);
	} else if (targetClassName.includes('upper')) {
		formTextArea.value = toUpper(formTextArea.value);
	} else if (targetClassName.includes('capitalized')) {
		formTextArea.value = toCapitalized(formTextArea.value);
	} else if (targetClassName.includes('title')) {
		formTextArea.value = toTitle(formTextArea.value);
	} else if (targetClassName.includes('download')) {
		downloadTextFile(formTextArea.value);
	}
}

function toSentence(value) {
	return value
		.toLowerCase()
		.replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => c.toUpperCase())
		.replace(/(\bi\b)/g, 'I');
}

function toLower(value) {
	return value.toLowerCase();
}

function toUpper(value) {
	return value.toUpperCase();
}

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

function toTitle(value) {
	const exceptions = ['of', 'an', 'and', 'the', 'or'];
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

function downloadTextFile(value) {
	// Create a Blob containing the text content
	const blob = new Blob([value], { type: 'text/plain' });

	// Create a URL for the Blob
	const url = URL.createObjectURL(blob);

	// Create a download link and trigger a click event
	const a = document.createElement('a');
	a.href = url;
	a.download = 'textfile.txt'; // Set the desired file name
	a.style.display = 'none';
	document.body.appendChild(a);
	a.click();

	// Clean up by revoking the Blob URL
	URL.revokeObjectURL(url);
	a.remove();
}

function init() {
	document.addEventListener('DOMContentLoaded', displayElements);
	buttonsContainer.addEventListener('click', onTextSubmit);
}

init();
