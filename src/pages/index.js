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

import {
  backgroundColours,
  ArticleLink,
  GridBoxContainer,
  GridBox,
  GridHeader,
} from "../utils/styles"

// import { Video } from "cloudinary-react"

const HeroContainer = styled.div`
  position: relative;
`
const HeroStyles = css`
  height: 100vh;
  margin-bottom: 20px;
`
const HeroTextOverlay = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  height: 100%;
  width: 100%;
`
const HeroTextOverlayInner = styled.div`
  mix-blend-mode: difference;
  position: relative;
  height: 60%;
  width: 100%;
  color: white;
  a {
    color: white;
  }
  margin-top: 3vw;

  padding: 20vh 20vw 0 0vw;
  /* font-size: 300%; */
  font-weight: 100;
  h1 {
    font-size: 220%;
    color: white;
  }
  mix-blend-mode: difference;

  @media (min-width: 40em) {
    /* font-size: 150%; */
    h1 {
      font-size: 330%;
    }
    h3 {
      padding-left: 0;
    }
  }
  @media (min-width: 52em) {
    h1 {
      font-size: 300%;
    }
    font-size: 150%;
  }
  @media (min-width: 64em) {
    /* font-size: 160%; */
    h1 {
      font-size: 350%;
      /* font-weight: 800; */
    }
  }
`
const HomeTitle = css`
  font-weight: 100;
  text-transform: uppercase;
`

const HomeTitleFashion = css`
  display: block;
  margin-left: 5vw;
`
const HomeTitleCommunication = css`
  display: block;
  margin-left: 3vw;
`
const HomeTitleExchange = css`
  display: block;
  margin-left: 16vw;
`

const DownArrow = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 1000;
  width: 100%;
  /* height: 30%; */
  text-align: center;
  font-size: 270%;
  @media (min-width: 40em) {
    font-size: 300%;
  }
`
const DownArrowButton = css`
  color: black;
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
    const issues = this.props.data.allNodeIssue
    const articles = this.props.data.allNodeArticle
    console.log(issues)
    console.log(articles)
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
              position: relative;
              z-index: 0;
            `}
          />

          <HeroTextOverlay
            css={css`
              mix-blend-mode: difference;
            `}
          >
            <HeroTextOverlayInner>
              <h1 css={HomeTitle}>
                <span css={HomeTitleFashion}>Fashion</span>
                <span css={HomeTitleCommunication}>Communication</span>
                <span css={HomeTitleExchange}>Exchange</span>
              </h1>

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
          </HeroTextOverlay>
          <DownArrow>
            <FaChevronDown
              // size={40}
              css={DownArrowButton}
              onClick={this.handleOnClick}
            />
          </DownArrow>
        </HeroContainer>
        <Flex flexWrap="wrap" alignItems="stretch" ref={this.myDivToFocus}>
          {articles.edges &&
            articles.edges.map(({ node }, i) => {
              let articleIssue = new Array()
              node.relationships.field_issue_reference.map(
                ({ drupal_id }, i) => {
                  articleIssue.push(drupal_id)
                }
              )
              console.log("Issue = " + issues.edges[0].node.drupal_id)
              console.log("articleIssue = " + articleIssue)
              console.log(articleIssue.includes(issues.edges[0].node.drupal_id))
              if (articleIssue.includes(issues.edges[0].node.drupal_id)) {
                return (
                  <Box
                    width={[1 / 2, 1 / 3]}
                    px={[1, 1, 2]}
                    key={`article-box-${i}`}
                    css={[GridBoxContainer, ArticleLink]}
                  >
                    <Link to={`${node.path.alias}`}>
                      <article
                        css={GridBox}
                        key={node.id}
                        css={css`
                        background-color: '${
                          backgroundColours[
                            Math.floor(Math.random() * backgroundColours.length)
                          ]
                        }';
                      `}
                      >
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
                )
              }
            })}
        </Flex>
        {/* {articles.edges.map(({ node }, i) => {
            return (
            <div key={i}>
              <h3>issue</h3>
              <p>{issues.edges[0].node.drupal_id}</p>
              <h3>article</h3>
              <p>{node.title}</p>
              <p>{node.drupal_id}</p>
              {node.relationships.field_issue_reference.map(
                ({ drupal_id }, i) => {
                  return (
                    <p>
                      issueref-<b>{drupal_id}</b>
                    </p>
                  )
                }
              )}
            </div>
          )
        })} */}
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allNodeArticle(sort: { fields: [field_date], order: DESC }, limit: 100) {
      edges {
        node {
          id
          drupal_id
          title
          fields {
            slug
          }
          path {
            alias
          }
          created
          field_date
          relationships {
            field_issue_reference {
              drupal_id
            }
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
          drupal_id
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
