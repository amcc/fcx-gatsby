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
  PaddedMobile,
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
  /* background: white; */
  /* mix-blend-mode: difference; */
  position: relative;
  height: 60%;
  width: 100%;
  color: white;
  a {
    color: white;
  }
  margin-top: 3vw;

  padding: 17vh 0vw 0 0vw;
  /* font-size: 300%; */
  font-weight: 00;
  h1 {
    font-size: 220%;
    font-weight: 600;
    color: white;
    margin: 0 auto;
  }
  mix-blend-mode: difference;

  @media (min-width: 40em) {
    padding: 18vh 0vw 0 0vw;
    /* font-size: 150%; */
    h1 {
      font-size: 250%;
    }
    h3 {
      padding-left: 0;
    }
  }
  @media (min-width: 52em) {
    h1 {
      font-size: 440%;
    }
    /* font-size: 150%; */
  }
  @media (min-width: 64em) {
    /* font-size: 160%; */
    h1 {
      font-size: 650%;
      /* font-weight: 800; */
    }
  }
`
const CurrentIssue = styled.div`
  position: absolute;
  /* mix-blend-mode: difference; */
  z-index: 100;
  bottom: 20vh;
  font-weight: 200;
  width: 80%;
  p {
    font-size: 100%;
    font-weight: 400;
  }
  /* padding: 10vh 0 0 0; */
  a {
    text-decoration: none;
    color: white;
  }
  h2 {
    text-transform: uppercase;
    border-bottom: 2px solid gray;
    font-size: 90%;
    padding-bottom: 0.2rem;
    margin-bottom: 0.2rem;
  }
  @media (min-width: 40em) {
    width: 70%;
    p {
    font-size: 100%;
  }
    /* padding: 7vh 0 0 0; */
    bottom: 10vh;
  }
`
const CurrentIssueRead = css`
  text-transform: uppercase;
  font-size: 70%;
  /* padding-left: 1rem; */
`
const HomeTitle = css`
  /* font-weight: 400; */
  text-transform: uppercase;
  text-align: center;
`

const HomeTitleFashion = css`
  display: block;
  margin-left: -5rem;
  @media (min-width: 40em) {
    margin-left: -8rem;
  }
  @media (min-width: 52em) {
    margin-left: -10.3rem;
  }
  @media (min-width: 64em) {
    margin-left: -15.5rem;
  }
`
const HomeTitleCommunication = css`
  display: block;
`
const HomeTitleExchange = css`
  display: block;
  margin-left: -1rem;
  @media (min-width: 40em) {
    margin-left: -1.6rem;
  }
  @media (min-width: 52em) {
    margin-left: -2.1rem;
  }
  @media (min-width: 64em) {
    margin-left: -2.9rem;
  }
