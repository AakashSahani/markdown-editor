import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useState, useEffect } from 'react';
import { MarkdownProps } from '../../interfaces/interface';

function Markdown({ markdowninput }: MarkdownProps) {
	const [markedInput, setMarkedInput] = useState('');
	useEffect(() => {
		setMarkedInput(markdowninput);
	}, [markdowninput]);

	return (
		<div className="markdown_output">
			<div className="container">
				<ReactMarkdown children={markedInput} remarkPlugins={[remarkGfm]} />
			</div>
		</div>
	);
}

export default Markdown;
