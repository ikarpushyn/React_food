import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<nav className="#4a148c purple darken-4">
			<div className="nav-wrapper">
				<a href="/" className="brand-logo">
					React Recipe
				</a>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li>
						<a href="https://ikarpushyn.github.io/react-shop/" target="_blank" rel="noreferrer">
							Repo
						</a>
					</li>
					<li>
						<Link to="/About">About</Link>
					</li>
					<li>
						<Link to="/Contact">Contact</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
