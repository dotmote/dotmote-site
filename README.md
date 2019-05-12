# Site for Dotmote Labs

## Required CLI Tools
- [Gatsby CLI](https://www.gatsbyjs.org/docs/quick-start/): Run `npm install -g gatsby-cli`

## Installation

1. `git clone` the repo
2. `cd` into the repo on your local machine
3. Run `npm install`
4. Run `gatsby develop` to start a development server
5. Run `npm run deploy` to deploy a new version of the site to GitHub Pages

## Editing MDX Pages
Edit the `.mdx` files in the `mdx` directory. Pages that depend on data from `.mdx` files will send a GraphQL query at build time to pass in to the `<MDXRenderer>` component. See https://gatsby-mdx.netlify.com/ for more information.