require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const slugify = require('./src/utils/slugify');

module.exports = {
  siteMetadata: {
    title: `EvocativeU`,
    description: ``,
    author: `Glenn Murray`,
    siteUrl: `https://evocativeu.com`,
    author: {
      name: `Glenn Murray.`,
      summary: ` I design and build cool software. `,
    },
    social: {
      linkedin: `https://www.linkedin.com/in/glenn-murray-61275228`,
    },
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

    // source mdx for content
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content`,
        name: 'content',
      },
    },
    // parse markdown with gatsby-plugin-mdx
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        root: __dirname,
        gatsbyRemarkPlugins: [
          // set up config for embedded images in mdx files
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 2048,
              quality: 100,
              linkImagesToOriginal: false,
              showCaptions: true,
              disableBgImageOnAlpha: true,
            },
          },
                 ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        stripMetadata: false,
      }
    },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    }, {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Arvo:700, 400, 200',
            'Noto Serif TC:400,700',
            'Open Sans:400,500,700',
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-8523256-6',
        // Puts tracking script in the head instead of the body
        head: false,
        cookieDomain: 'evocativeu.com',
      },
    },
  
    'gatsby-plugin-sharp-exif',
    'gatsby-plugin-image',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`, // make sure to put last in the array
  ],
};
