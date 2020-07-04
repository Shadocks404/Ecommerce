const products = require("./src/products")

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    products: [...products],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-datocms",
      options: { apiToken: "31e54191971997b0154aa6f7dad551" },
    },
    {
      resolve: "gatsby-plugin-snipcart",
      options: {
        apiKey:
          "ZTZkMGE1MTItYjgwOC00Yjc0LTkwZTItMGQxYjM0NjliYTMyNjM3MjkzOTQwMTUxMDMwODg2",
        autopop: false,
        js: "https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.js",
        jquery: false,
        styles: "https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.css",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
