export interface MarkdownProps {
	markdowninput: string;
	setMarkdownInput: Function;
}

function MarkdownInput({ markdowninput, setMarkdownInput }: MarkdownProps) {
	const handleChange = (e: any) => {
		setMarkdownInput(e.currentTarget.value);
	};
	return (
		<div className="markdown_input">
			<form>
				<textarea
					name="markdowninput"
					id="markdowninput"
					cols={30}
					rows={10}
					value={markdowninput}
					onChange={handleChange}
				></textarea>
			</form>
		</div>
	);
}

export default MarkdownInput;
