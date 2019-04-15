import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import StyledSplashBlock from '../components/StyledSplashBlock';

const ResearchPage = (props) => (
	<Layout>
		<SEO title="Research" keywords={[ `Dotmote Labs`, `sapflow`, `iot` ]} />
		<StyledSplashBlock style={{ height: '600px', position: 'relative' }}>
			<Img style={{ width: '100vw' }} fluid={props.data.lab.childImageSharp.fluid} />
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
