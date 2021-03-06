const queries = require("./src/utils/algolia")

require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteUrl: "https://fcx.netlify.com",
    title: `FCX`,
    description: `Fashion Communication Exchange, London College of Fashion, University of the Arts London`,
    author: `@amcc`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Fashion Communication Exchange (FCX)`,
        short_name: `FCX`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/fcx-favicon.png`, // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
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
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: true,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-drupal`,
      options: {
        // baseUrl: `http://fcxdrupal.test/`,
        // disallowedLinkTypes: [`self`, `describedby`],
        baseUrl: `http://fcx.mcclymont.co/`,
        // apiBase: `jsonapi`,
        // links: {
        //   article: "http://fcxdrupal.test/jsonapi/node/article",
        //   issue: "http://fcxdrupal.test/jsonapi/node/issue",
        //   pathauto: "http://fcxdrupal.test/jsonapi/pathauto_pattern/pathauto_pattern",
        // },
        // concurrentFileRequests: 3,
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 1000, // default: 1000
      },
    },
    // `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://fcx.netlify.com",
        sitemap: "https://fcx.netlify.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
}
