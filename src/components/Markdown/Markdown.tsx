import { marked } from 'marked';
import parse from 'html-react-parser';
import { useState, useEffect } from 'react';

export interface MarkdownProps {
	markdownOutput: string;
}

function Markdown({ markdownOutput }: MarkdownProps) {
	const [markedInput, setMarkedInput] = useState('');
	useEffect(() => {
		setMarkedInput(marked(markdownOutput));
	}, [markdownOutput]);

	return (
		<div className="markdown_output">
			<div className="container">{parse(markedInput)}</div>
		</div>
	);
}

export default Markdown;
