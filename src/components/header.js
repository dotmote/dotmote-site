import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Header extends Component {
	componentDidMount() {
		window.addEventListener('scroll', function(e) {
			const nav = document.querySelector('header');
			if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
				nav.classList.add('nav-colored');
				nav.classList.remove('nav-transparent');
			} else {
				nav.classList.add('nav-transparent');
				nav.classList.remove('nav-colored');
			}
		});
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', function(e) {
			const nav = document.querySelector('header');
			if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
				nav.classList.add('nav-colored');
				nav.classList.remove('nav-transparent');
			} else {
				nav.classList.add('nav-transparent');
				nav.classList.remove('nav-colored');
			}
		});
	}

	render() {
		const { siteTitle } = this.props;

		return (
			<header
				style={{
					position: 'fixed',
					zIndex: 10,
					width: '100vw'
					// background: `#2E86AB`
					// marginBottom: `1.45rem`,
				}}
			>
				<div
					style={{
						margin: `0 auto`,
						padding: `1.45rem 1.0875rem`,
						display: 'flex'
					}}
					className=".nav-link-container"
				>
					<h1 style={{ margin: 0 }}>
						<Link
							to="/"
							style={{
								color: `white`,
								textDecoration: `none`,
								textShadow: '1px 1px 2px black'
							}}
						>
							{siteTitle}
						</Link>
					</h1>
				</div>
			</header>
		);
	}
}

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
