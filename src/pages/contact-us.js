import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import StyledSplashBlock from '../components/StyledSplashBlock';

const ContactUsPage = (props) => (
	<Layout>
		<SEO title="Contact Us" keywords={[ `Dotmote Labs`, `sapflow`, `iot` ]} />
		<StyledSplashBlock style={{ height: '100%', position: 'relative' }}>
			<Img style={{ width: '100%' }} fluid={props.data.contact.childImageSharp.fluid} />
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
				Contact Us
			</h1>
		</StyledSplashBlock>
		<div
			style={{
				margin: `0 auto`,
				maxWidth: 960,
				padding: `1.0875rem 1.45rem`
			}}
		>
			<p>We'd love to chat. Reach out to us at: [email].</p>
		</div>
	</Layout>
);

export default ContactUsPage;

export const pageQuery = graphql`
	query {
		contact: file(relativePath: { eq: "contact.jpg" }) {
			...fluidImage
		}
	}
`;