`

const DownArrow = styled.div`
  position: absolute;
  bottom: 9vh;
  z-index: 1000;
  width: 100%;
  /* height: 30%; */
  text-align: center;
  font-size: 270%;
  @media (min-width: 40em) {
    font-size: 300%;
    bottom: 0vh;
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
    const issue = this.props.data.allNodeIssue.edges[0].node
    // console.log(issue)
    const articles = this.props.data.allNodeArticle
    let boxCount = 1
    let rowWidth = 0
    // console.log(issues)
    // console.log(articles)
    // console.log(this.theposition)
    return (
      <Layout>
        <SEO title="Home" />
        <HeroContainer css={HeroStyles}>
          {/* <HeroThree /> */}
          <HomeVideo
            video="fcxblur.mp4"
            css={css`
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
              <Flex>
                <Box flex="1 1 auto" alignSelf>
                  <h1 css={HomeTitle}>
                    <span css={HomeTitleFashion}>Fashion</span>
                    <span css={HomeTitleCommunication}>Communication</span>
                    <span css={HomeTitleExchange}>Exchange</span>
                  </h1>
                </Box>
              </Flex>
            </HeroTextOverlayInner>
            <CurrentIssue css={PaddedMobile}>
            <Link to={`${issue.path.alias}`}>
              <h2>current issue</h2>
              <p>
                {issue.field_byline}
                {/* <span css={CurrentIssueRead}>READ</span> */}
              </p>
            </Link>
          </CurrentIssue>
          </HeroTextOverlay>
          
          <DownArrow>
            <FaChevronDown
              // size={40}
              css={DownArrowButton}
              onClick={this.handleOnClick}
            />
          </DownArrow>
        </HeroContainer>
        <Flex
          mx={[0,-2,-2]}
          flexWrap="wrap"
          alignItems="space-evenly"
          ref={this.myDivToFocus}
          css={css`
            z-index: 100;
            position: relative;
          `}
        >
          {articles.edges &&
            articles.edges.map(({ node }, i) => {
              let articleIssue = new Array()

              node.relationships.field_issue_reference.map(
                ({ drupal_id }, i) => {
                  articleIssue.push(drupal_id)
                }
              )
              ///////////////////////////////
              // render an image, or a box //
              ///////////////////////////////

              let articleBox
              if (node.relationships.field_article_media) {
                articleBox = (
                  <Img
                    key={
                      node.relationships.field_article_media[0].relationships
                        .field_media_image.localFile.childImageSharp.id
                    }
                    fluid={
                      node.relationships.field_article_media[0].relationships
                        .field_media_image.localFile.childImageSharp.fluid
                    }
                    css={css`
                      height: 100%;
                      width: auto;
                    `}
                  />
                )
              } else {
                if (node.body) {
                  // trim the body
                  var maxLength = 500 // maximum number of characters to extract
                  //trim the string to the maximum length
                  var trimmedBody = node.body.processed.substr(0, maxLength)
                  //re-trim if we are in the middle of a word
                  trimmedBody = trimmedBody.substr(
                    0,
                    Math.min(trimmedBody.length, trimmedBody.lastIndexOf(" "))
                  )
                }

                articleBox = (
                  <div
                    css={css`
                      background: ${backgroundColours[
                        Math.floor(Math.random() * backgroundColours.length)
                      ]};
                      height: 100%;
                      width: auto;
                      padding: ${rhythm(1)};
                      color: white;
                      overflow: hidden;
                      text-decoration: none;
                      font-size: 80%;
                    `}
                    dangerouslySetInnerHTML={{ __html: trimmedBody }}
                  />
                )
              }

              ////////////////////
              // vary the width //
              ////////////////////

              let boxWidths = [1 / 3, 2 / 3]
              let box = boxWidths[Math.floor(Math.random() * boxWidths.length)]

              // if (boxCount > 3) {
              //   boxCount = 1
              // }

              if (boxCount > 3) {
                rowWidth = 0
                boxCount = 1
              }
              if (rowWidth >= 3) {
                rowWidth = 0
                boxCount = 1
              }

              if (rowWidth >= 2) {
                box = 1 / 3
                console.log("rowwidth is 2!!!!!")
              }
              rowWidth += box / (1 / 3)

              console.log("---start---")
              console.log("boxcount is " + boxCount)
              console.log("row width = " + rowWidth)
              console.log("box is " + box)
              console.log("---end---")

              boxCount++
              if (articleIssue.includes(issues.edges[0].node.drupal_id)) {
                return (
                  <Box
                    p={[0,2,2]}
                    fontSize={4}
                    width={[1, 1/2, box]}
                    color="white"
                    // bg="lightgrey"
                    // flex="1 1 auto"
                    alignSelf
                    css={css`
                      max-height: 300px;
                    `}
                    key={i}
                    css={[GridBoxContainer, ArticleLink]}
                  >
                    <Link to={`${node.path.alias}`}>
                      <article css={GridBox} key={node.id}>
                        <section>{node.field_date}</section>
                        <h3 css={[GridHeader]}>{node.field_byline}</h3>
                        {articleBox}
                      </article>
                    </Link>
                  </Box>
                )
              }
            })}
        </Flex>
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
          body {
            processed
          }
          field_date(formatString: "MMMM YYYY")
          field_byline
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
          path {
            alias
          }
          field_byline
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
