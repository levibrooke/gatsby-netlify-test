module.exports = {
  siteMetadata: {
    title: 'Levi Porter'
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: "markdown-pages",
      }
    },
    `gatsby-transformer-remark`
  ]
};