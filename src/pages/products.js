import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import StyledSplashBlock from '../components/StyledSplashBlock';
import { MDXRenderer } from 'gatsby-mdx';

const ProductsPage = (props) => (
	<Layout>
		<SEO title="Products" keywords={[ `Dotmote Labs`, `sapflow`, `iot` ]} />
		<StyledSplashBlock style={{ height: '100%', position: 'relative' }}>
			<Img style={{ width: '100%' }} fluid={props.data.space.childImageSharp.fluid} />
			<h1
				style={{
					color: 'white',
					textShadow: '1px 1px 2px black',
					position: 'absolute',
					left: '50%',
					top: '50%',
					transform: 'translate(-50%, -50%)'
				}}
			>
				Products
			</h1>
		</StyledSplashBlock>
		<div
			style={{
				margin: `0 auto`,
				maxWidth: 960,
				padding: `1.0875rem 1.45rem`
			}}
		>
			<MDXRenderer>{props.data.products.code.body}</MDXRenderer>
		</div>
	</Layout>
);

export default ProductsPage;

export const pageQuery = graphql`
	query {
		space: file(relativePath: { eq: "space.jpg" }) {
			...fluidImage
		}
		products: mdx(frontmatter: { title: { eq: "products" } }) {
			code {
				body
			}
		}
	}
`;
