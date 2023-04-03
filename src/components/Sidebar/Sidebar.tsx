import { MarkdownCollection } from '../../interfaces/interface';

function Sidebar({
	markdownCollection,
	setMarkdownCollection,
}: MarkdownCollection) {
	return (
		<aside className="sidebar">
			{markdownCollection.length === 0 ? (
				<div>No Markdown available right now</div>
			) : (
				<ul>
					{markdownCollection.map((markdown) => (
						<li key={markdown.id}>{markdown.name}</li>
					))}
				</ul>
			)}
		</aside>
	);
}

export default Sidebar;
