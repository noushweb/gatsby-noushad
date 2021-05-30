module.exports = {
  siteMetadata: {
    title: `Mohammed Noushad`,
    description: `freelance designer, visual design, web designer, digital products, interactive prototypes, brand design,logo design,motion graphics, graphics design`,
    author: `Noushad`,
    siteUrl: `https://www.mohammednoushad.com`,
  },
  plugins: [
    "gatsby-transformer-remark",
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uiuxlist`,
        path: `${__dirname}/src/uiuxlist`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `motionlist`,
        path: `${__dirname}/src/motionlist`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `graphiclist`,
        path: `${__dirname}/src/graphiclist`,
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
        icon: `src/images/noushadlogo.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sitemap`,
  ],
}
