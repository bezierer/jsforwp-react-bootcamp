import React from 'react';

function Header() {
	return (
		<header className="site-header">
			<div class="row">
				<h1>Hello React</h1>
				<ul class="nav">
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;
