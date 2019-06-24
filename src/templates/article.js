import { Link, graphql } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Video from "../components/video"
import { Flex, Box } from "@rebass/grid/emotion"
import { css } from "@emotion/core"

const ArticleVideo = css``
const ArticleTemplate = ({ data }) => {
  // console.log(data)
  return (
    <Layout>
      <SEO title={`FCX | ` + data.nodeArticle.title} />
      <h1>
        <Link to={`/feed/`}>Feed</Link> / {data.nodeArticle.title}
      </h1>
      <Flex
        flexWrap="wrap"
      >
      {data.nodeArticle.body && (
        <Box
        width={1}
        >
<Box
          p={1}
          fontSize={4}
          width={[1/2]}
          alignSelf
        >
          <div
            dangerouslySetInnerHTML={{
              __html: data.nodeArticle.body.processed,
            }}
          />
        </Box>
        </Box> 
      )}

      {/* <Flex flexWrap="wrap" alignItems="stretch"> */}
      {data.nodeArticle.relationships &&
        data.nodeArticle.relationships.field_article_media &&
        data.nodeArticle.relationships.field_article_media.map(
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
                  css={css`
                    height: 100%;
                    width: auto;
                  `}
                  key={
                    relationships.field_media_image.localFile.childImageSharp.id
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

      {data.nodeArticle.relationships &&
        data.nodeArticle.relationships.field_article_video &&
        data.nodeArticle.relationships.field_article_video[0].relationships.bundle.relationships.media__remote_video.map(
          (video, i) => (
            <Box p={1} fontSize={4} width={[1]}>
              <Video
                css={ArticleVideo}
                videoSrcURL={video.field_media_oembed_video}
                videoTitle={video.name}
                key={video.id}
              />
            </Box>
          )
        )}
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
`
