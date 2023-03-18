export interface MarkdownProps {
	markdowninput: string;
	setMarkdownInput: Function;
}

function MarkdownInput({ markdowninput, setMarkdownInput }: MarkdownProps) {
	return (
		<div className="markdown_input">
			<form>
				<textarea
					name="markdowninput"
					id="markdowninput"
					cols={30}
					rows={10}
					value={markdowninput}
					onChange={(e) => setMarkdownInput(e.currentTarget.value)}
				></textarea>
			</form>
		</div>
	);
}

export default MarkdownInput;
