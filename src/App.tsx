import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Markdown from './components/Markdown/Markdown';
import MarkdownInput from './components/Markdown/MarkdownInput';

function App() {
	const [markdowninput, setMarkdownInput] = useState(``);
	const [markdownCollection, setMarkdownCollection] = useState([]);
	const [menu, setMenu] = useState(false);
	return (
		<>
			<Header
				menu={menu}
				setMenu={setMenu}
				markdowninput={markdowninput}
				setMarkdownInput={setMarkdownInput}
				markdownCollection={markdownCollection}
				setMarkdownCollection={setMarkdownCollection}
			/>
			<section className="">
				{menu && (
					<Sidebar
						markdownCollection={markdownCollection}
						setMarkdownCollection={setMarkdownCollection}
					/>
				)}
				<MarkdownInput
					markdowninput={markdowninput}
					setMarkdownInput={setMarkdownInput}
				/>
				<Markdown
					markdowninput={markdowninput}
					setMarkdownInput={setMarkdownInput}
				/>
			</section>
		</>
	);
}

export default App;
