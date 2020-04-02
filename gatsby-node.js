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
  ).then((result) => {
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

// schema definitions
// https://www.gatsbyjs.org/docs/schema-customization/#creating-type-definitions
// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//   type allNodeIssue implements Node {
//     relationships: node__issueRelationships
//   }
//   type node__issueRelationships {
//     field_issue_media: media__image @link(from: "field_media_image___NODE")
//     field_issue_pdf: local__file @link(from: "field_media_image___NODE")
//   }
//   type field_issue_pdf {
//     localfile: localfile
//   }
//   type localfile {
//     publicURL: String
//   }
//   `
//   createTypes(typeDefs)
// }
// type MarkdownRemark implements Node {
//       frontmatter: Frontmatter
//     }
//     type Frontmatter {
//       tags: [String!]!
//     }

//   field_issue_media {
//     relationships {
//       field_media_image {
//         localFile {
//           childImageSharp {
//             id
//             fluid(maxWidth: 1400, quality: 75) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }

// type node__issueRelationships implements Node {
//   field_issue_media: field_issue_media
// }
// type field_issue_media {
//   relationships: relationships
// }
// type relationships {
//   field_media_image: field_media_image
// }
// type field_media_image {
//   localFile : localFile
// }
// type localFile {
//   childImageSharp : childImageSharp
// }
// type childImageSharp {
//   id: Int
//   fluid : fluid
// }
// type fluid {
//   id: Int
//   maxWidth: Int
//   quality: Int
// }
