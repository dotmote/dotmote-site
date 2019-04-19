import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

import StyledSplashBlock from '../components/StyledSplashBlock';

const IndexPage = (props) => (
	<Layout>
		<SEO title="Home" keywords={[ `Dotmote Labs`, `sapflow`, `iot` ]} />
		<StyledSplashBlock style={{ height: '100%', position: 'relative' }}>
			<Img style={{ width: '100vw' }} fluid={props.data.forest2.childImageSharp.fluid} />
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
				Making Sense of Our World
			</h1>
		</StyledSplashBlock>
	</Layout>
);

export default IndexPage;

export const fluidImage = graphql`
	fragment fluidImage on File {
		childImageSharp {
			fluid(maxWidth: 1000) {
				...GatsbyImageSharpFluid
			}
		}
	}
`;

export const pageQuery = graphql`
	query {
		forest2: file(relativePath: { eq: "forest2.jpg" }) {
			...fluidImage
		}
	}
`;
