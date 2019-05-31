import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

import { Flex, Box } from "@rebass/grid/emotion" //https://github.com/rebassjs/grid
import { rhythm } from "../utils/typography"
// import HeroImage from "../components/heroimage";
// import { FaChevronDown } from "react-icons/fa";
// import styled from "@emotion/styled"
import { css } from "@emotion/core"
// import styled from "@emotion/styled";

import { GridBoxContainer, GridBox, GridHeader } from "../utils/styles"

const Row = props => <Flex {...props} mx={-3} />

const Column = props => <Box {...props} px={3} flex="1 1 auto" />

const articleLink = css`
   article {
    height: 280px;
    position: relative;
    h3 {
      position: absolute;
      bottom: 0;
    }
  }
`

class Articles extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //    field: value
    // }
    //creates a reference for your element to use
    this.myDivToFocus = React.createRef()
  }

  // load the smoothscroll here as it requires window:
  // https://github.com/webpack/react-starter/issues/37
  componentDidMount() {
    const smoothscroll = require("smoothscroll-polyfill")
    // kick off the polyfill!
    // this hopefully fixes ios smooth
    smoothscroll.polyfill()
  }

  handleOnClick = event => {
    //.current is verification that your element has rendered
    if (this.myDivToFocus.current) {
      this.myDivToFocus.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  render() {
    const data = this.props.data
    return (
      <Layout>
        <SEO title="Issues" />

        <Flex
          // mx={[0, -1, -2]}
          flexWrap="wrap"
          css={css`
            margin-top: ${rhythm(2)};
          `}
          ref={this.myDivToFocus}
        >
          <Box
            width={1}
            px={[1, 1, 2]}
            key={`box-recent-projects`}
            // css={GridBoxContainer}
          />

          {data.allNodeIssue.edges.map(({ node }, i) => (
            <Box
              width={1}
              px={[1, 1, 2]}
              key={`box-${i}`}
              // css={GridBoxContainer}
            >
              <div key={node.id}>
                <Link to={`${node.fields.slug}`}>
                  {/* {node.relationships.field_issue_media.map(
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
                  )} */}
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
                      width={[1 / 2, 1 / 3]}
                      px={[1, 1, 2]}
                      key={`article-box-${i}`}
                      css={[GridBoxContainer, articleLink]}
                    >
                      <Link to={`${node.path.alias}`}>
                        <article css={GridBox} key={node.id}>
                          {node.relationships.field_article_media && (
                            // node.relationships.field_article_media.map(
                            //   ({ relationships }) => (
                            <Img
                              key={
                                node.relationships.field_article_media[0]
                                  .relationships.field_media_image.localFile
                                  .childImageSharp.id
                              }
                              fluid={
                                node.relationships.field_article_media[0]
                                  .relationships.field_media_image.localFile
                                  .childImageSharp.fluid
                              }
                            />
                          )
                          //   )
                          // )
                          }
                          <h3 css={GridHeader}>{node.title}</h3>
                        </article>
                      </Link>
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
}

export default Articles

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
                      fluid(maxWidth: 900) {
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
                          fluid(maxWidth: 400) {
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
