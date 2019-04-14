import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import StyledSplashBlock from '../components/StyledSplashBlock';

const ResearchPage = (props) => (
	<Layout>
		<SEO title="Research" keywords={[ `Dotmote Labs`, `sapflow`, `iot` ]} />
		<StyledSplashBlock style={{ height: '100vh' }}>
			<Img style={{ maxHeight: '100vh', position: 'inherit' }} fluid={props.data.lab.childImageSharp.fluid} />
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
				Research
			</h1>
		</StyledSplashBlock>
		<div
			style={{
				margin: `0 auto`,
				maxWidth: 960,
				padding: `0px 1.0875rem 1.45rem`
			}}
		>
			<h1>UW Sapflow</h1>
			<p>Insert copy here</p>
			<h1>UC Berkeley Sapflow</h1>
			<p>Insert copy here</p>
		</div>
	</Layout>
);

export default ResearchPage;

export const pageQuery = graphql`
	query {
		lab: file(relativePath: { eq: "lab.jpg" }) {
			...fluidImage
		}
	}
`;
