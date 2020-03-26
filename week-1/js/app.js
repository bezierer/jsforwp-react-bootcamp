/**
 * Renders the content & markup for the one-page website.
 */

const el = React.createElement;
const pEl = el('p', {}, '2020 JS for WP React Bootcamp | Cameron Campbell');
const siteTitle = el('h1', {}, 'React Bootcamp Week 1 Homework');
const introContent = el('h2', {}, 'Hello React');

// Create Header Component.
function Header() {
	return el(
		'header',
		{
			id: 'site-header',
			style: {
				backgroundColor: '#fff'
			}
		},
		siteTitle
	);
}

// Create Header Component.
function MainContent() {
	return el(
		'main',
		{
			id: 'main',
			style: {
				backgroundColor: '#f5f7fd',
				height: '60vh'
			}
		},
		introContent
	);
}

// Create Footer Component.
function Footer() {
	return el(
		'footer',
		{
			className: 'site-footer',
			style: {
				backgroundColor: '#0070d9'
			}
		},
		pEl
	);
}

// Combine all our components into the React Fragment.
function App() {
	return el(React.Fragment, {}, Header(), MainContent(), Footer());
}

ReactDOM.render(
	// Call App() to render our markup.
	App(),
	document.getElementById('root')
);
