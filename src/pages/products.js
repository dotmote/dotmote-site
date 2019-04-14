import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import StyledSplashBlock from '../components/StyledSplashBlock';

const ProductsPage = (props) => (
	<Layout>
		<SEO title="Products" keywords={[ `Dotmote Labs`, `sapflow`, `iot` ]} />
		<StyledSplashBlock style={{ height: '100vh' }}>
			<Img style={{ maxHeight: '100vh', position: 'inherit' }} fluid={props.data.space.childImageSharp.fluid} />
			<h1
				style={{
					color: 'white',
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					justifyContent: 'center',
					alignItems: 'center',
					display: 'flex',
					textShadow: '1px 1px 2px black'
				}}
			>
				Products
			</h1>
		</StyledSplashBlock>
		<div
			style={{
				margin: `0 auto`,
				maxWidth: 960,
				padding: `0px 1.0875rem 1.45rem`
			}}
		>
			<h1>Sapflow Monitor</h1>
			<p>Insert copy here</p>
			<h1>Micro-Met Station</h1>
			<p>Insert copy here</p>
		</div>
	</Layout>
);

export default ProductsPage;

export const pageQuery = graphql`
	query {
		space: file(relativePath: { eq: "space.jpg" }) {
			...fluidImage
		}
	}
`;
