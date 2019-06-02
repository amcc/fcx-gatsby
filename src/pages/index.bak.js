import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

import { Flex, Box } from "@rebass/grid/emotion" //https://github.com/rebassjs/grid
import { rhythm } from "../utils/typography"
import HomeVideo from "../components/homeVideo"
import { FaChevronDown } from "react-icons/fa"

// import styled from "@emotion/styled"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

// import Three from "../components/three"
// import HeroThree from "../components/heroThree"

import { GridBoxContainer, GridBox, GridHeader } from "../utils/styles"

// import { Video } from "cloudinary-react"

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

  padding: 10rem 20vw 0 20vw;
  font-size: 300%;
  font-weight: 800;
  h1 {
    /* font-size: 160%; */
    color: white;
  }
  mix-blend-mode: difference;

  @media (min-width: 40em) {
    font-size: 150%;
    h1 {
      font-size: 300%;
    }
    h3 {
      padding-left: 0;
    }
  }
  /* @media (min-width: 52em) {

    h1 {
      font-size: 300%;
    }
    font-size: 150%;
  }
  @media (min-width: 64em) {
    font-size: 160%;
    h1 {
      font-size: 300%;
      font-weight: 800;
    }
  } */
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
    // console.log(data)
    // console.log(this.theposition)
    return (
      <Layout>
        <SEO title="Home" />

        <HeroContainer css={HeroStyles}>
          {/* <HeroThree /> */}
          <HomeVideo
            // video={`Comp_2_2_c6wxxb`}
            video="fcxblur.mp4"
            css={css`
              mix-blend-mode: difference;
              margin-top: -80px;
            `}
          />

          <HeroTextOverlay
            css={css`
              mix-blend-mode: difference;
            `}
          >
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
          key={`flex-recent-projects`}
        >
          <Box
            width={1}
            px={[1, 1, 2]}
            key={`box-recent-projects`}
            // css={GridBoxContainer}
          />

          {data.allNodeIssue.edges.map(({ node }, i) => (
            <Box key={i} width={[1]} px={[1, 1, 2]}>
              <Box
                width={[1, 1 / 2]}
                px={[1, 1, 2]}
                key={`issuebox-${i}`}
                // css={GridBoxContainer}
              >
                <div key={`box-div-${node.id}`}>
                  <h2 key={`box-h2-${node.id}`}>Current Issue</h2>
                  <Link to={`${node.fields.slug}`} key={`box-link-${node.id}`}>
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
                    <h3 key={`box-title-${node.id}`}>{node.title}</h3>
                  </Link>
                </div>
              </Box>
              <Box
                width={[1, 1 / 2]}
                px={[1, 1, 2]}
                key={`articlebox-${node.id}`}
              >
                <h2
                  css={css`
                    padding-left: ${rhythm(1 / 3)};
                  `}
                  key={`articlebox-h2-${node.id}`}
                >
                  Latest Articles
                </h2>
                <Flex
                  // mx={[0, -1, -2]}
                  key={`box-latestarticles-flex-${node.id}`}
                  flexWrap="wrap"
                  css={css`
                    /* margin-top: ${rhythm(2)}; */
                  `}
                >
                  {node.relationships.node__article.map((node, i) => (
                    <Box
                      width={[1 / 2, 1 / 2]}
                      px={[1, 1, 2]}
                      key={`box-div-flex-box-${i}`}
                      css={GridBoxContainer}
                    >
                      <div css={GridBox} key={`box-div-flex-box-div-${i}`}>
                        <Link
                          to={`${node.path.alias}`}
                          key={`box-div-flex-box-div-link-${i}`}
                        >
                          {node.relationships.field_article_media &&
                            // node.relationships.field_article_media.relationships &&
                            // node.relationships.field_article_media.map(
                            //   ({ relationships }) => (
                                <Img
                                  key={
                                    node.relationships.field_article_media[0].relationships.field_media_image.localFile
                                      .childImageSharp.id
                                  }
                                  fluid={
                                    node.relationships.field_article_media[0].relationships.field_media_image.localFile
                                      .childImageSharp.fluid
                                  }
                                />
                              // )
                            // )
                            }
                          <h3
                            css={GridHeader}
                            key={`box-div-flex-box-div-h3-${i}`}
                          >
                            {node.title}
                          </h3>
                        </Link>

                        {/* <div dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
                        {/* <PostIcons node={node} /> */}
                      </div>
                    </Box>
                  ))}
                </Flex>
              </Box>
            </Box>
          ))}
        </Flex>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allNodeArticle(sort: { fields: [field_date], order: DESC }, limit: 4) {
      edges {
        node {
          id
          title
          fields {
            slug
          }
          created
          field_date
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

    allNodeIssue(sort: { fields: [field_date], order: DESC }, limit: 1) {
      edges {
        node {
          id
          title
          fields {
            slug
          }
          created
          field_date
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
