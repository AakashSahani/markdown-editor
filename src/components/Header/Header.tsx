import Menu from '../Menu/Menu';
import { useState, useReducer } from 'react';
import style from './Header.module.css';
import saveIcon from '../../assets/icon-save.svg';
import deleteIcon from '../../assets/icon-delete.svg';
import documentIcon from '../../assets/icon-document.svg';
import {
	MenuProps,
	MarkdownProps,
	MarkdownDocument,
	MarkdownCollection,
} from '../../interfaces/interface';

function Header({
	menu,
	setMenu,
	markdowninput,
	markdownCollection,
	setMarkdownCollection,
}: MenuProps & MarkdownProps & MarkdownCollection) {
	// const [markdownName, setMarkdownName] = useState('Welcome.md');
	// const [markdown, setMarkdown] = useState({
	// 	id: '',
	// 	name: markdownName,
	// 	markdown: '',
	// });

	// const handleChange = (e: any) => {
	// 	e.preventDefault();
	// 	setMarkdownName(e.currentTarget.value);
	// };

	// const handleSubmit = (e: any) => {
	// 	e.preventDefault();
	// 	if (markdownName === '') {
	// 		alert('Please enter markdown name');
	// 	} else {
	// 		setMarkdown({
	// 			id: crypto.randomUUID(),
	// 			name: markdownName,
	// 			markdown: markdowninput,
	// 		});
	// 		handleSave();
	// 	}
	// };

	// const handleDelete = () => {
	// 	const newMarkdownCollection = markdownCollection.filter(
	// 		(md) => md.id != markdown.id
	// 	);
	// 	setMarkdownCollection(newMarkdownCollection);
	// };

	// const handleSave = () => {
	// 	if (markdownCollection.some((md) => md.id === markdown.id)) {
	// 		const newCollection = markdownCollection;
	// 		let mdIndex = markdownCollection.findIndex((md) => md.id === markdown.id);
	// 		newCollection[mdIndex].name = markdown.name;
	// 	} else {
	// 		setMarkdownCollection((markdownCollection: Array<MarkdownDocument>) => [
	// 			...markdownCollection,
	// 			markdown,
	// 		]);
	// 	}
	// };

	return (
		<header className={style.header}>
			<Menu menu={menu} setMenu={setMenu} />
			<nav>
				<ul>
					<li>Markdown</li>
					<li>
						<img src={documentIcon} alt="Document Icon" />{' '}
						<form
							className={style.document_input}
							// onSubmit={handleSubmit}
						>
							<label htmlFor="documentname">Document Name</label>
							<input
								type="text"
								name="documentname"
								id="documentname"
								defaultValue="Welcome.md"
								// value={markdownName}
								// onChange={handleChange}
							/>
						</form>
					</li>
				</ul>
				<ul>
					<li>
						<button
							type="button"
							// onClick={handleDelete}
						>
							<img src={deleteIcon} alt="Delete Icon" />
						</button>
					</li>
					<li>
						<button
							type="button"
							// onClick={handleSubmit}
						>
							<img src={saveIcon} alt="Save Icon" />
							<span>Save Changes</span>
						</button>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
