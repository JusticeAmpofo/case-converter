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
		formTextArea.value = formTextArea.value.toLowerCase();
	} else if (targetClassName.includes('upper')) {
		formTextArea.value = formTextArea.value.toUpperCase();
	}
}

function toSentence(value) {
	return value
		.toLowerCase()
		.replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => c.toUpperCase())
		.replace(/(\bi\b)/g, 'I');
}

function init() {
	document.addEventListener('DOMContentLoaded', displayElements);
	buttonsContainer.addEventListener('click', onTextSubmit);
}

init();
