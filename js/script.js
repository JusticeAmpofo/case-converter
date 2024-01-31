const buttonsContainer = document.querySelector('.buttons-container');
const formTextArea = document.querySelector('.form__textarea');

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
	const yearText = document.createTextNode(new Date().getFullYear());
	document.querySelector('.footer__year').appendChild(yearText);
}

function onTextSubmit(e) {
	console.log('submit', e.target);
}

function init() {
	document.addEventListener('DOMContentLoaded', displayElements);
	buttonsContainer.addEventListener('click', onTextSubmit);
}

init();
