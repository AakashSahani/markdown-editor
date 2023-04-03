export interface MarkdownProps {
	markdowninput: string;
	setMarkdownInput: Function;
}
export interface MenuProps {
	menu: Boolean;
	setMenu: Function;
}

export interface MarkdownDocument {
	id: string;
	name: string;
	markdown: string;
}

export interface MarkdownCollection {
	markdownCollection: Array<MarkdownDocument>;
	setMarkdownCollection: Function;
}
