import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gatsby-demo`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        crossOrigin: `use-credentials`,
      },
      
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    `gatsby-plugin-mdx`,
     `gatsby-plugin-offline`,
     `gatsby-transformer-sharp`,
      
    
  ],
}

export default config
