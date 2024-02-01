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
			className: 'download',
			name: 'Download Text',
		},
		{
			className: 'copy',
			name: 'Copy to Clipboard',
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
	const sentences = value.split(sentenceEndings);

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

function init() {
	document.addEventListener('DOMContentLoaded', displayElements);
	buttonsContainer.addEventListener('click', onTextSubmit);
}

init();
