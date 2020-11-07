require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `Design Technologist Handbook`,
    description: ``
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Design Technologist Handbook`,
        short_name: `Design Techologist`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/dt.svg` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-typescript`
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `book`,
        path: `${__dirname}/src/book`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-autolink-headers`]
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`
          },
          {
            resolve: `gatsby-remark-images`
          },
          `gatsby-remark-copy-linked-files`
        ]
      }
    },
    "gatsby-remark-reading-time",
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_ID,
        head: true
      }
    },
    {
      resolve: `gatsby-plugin-webpack-size`,
      options: {
        // Set to true to show bundle sizes in development mode as well
        development: true
      }
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.MAILCHIMP_URL,
        timeout: 3500
      }
    },
    "gatsby-plugin-preload-fonts"

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
