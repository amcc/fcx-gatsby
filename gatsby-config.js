module.exports = {
  siteMetadata: {
    title: `FCX`,
    description: `Fashion Communication Exchange, London College of Fashion, University of the Arts London`,
    author: `@amcc`,
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
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://fcxdrupal.test/`,
        // apiBase: `jsonapi`,
        // links: {
        //   article: "http://fcxdrupal.test/jsonapi/node/article",
        //   issue: "http://fcxdrupal.test/jsonapi/node/issue",
        //   pathauto: "http://fcxdrupal.test/jsonapi/pathauto_pattern/pathauto_pattern",
        // }
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
