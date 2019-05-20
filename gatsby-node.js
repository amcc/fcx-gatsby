/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

// Create a slug for each recipe and set it as a field on the node.
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `node__article`) {
    const slug = `${node.path.alias}/`
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
  if (node.internal.type === `node__issue`) {
    const slug = `${node.path.alias}/`
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const articleTemplate = path.resolve(`src/templates/article.js`)
  const issueTemplate = path.resolve(`src/templates/issue.js`)
  // Query for recipe nodes to use in creating pages.
  return graphql(
    `
      {
        allNodeArticle {
          edges {
            node {
              id
              path {
                alias
              }
              fields {
                slug
              }
            }
          }
        }
        allNodeIssue {
          edges {
            node {
              id
              path {
                alias
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create pages for each article.
    result.data.allNodeArticle.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: articleTemplate,
        context: {
          slug: node.fields.slug,
        },
      })
    })

    // Create pages for each issue.
    result.data.allNodeIssue.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: issueTemplate,
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })
}
