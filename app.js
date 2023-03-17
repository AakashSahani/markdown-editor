// Variables For DOM Elements
const inputArea = document.getElementById('markdownInput');
const markdown = document.getElementById('markdown');

// Event Listeners
inputArea.addEventListener('keyup', (e) => {
	let text = e.currentTarget.value;
	handleInput(text, pattern);
});

inputArea.addEventListener('change', (e) => {
	let text = e.currentTarget.value;
	handleInput(text, pattern);
});

// Regex patterns
const strongRegEx = new RegExp(/\*\*([^*]*)\*\*/g);

const italicRegEx = new RegExp(/\_([^_]*)\_/g);

const headingOne = new RegExp(/^(\#{1}\s)/g);

// Pattern Array
const pattern = [
	{ key: /\*\*/g, tag: '</strong>', reg: strongRegEx },
	{ key: /\_/g, tag: '</em>', reg: italicRegEx },
	// { key: /(\#{1}\s)/g, tag: '</h1>', reg: headingOne },
];

function handleInput(text, pattern) {
	const matchWords = checkPattern(text, pattern);

	matchWords.length > 0
		? (markdown.innerHTML = replaceMatchedWords(text, matchWords, pattern))
		: (markdown.innerHTML = text);
}

// Pure Pattern Checking Functions
function checkPattern(text, patterns) {
	let replacedWords = [];
	patterns.map((pattern) => {
		if (text.match(pattern.reg) != null) {
			const matches = text.match(pattern.reg);
			replacedWords = replacedWords.concat(
				matches
					.map((match) => match.replace(pattern.key, pattern.tag))
					.map((match) => match.replace('/', ''))
			);
		}
	});
	console.log(replacedWords);
	return replacedWords;
}

function replaceMatchedWords(text, matchedWords, patterns) {
	let newWord = '';
	patterns.map((pattern, index) => {
		if (text.match(pattern.key)) {
			matchedWords &&
				matchedWords.map((words) => {
					newWord = text.replace(pattern.reg, matchedWords[index]);
				});
		}
	});
	return newWord;
}
