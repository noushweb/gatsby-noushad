const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Uiux {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: "/projects/" + node.frontmatter.slug,
      component: path.resolve("./src/templates/uiux-details.js"),
      context: { slug: node.frontmatter.slug },
    })
  })
}
