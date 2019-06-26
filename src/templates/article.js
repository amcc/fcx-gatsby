import { Link, graphql } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Video from "../components/video"
import { Flex, Box } from "@rebass/grid/emotion"
import { css } from "@emotion/core"
import { HeaderBarColour, SectionHeader } from "../utils/styles"
import { rhythm } from "../utils/typography"

const DateBox = css`
  text-align: right;
`
const Title = css`
  text-align: center;
`

const IssueImage = css`
  margin: ${rhythm(1)} 0;
  display: block;
`
const ArticleTemplate = ({ data }) => {

  const article = data.nodeArticle
  console.log(article)

  if (article.relationships.field_article_featured_image) {
    console.log(article.relationships.field_article_featured_image)
  }

  
  return (
    <Layout>
      <SEO title={`FCX | ` + article.title} />
      <SectionHeader>
        <Flex
          // mx={[0, -1, -2]}
          flexWrap="wrap"
        >
          <Box width={[1 / 2]} px={[0, 1, 2]} color={`black`}>
            <Link to={`/feed/`}>BACK TO FEED</Link>
          </Box>
          <Box width={[1 / 2]} px={[0, 1, 2]} css={DateBox}>
            {article.field_date}
          </Box>
        </Flex>
      </SectionHeader>
      <Flex
        // mx={[0, -1, -2]}
        flexWrap="wrap"
        justifyContent="space-between"
        // py={4}
        mx={4}
      >
        <Box width={[1]} my={4} px={6} css={Title}>
          <h1>{article.title}</h1>
        </Box>

        <Box width={[1, 1, 1 / 2]} px={[1, 2, 4]} my={4}>
          {article.relationships &&
            article.relationships.field_article_featured_image &&
            article.relationships.field_article_featured_image.map(
              ({ localFile }) => (
                <Img
                  key={localFile.childImageSharp.id}
                  fluid={localFile.childImageSharp.fluid}
                />
              )
            )}
        </Box>
        <Box width={[1, 1, 1 / 2]} px={[1, 2, 4]} my={4}>
          {article.field_byline && (
            <div
              dangerouslySetInnerHTML={{
                __html: article.field_byline,
              }}
            />
          )}
        </Box>
        

        {/* <Flex flexWrap="wrap" alignItems="stretch"> */}
        {article.relationships &&
          article.relationships.field_article_media &&
          article.relationships.field_article_media.map(
            ({ relationships }, i) => {
              return (
                <Box
                  p={1}
                  fontSize={4}
                  width={[1]}
                  color="white"
                  // bg="lightgrey"
                  // flex="1 1 auto"
                  alignSelf
                  css={css`
                    /* max-height: 300px; */
                  `}
                  key={i}
                >
                  <Img
                    // css={css`
                    //   height: 100%;
                    //   width: auto;
                    // `}
                    css={IssueImage}
                    key={
                      relationships.field_media_image.localFile.childImageSharp
                        .id
                    }
                    fluid={
                      relationships.field_media_image.localFile.childImageSharp
                        .fluid
                    }
                  />
                </Box>
              )
            }
          )}

        {article.relationships &&
          article.relationships.field_article_video &&
          article.relationships.field_article_video[0].relationships.bundle.relationships.media__remote_video.map(
            (video, i) => (
              <Box p={1} fontSize={4} width={[1]}>
                <Video
                  videoSrcURL={video.field_media_oembed_video}
                  videoTitle={video.name}
                  key={video.id}
                />
              </Box>
            )
          )}
          <Box width={[1]} px={[1, 2, 4]} my={4}>
          <Box width={[1, 1 / 2]}>
            {article.body && (
              <div
                dangerouslySetInnerHTML={{
                  __html: article.body.processed,
                }}
              />
            )}
          </Box>
        </Box>
      </Flex>
    </Layout>
  )
}

export default ArticleTemplate

export const query = graphql`
  query($slug: String!) {
    nodeArticle(fields: { slug: { eq: $slug } }) {
      title
      body {
        processed
      }
      field_byline
      field_date(formatString: "MMMM YYYY")
      relationships {
        field_article_video {
          relationships {
            bundle {
              relationships {
                media__remote_video {
                  field_media_oembed_video
                  name
                  id
                }
              }
            }
          }
        }
        field_article_featured_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1400, quality: 75) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        field_article_media {
          relationships {
            field_media_image {
              localFile {
                childImageSharp {
                  id
                  fluid(maxWidth: 1400, quality: 75) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
        field_issue_reference {
          ...IssueFeed
        }
      }
    }
  }
`
