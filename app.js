// Variables For DOM Elements
const inputArea = document.getElementById('markdownInput');
const markdown = document.getElementById('markdown');

inputArea.addEventListener('keyup', (e) => {
	handleInput(e.currentTarget.value);
});

inputArea.addEventListener('change', (e) => {
	console.log(e.value);
});

function handleInput(text) {
	// Check for regex patterns
	// RegEx for **string** pattern
	const strongRegEx = new RegExp(/\*\*([^*]*)\*\*/g);

	// Check for <strong></strong> pattern
	const matchWords = handleStrongPattern(text, strongRegEx);

	// Assign it to markdown innerHtml
	replaceMatchedWords(text, matchWords, strongRegEx);
}

function handleStrongPattern(text, pattern) {
	if (text.match(pattern)) {
		const matches = text.match(pattern);
		const replaceByStrongTagArray = matches
			.map((match) => match.replace(/\*\*/g, '</strong>'))
			.map((match) => match.replace('/', ''));
		return replaceByStrongTagArray;
	} else {
		return [];
	}
}

function replaceMatchedWords(text, matchedWords, pattern) {
	let newWord = '';
	if (text.match(/\*\*/)) {
		matchedWords &&
			matchedWords.map((words) => {
				newWord += text.replace(pattern, words);
			});
	} else {
		newWord = text;
	}
	console.log(newWord);
	markdown.innerHTML = newWord;
}
