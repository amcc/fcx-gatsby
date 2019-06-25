import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Flex, Box } from "@rebass/grid/emotion" //https://github.com/rebassjs/grid

import HomeVideo from "../components/homeVideo"

// import styled from "@emotion/styled"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import ArticleFeed from "../components/articleFeed"
// import HeroThree from "../components/heroThree"

import {
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
  bottom: 0vh;
  font-weight: 200;
  width: 80%;
  p {
    font-size: 1.3rem;
    font-weight: 500;
  }
  /* padding: 10vh 0 0 0; */
  a {
    text-decoration: none;
    color: white;
  }
  h2 {
    text-transform: uppercase;
    border-bottom: 2px solid gray;
    font-size: 1.3rem;
    padding-bottom: 0.3rem;
    margin-bottom: 0.2rem;
  }
  @media (min-width: 40em) {
    bottom: 20vh;
    width: 70%;
    p {
      font-size: 2em;
    }
    /* padding: 7vh 0 0 0; */
    bottom: 10vh;
  }
`

const HomeTitle = css`
  /* font-weight: 400; */
  text-transform: uppercase;
  text-align: center;

    font-weight: 400;
    font-family: "lunch24", Helvetica, Arial, sans-serif;
  
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

class IndexPage extends Component {

  render() {
    // const issues = this.props.data.allNodeIssue
    const issue = this.props.data.allNodeIssue.edges[0].node

    const articleNodes = this.props.data.allNodeArticle.edges
    const articles = []
    articleNodes.map(({node} , i) => {
      articles.push(node)
    })

    return (
      <Layout>
        <SEO title="Home" />
        <HeroContainer css={HeroStyles}>
          {/* <HeroThree /> */}
          <HomeVideo
            video="fcx-bg-V3.mp4"
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
                <p>{issue.field_byline}</p>
              </Link>
            </CurrentIssue>
          </HeroTextOverlay>
          ß
        </HeroContainer>
        <ArticleFeed articles={articles} />
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allNodeArticle(sort: { fields: [field_date], order: DESC }, limit: 25) {
      edges {
        node {
          ...ArticleFeed
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
                      fluid(
                        maxWidth: 1400
                        quality: 75
                        ) {
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
