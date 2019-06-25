import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { Flex, Box } from "@rebass/grid/emotion" //https://github.com/rebassjs/grid
import { rhythm } from "../utils/typography"
import { css } from "@emotion/core"

import {
  backgroundColours,
  ArticleLink,
  GridBoxContainer,
  GridBox,
  GridHeader,
} from "../utils/styles"

const FlexArticle = css`
  flex: 0 0 auto;
  /* max-height: 300px; */
`
const ArticleDate = css`
  margin-bottom: ${rhythm(1)};
`
const Byline = css`
  margin: ${rhythm(1)} 0;
`

const IssueFeed = ({ issues }) => {
  let boxCount = 1
  let rowWidth = 0
  return (
    <Flex
      mx={[0, -2, -2]}
      flexWrap="wrap"
      alignItems="space-evenly"
      css={css`
        z-index: 100;
        position: relative;
      `}
    >
      {issues.edges &&
        issues.edges.map(({ node }, i) => {
          ///////////////////////////////
          // render an image, or a box //
          ///////////////////////////////

          let articleBox
          if (node.relationships.field_issue_media) {
            articleBox = (
              <Img
                key={
                  node.relationships.field_issue_media[0].relationships
                    .field_media_image.localFile.childImageSharp.id
                }
                fluid={
                  node.relationships.field_issue_media[0].relationships
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

          return (
            <Box
              p={[0, 2, 2]}
              fontSize={4}
              width={[1, 1 / 2]}
              color="white"
              // bg="lightgrey"
              // flex="1 1 auto"
              alignSelf
              key={i}
              css={[FlexArticle, GridBoxContainer, ArticleLink]}
            >
              <Link to={`${node.path.alias}`}>
                <article css={GridBox} key={node.id}>
                  {articleBox}
                  <section css={ArticleDate}>{node.field_date}</section>

                  <h3 css={[GridHeader, Byline]}>{node.field_byline}</h3>
                </article>
              </Link>
            </Box>
          )
        })}
    </Flex>
  )
}

export default IssueFeed

export const query = graphql`
  fragment IssueFeed on node__issue {
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
`
// to do

// do we use the featured image?

// a better idea might be to ues the first image of the media.
// Makes more sense perhaps as we often dont have a featured image.

// field_article_featured_image {
//   localFile {
//     childImageSharp {
//       ......
//     }
//   }
// }
