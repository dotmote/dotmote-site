import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import StyledSplashBlock from '../components/StyledSplashBlock';

const AboutPage = (props) => (
	<Layout>
		<SEO title="About" keywords={[ `Dotmote Labs`, `sapflow`, `iot` ]} />
		<StyledSplashBlock style={{ height: '100%', position: 'relative' }}>
			<Img
				style={{ width: '100%' }}
				imgStyle={{ filter: 'brightness(0.9)' }}
				fluid={props.data.team.childImageSharp.fluid}
			/>
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
				About
			</h1>
		</StyledSplashBlock>
		<div
			style={{
				margin: `0 auto`,
				maxWidth: 960,
				padding: `1.0875rem 1.45rem`
			}}
		>
			<p>
				Our goal is to make climate change research more accessible by providing open source hardware and
				software.
			</p>
			<p>
				We develop open source hardware and software to assess the impact of climate change. We aim to help
				hobbyists and researchers with cost-effective sensor solutions for collecting environmental and plant
				physiology data.
			</p>
		</div>
	</Layout>
);

export default AboutPage;

export const pageQuery = graphql`
	query {
		team: file(relativePath: { eq: "forest.jpg" }) {
			...fluidImage
		}
	}
`;
