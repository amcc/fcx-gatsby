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

const ArticleFeed = ({ articles }) => {
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
      {articles &&
        articles.map((node, i) => {
          ////////////////////
          // vary the width //
          ////////////////////

          // let columns = 4
          // let boxWidths = [1 / columns, 2 / columns]
          // let box = boxWidths[Math.floor(Math.random() * boxWidths.length)]

          // if (boxCount > columns) {
          //   rowWidth = 0
          //   boxCount = 1
          // }
          // if (rowWidth >= columns) {
          //   rowWidth = 0
          //   boxCount = 1
          // }

          // if (rowWidth >= columns - 1) {
          //   box = 1 / 4
          // }
          // rowWidth += box / (1 / columns)

          // boxCount++

          ///////////////////////////////
          // render an image, or a box //
          ///////////////////////////////
          let articleBox
          if (node.relationships.field_article_media && node.relationships.field_article_media[0]) {
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
              var maxLength = 330 // maximum number of characters to extract
              //trim the string to the maximum length
              var trimmedBody = node.body.processed.substr(0, maxLength)
              //re-trim if we are in the middle of a word
              trimmedBody = trimmedBody.substr(
                0,
                Math.min(trimmedBody.length, trimmedBody.lastIndexOf(" "))
              )
              trimmedBody = node.body.processed
              // give it a larger box
              // box = 1 / 2
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
                  color: black;
                  overflow: hidden;
                  text-decoration: none;
                  font-size: 1em;
                  font-weight: 600;
                  line-height: 1.8rem;
                  blockquote {
                    color: black;
                    font-size: 1em;
                    font-weight: 600;
                    line-height: 1.8rem;
                  }
                `}
                dangerouslySetInnerHTML={{ __html: trimmedBody }}
              />
            )
          }

          return (
            <Box
              p={[1, 2, 2]}
              fontSize={4}
              width={[1, 1 / 2, 1 / 4]}
              color="white"
              // bg="lightgrey"
              // flex="1 1 auto"
              // alignSelf
              key={i}
              css={[FlexArticle, GridBoxContainer, ArticleLink]}
            >
              <Link to={`${node.path.alias}`}>
                <article css={GridBox} key={node.id}>
                  <section css={ArticleDate}>{node.field_date}</section>
                  {articleBox}
                  <h3 css={[GridHeader, Byline]}>{node.field_byline}</h3>
                </article>
              </Link>
            </Box>
          )
        })}
    </Flex>
  )
}

export default ArticleFeed

export const query = graphql`
  fragment ArticleFeed on node__article {
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
                fluid(maxWidth: 300, quality: 75) {
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
