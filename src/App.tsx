import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Markdown from './components/Markdown/Markdown';
import MarkdownInput from './components/Markdown/MarkdownInput';

function App() {
	const [markdowninput, setMarkdownInput] = useState('');
	const [menu, setMenu] = useState(false);
	return (
		<>
			<Header menu={menu} setMenu={setMenu} />
			<section className="">
				{menu && <Sidebar />}
				<MarkdownInput
					markdowninput={markdowninput}
					setMarkdownInput={setMarkdownInput}
				/>
				<Markdown markdownOutput={markdowninput} />
			</section>
		</>
	);
}

export default App;
