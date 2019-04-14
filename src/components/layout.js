/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';

import Header from './header';
import './layout.css';

import heartIcon from '../svg/ic_favorite_black_24px.svg';
import StyledSplashBlock from '../components/StyledSplashBlock';

const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={(data) => (
			<div>
				<Header siteTitle={data.site.siteMetadata.title} />
				<div
					style={{
						// margin: `0 auto`,
						// maxWidth: 960,
						// padding: `0px 1.0875rem 1.45rem`,
						paddingTop: 0
					}}
				>
					<main>{children}</main>
					<StyledSplashBlock style={{ height: '100vh', background: '#F6AE2D' }}>
						<h1
							style={{
								color: 'white',
								position: 'relative',
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								justifyContent: 'center',
								alignItems: 'center',
								display: 'flex'
							}}
						>
							Learn More
						</h1>
						<div>
							<h2>
								<Link
									to="/products"
									style={{
										color: `white`,
										textDecoration: `none`
									}}
								>
									Products
								</Link>
							</h2>
							<h2>
								<Link
									to="/research"
									style={{
										color: `white`,
										textDecoration: `none`
									}}
								>
									Research
								</Link>
							</h2>
							<h2>
								<Link
									to="/contact-us"
									style={{
										color: `white`,
										textDecoration: `none`
									}}
								>
									Contact Us
								</Link>
							</h2>
						</div>
					</StyledSplashBlock>
					<footer style={{ textAlign: 'center', paddingTop: '1em', paddingBottom: '1em' }}>
						© {new Date().getFullYear()}, Made with{' '}
						<img className="svg-icon" src={heartIcon} alt="heart icon" /> in Seattle, San Francisco, and San
						Diego
					</footer>
				</div>
			</div>
		)}
	/>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
