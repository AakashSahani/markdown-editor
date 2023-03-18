import './App.css';
import Header from './components/Header/Header';

function App() {
	return (
		<>
			<Header />
			<div>
				<textarea name="input" id="input" cols={80} rows={40}></textarea>
			</div>
			<div className="container">
				<div className="markdown" id="markdown"></div>
			</div>
		</>
	);
}

export default App;
