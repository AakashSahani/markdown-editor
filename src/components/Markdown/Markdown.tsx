import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useState, useEffect } from 'react';

export interface MarkdownProps {
	markdownOutput: string;
}

function Markdown({ markdownOutput }: MarkdownProps) {
	const [markedInput, setMarkedInput] = useState('');
	useEffect(() => {
		setMarkedInput(markdownOutput);
	}, [markdownOutput]);

	return (
		<div className="markdown_output">
			<div className="container">
				<ReactMarkdown children={markedInput} remarkPlugins={[remarkGfm]} />
			</div>
		</div>
	);
}

export default Markdown;
