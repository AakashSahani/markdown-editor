import Menu from '../Menu/Menu';
import { useState } from 'react';
import style from './Header.module.css';
import saveIcon from '../../assets/icon-save.svg';
import deleteIcon from '../../assets/icon-delete.svg';
import documentIcon from '../../assets/icon-document.svg';

export interface MenuProps {
	menu: Boolean;
	setMenu: Function;
}

function Header({ menu, setMenu }: MenuProps) {
	const [docName, setDocName] = useState('welcome.md');
	const handleChange = (e: any) => {
		e.preventDefault();
		setDocName(e.currentTarget.value);
	};
	const handleSubmit = (e: any) => {
		e.preventDefault();
		if (docName === '') {
			alert('Please Enter Document Name');
		} else {
			console.log(docName);
		}
	};
	const handleDelete = () => {};
	const handleSave = () => {};
	return (
		<header className={style.header}>
			<Menu menu={menu} setMenu={setMenu} />
			<nav>
				<ul>
					<li>Markdown</li>
					<li>
						<img src={documentIcon} alt="Document Icon" />{' '}
						<form className={style.document_input} onSubmit={handleSubmit}>
							<label htmlFor="documentname">Document Name</label>
							<input
								type="text"
								name="documentname"
								id="documentname"
								value={docName}
								onChange={handleChange}
							/>
						</form>
					</li>
				</ul>
				<ul>
					<li>
						<button type="button" onClick={handleDelete}>
							<img src={deleteIcon} alt="Delete Icon" />
						</button>
					</li>
					<li>
						<button type="button" onClick={handleSave}>
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
