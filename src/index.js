import './css/style.css';

const formTextArea = document.querySelector('.form__textarea');
const buttonsContainer = document.querySelector('.buttons-container');
const characterCounterEl = document.querySelector('.character-counter');
const wordCounterEl = document.querySelector('.word-counter');
const sentenceCounterEl = document.querySelector('.sentence-counter');

function displayElements() {
	displayButtons();
	displayYear();
}

function displayButtons() {
	const buttons = [
		{
			className: 'sentence',
			id: 'sentence',
			name: 'Sentence case',
		},
		{
			className: 'lower',
			id: 'lower',
			name: 'lower case',
		},
		{
			className: 'upper',
			id: 'upper',
			name: 'UPPER CASE',
		},
		{
			className: 'capitalized',
			id: 'capitalized',
			name: 'Capitalized Case',
		},
		{
			className: 'title',
			id: 'title',
			name: 'Title Case',
		},
		{
			className: 'download',
			id: 'download',
			name: 'Download Text',
		},
		{
			className: 'copy',
			id: 'copy',
			name: 'Copy to Clipboard',
		},
		{
			className: 'clear',
			id: 'clear',
			name: 'Clear',
		},
	];

	buttons.forEach((btn) => {
		const buttonEl = document.createElement('button');
		buttonEl.className = `btn ${btn.className}`;
		buttonEl.id = btn.id;

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
	const targetID = e.target.id;

	switch (targetID) {
		case 'sentence':
			formTextArea.value = toSentence(formTextArea.value);
			break;
		case 'lower':
			formTextArea.value = toLower(formTextArea.value);
			break;
		case 'upper':
			formTextArea.value = toUpper(formTextArea.value);
			break;
		case 'capitalized':
			formTextArea.value = toCapitalized(formTextArea.value);
			break;
		case 'title':
			formTextArea.value = toTitle(formTextArea.value);
			break;
		case 'download':
			downloadTextFile(formTextArea.value);
			break;
		case 'copy':
			copyToClipboard(formTextArea.value);
			break;
		case 'clear':
			clearText();
			break;
		default:
			break;
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
	if (value.trim() === '') {
		setAlert('Please enter some text!', 'message-container__danger');
		return;
	}

	// Create a Blob containing the text content
	const blob = new Blob([value], { type: 'text/plain' });

	// Create a URL for the Blob
	const url = URL.createObjectURL(blob);

	// Create a download link and trigger a click event
	const a = document.createElement('a');
	a.href = url;
	a.download = 'textfile.txt'; // Set the desired file name
	a.style.display = 'none';
	a.click();

	// Clean up by revoking the Blob URL
	URL.revokeObjectURL(url);
}

function copyToClipboard(value) {
	if (value.trim() === '') {
		setAlert('Please enter some text!', 'message-container__danger');
		return;
	}

	navigator.clipboard.writeText(value).then(
		() => {
			setAlert(
				'Copying to clipboard was successful!',
				'message-container__success'
			);
		},
		(err) => {
			console.error('Could not copy text: ', err);
			setAlert('Sorry! Something went wrong...', 'message-container__danger');
		}
	);
}

function clearText() {
	formTextArea.value = '';
	characterCounterEl.innerHTML = '0';
	wordCounterEl.innerHTML = '0';
	sentenceCounterEl.innerHTML = '0';
}

function onTextInput() {
	const textValue = formTextArea.value;

	characterCounterEl.innerHTML = characterCount(textValue);
	wordCounterEl.innerHTML = wordCount(textValue);
	sentenceCounterEl.innerHTML = sentenceCount(textValue);
}

function characterCount(value) {
	return value.length;
}

function wordCount(value) {
	// Trim the text to remove leading and trailing spaces and then split the text by spaces and other whitespace characters
	const words = value.trim().split(/\s+/);

	return words.length;
}

function sentenceCount(value) {
	// Regular expression to match sentence endings (. ! ?)
	const sentenceEndings = /[.!?]/g;

	// Split the text by sentence endings and filter out any empty strings
	const sentences = value.trim().split(sentenceEndings).filter(Boolean);

	return sentences.length;
}

function setAlert(message, className) {
	const messageContainer = document.querySelector('.message-container');
	messageContainer.classList.add('message-container__message', className);
	messageContainer.innerHTML = `<p>${message}</p>`;

	setTimeout(() => {
		messageContainer.classList.remove('message-container__message', className);
		messageContainer.innerHTML = '';
	}, 3000);
}

function init() {
	document.addEventListener('DOMContentLoaded', displayElements);
	formTextArea.addEventListener('input', onTextInput);
	buttonsContainer.addEventListener('click', onTextSubmit);
}

init();
