import toSentence from './functions/toSentence/toSentence';
import toLower from './functions/toLower/toLower';
import toUpper from './functions/toUpper/toUpper';
import toCapitalized from './functions/toCapitalized/toCapitalized';
import toTitle from './functions/toTitle/toTitle';
import characterCount from './functions/characterCount/characterCount';
import wordCount from './functions/wordCount/wordCount';

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
