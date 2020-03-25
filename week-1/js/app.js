/**
 * React for my One Page Website
 */

const siteTitle = <h1 className="site-title">React Bootcamp Week 1 Homework</h1>;
const introContent = <h2>Hello React</h2>;
const footerContent = <p>2020 React Bootcamp | Cameron Campbell</p>;

// Basic styling options.
const blueStyle = {
	backgroundColor: '#0070d9'
};
const contentStyle = {
	backgroundColor: '#F5F7FD'
};


// Create Header Component
function Header() {
	return (
		<header className='header' style={blueStyle}>
			{siteTitle}
		</header>
	);
}

// Create Main Content Component
function MainContent() {
	return (
		<main className='main' style={contentStyle}>
			{introContent}
		</main>
	);
}

// Create Footer Component
function Footer() {
	return (
		<footer className='footer' style={blueStyle}>
			{footerContent}
		</footer>
	);
}

// Return a Fragment with all my components.
const App = () => (
	<React.Fragment>
		<Header />
		<MainContent />
		<Footer />
	</React.Fragment>
);

ReactDOM.render(
	// Render App Components
	<App />,
	document.getElementById('root')
);
