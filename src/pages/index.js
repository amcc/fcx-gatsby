import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

import { Flex, Box } from "@rebass/grid/emotion" //https://github.com/rebassjs/grid
import { rhythm } from "../utils/typography"
import HeroImage from "../components/heroimage"
import { FaChevronDown } from "react-icons/fa"

// import styled from "@emotion/styled"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

// import Three from "../components/three"
import HeroThree from "../components/heroThree"

import { GridBoxContainer, GridBox, GridHeader } from "../utils/styles"

const HeroContainer = styled.div`
  position: relative;
`
const HeroStyles = css``
const HeroTextOverlay = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  height: 100%;
  width: 100%;
`
const HeroTextOverlayInner = styled.div`
  height: 60%;
  width: 100%;
  color: white;
  a {
    color: white;
  }
  margin-top: 3vw;
  padding: ${rhythm(1 / 2)} ${rhythm(1 / 2)} ${rhythm(1 / 2)} ${rhythm(1 / 2)};
  font-size: 90%;
  font-weight: 300;
  h1 {
    /* font-size: 160%; */
    color: white;
  }
  mix-blend-mode: difference;

  @media (min-width: 40em) {
    padding: ${rhythm(1 / 2)} 20vw 0 0;
    font-size: 150%;
    h1 {
      font-size: 150%;
    }
    h3 {
      padding-left: 0;
    }
  }
  @media (min-width: 52em) {
    padding: ${rhythm(1 / 2)} 20vw 0 0;
    h1 {
      font-size: 160%;
    }
    font-size: 150%;
  }
  @media (min-width: 64em) {
    padding: ${rhythm(1 / 2)} 30vw 0 0;
    font-size: 160%;
    h1 {
      font-size: 180%;
      font-weight: 300;
    }
  }
`
const DownArrow = styled.div`
  width: 100%;
  /* height: 30%; */
  text-align: center;
  font-size: 270%;
  @media (min-width: 40em) {
    font-size: 400%;
  }
`
const DownArrowButton = css`
  color: white;
  /* opacity: 0.8; */
  cursor: pointer;
  height: 100%;
`
const ThreeStyle = css`
  position: absolute;
  top: 0;
  z-index: 2;
  height: 100%;
  width: 100%;
`

class IndexPage extends Component {
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
    console.log(data)
    return (
      <Layout>
        <SEO title="Home" />

        <HeroContainer css={HeroStyles}>
          <HeroThree />

          <HeroTextOverlay>
            <HeroTextOverlayInner>
              <h1>Fashion Communication Exchange</h1>

              {/* <p>
                Nullam nec ante sit amet mi imperdiet commodo vel mollis nulla.
                Morbi sit amet lacinia augue, a vestibulum turpis. Nullam
                gravida in turpis sed luctus. Aliquam id porta magna. Sed
                viverra ultricies sem, auctor accumsan neque. Donec suscipit
                nulla eget turpis rhoncus cursus. Morbi hendrerit sodales lacus,
                nec sagittis orci bibendum id. Morbi blandit, nisl at feugiat
                tristique, ante elit laoreet neque, vitae auctor enim tortor
                vulputate dolor. In a fermentum est, et hendrerit purus.
              </p> */}
            </HeroTextOverlayInner>
            <DownArrow>
              <FaChevronDown
                // size={40}
                css={DownArrowButton}
                onClick={this.handleOnClick}
              />
            </DownArrow>
          </HeroTextOverlay>
        </HeroContainer>

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

          {data.allNodeIssue.edges.map(({ node, i }) => (
            <>
              <Box
                width={[1, 1 / 2]}
                px={[1, 1, 2]}
                key={`issuebox-${node.id}`}
                // css={GridBoxContainer}
              >
                <div key={`box-div-${node.id}`}>
                  <div>Current Issue</div>
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
                </div>
              </Box>
              <Box
                width={[1, 1 / 2]}
                px={[1, 1, 2]}
                key={`articlebox-${node.id}`}
              >
                <div 
                css={css`
                  padding-left: ${rhythm(1/3)};
                `}
                >Latest Articles</div>
                <Flex
                  // mx={[0, -1, -2]}
                  key={`box-div-flex-${node.id}`}
                  flexWrap="wrap"
                  css={css`
                    /* margin-top: ${rhythm(2)}; */
                  `}
                >
                  {node.relationships.node__article.map((node, i) => (
                    <Box
                      width={[1 / 2, 1 / 2]}
                      px={[1, 1, 2]}
                      key={`box-div-flex-box-${node.id}`}
                      css={GridBoxContainer}
                    >
                      <div
                        css={GridBox}
                        key={`box-div-flex-box-div-${node.id}`}
                      >
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
                          <h3 css={GridHeader}>{node.title}</h3>
                        </Link>

                        {/* <div dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
                        {/* <PostIcons node={node} /> */}
                      </div>
                    </Box>
                  ))}
                </Flex>
              </Box>
            </>
          ))}
        </Flex>
      </Layout>
    )
  }
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

    placeholderImage: file(relativePath: { eq: "seats.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
