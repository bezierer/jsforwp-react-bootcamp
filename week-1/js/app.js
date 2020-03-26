/**
 * Renders the content & markup for the one-page website.
 */

const el = React.createElement;
const pEl = el('p', {}, '2020 JS for WP React Bootcamp | Cameron Campbell');
const siteTitle = el('h1', {}, 'Hello React');
const introContent = el('h2', {}, 'React Bootcamp Week 1 Homework');
const row = el('div', { className: 'row' }, null);

// Create our Header component.
function Header() {
	return el(
		'header',
		{
			className: 'site-header'
		},
		el(
			'div',
			{
				class: 'row'
			},
			siteTitle,
			el(
				'ul',
				{
					class: 'nav'
				},
				el(
					'li',
					null,
					el(
						'a',
						{
							href: '#'
						},
						'Home'
					)
				),
				el(
					'li',
					null,
					el(
						'a',
						{
							href: '#'
						},
						'About'
					)
				),
				el(
					'li',
					null,
					el(
						'a',
						{
							href: '#'
						},
						'Contact'
					)
				)
			)
		)
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
				height: '66vh'
			}
		},
		el(
			'div',
			{
				class: 'row'
			},
			introContent
		)
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
