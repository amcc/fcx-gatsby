import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

import { Flex, Box } from "@rebass/grid/emotion" //https://github.com/rebassjs/grid
import { rhythm } from "../utils/typography"
// import styled from "@emotion/styled"
import { css } from "@emotion/core"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>FCX</h1>
      <Flex
        // mx={[0, -1, -2]}
        flexWrap="wrap"
        css={css`
          margin-top: ${rhythm(2)};
        `}
      >
        <Box width={1} px={[1, 1, 2]} key={`box-recent-projects`}>
          <h2>Recent Articles</h2>
        </Box>

        {data.allNodeIssue.edges.map(({ node }) => (
          <Box width={1} px={[1, 1, 2]} key={`box-${node.id}`}>
            <div key={node.id}>
              <Link to={`${node.fields.slug}`}>
                {node.relationships.field_issue_media.map(
                  ({ relationships }) => (
                    <Img
                      key={
                        relationships.field_media_image.localFile
                          .childImageSharp.id
                      }
                      fluid={
                        relationships.field_media_image.localFile
                          .childImageSharp.fluid
                      }
                    />
                  )
                )}
                <h3>{node.title}</h3>
              </Link>
              <Flex
                // mx={[0, -1, -2]}
                flexWrap="wrap"
                css={css`
                  margin-top: ${rhythm(2)};
                `}
              >
                {node.relationships.node__article.map((node, i) => (
                  <Box
                    width={[1 / 3, 1 / 3, 1 / 4, 1 / 5]}
                    px={[1, 1, 2]}
                    key={`box-${node.id}`}
                  >
                    <div key={node.id}>
                      <Link to={`${node.path.alias}`}>
                        {node.relationships.field_article_media.map(
                          ({ relationships }) => (
                            <Img
                              key={
                                relationships.field_media_image.localFile
                                  .childImageSharp.id
                              }
                              fluid={
                                relationships.field_media_image.localFile
                                  .childImageSharp.fluid
                              }
                            />
                          )
                        )}
                        <h3>{node.title}</h3>
                      </Link>

                      {/* <div dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
                      {/* <PostIcons node={node} /> */}
                    </div>
                  </Box>
                ))}
              </Flex>
            </div>
          </Box>
        ))}
      </Flex>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allNodeArticle(sort: { fields: [created], order: DESC }, limit: 4) {
      edges {
        node {
          id
          title
          fields {
            slug
          }
          created
          relationships {
            field_article_media {
              relationships {
                field_media_image {
                  localFile {
                    childImageSharp {
                      id
                      fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    allNodeIssue(sort: { fields: [created], order: DESC }) {
      edges {
        node {
          id
          title
          fields {
            slug
          }
          created
          relationships {
            field_issue_media {
              relationships {
                field_media_image {
                  localFile {
                    childImageSharp {
                      id
                      fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
            node__article {
              title
              path {
                alias
              }
              relationships {
                field_article_media {
                  relationships {
                    field_media_image {
                      localFile {
                        childImageSharp {
                          id
                          fluid(maxWidth: 300) {
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
