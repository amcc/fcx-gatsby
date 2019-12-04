import React, { Component } from "react"
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
`
const ArticleDate = css`
  margin-bottom: ${rhythm(1)};
`
const Byline = css`
  margin: ${rhythm(1)} 0;
`

const ArticleFeed = ({ articles, issues }) => {
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
      {articles.edges &&
        articles.edges.map(({ node }, i) => {
          let articleIssue = new Array()

          node.relationships.field_issue_reference.map(({ drupal_id }, i) => {
            articleIssue.push(drupal_id)
          })


          if (articleIssue.includes(issues.edges[0].node.drupal_id)) {
            return (
              <Box
                p={[0, 2, 2]}
                fontSize={4}
                width={[1, 1 / 2, box]}
                color="white"
                // bg="lightgrey"
                // flex="1 1 auto"
                // alignSelf
                css={css`
                  max-height: 300px;
                `}
                key={i}
                css={[GridBoxContainer, ArticleLink, FlexArticle]}
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
          }
        })}
    </Flex>
  )
}

export default ArticleFeed
