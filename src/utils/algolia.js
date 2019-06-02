const articleQuery = `{
  allNodeArticle {
    edges {
      node {
        id
        title
        field_byline
        fields {
          slug
        }
      }
    }
  }
}`

const issueQuery = `{
  allNodeIssue {
    edges {
      node {
        id
        title
        field_byline
        fields {
          slug
        }
      }
    }
  }
}`

const flatten = arr =>
  arr.map(({ node }) => ({
    ...node,
  }))
const settings = { attributesToSnippet: [`field_byline:20`] }

const queries = [
  {
    query: articleQuery,
    transformer: ({ data }) => flatten(data.allNodeArticle.edges),
    indexName: `Articles`,
    settings,
  },
  {
    query: issueQuery,
    transformer: ({ data }) => flatten(data.allNodeIssue.edges),
    indexName: `Issues`,
    settings,
  },
]

module.exports = queries