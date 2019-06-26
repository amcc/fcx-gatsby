import { Link, graphql } from "gatsby"
import React from "react"
import { Flex, Box } from "@rebass/grid/emotion" //https://github.com/rebassjs/grid
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"
import { HeaderBarColour, SectionHeader, BiggerText } from "../utils/styles"
import ArticleFeed from "../components/articleFeed"

const DownloadShare = css`
  text-align: right;
`
const RelatedArticles = css`
  font-size: 1.8em;
`
const Title = css`
  text-align: center;
`

const IssueImage = css`
  margin: ${rhythm(1)} 0;
  display: block;
`

const IssueTemplate = ({ data }) => {
  // console.log(data)
  const issue = data.nodeIssue
  const articles = issue.relationships.node__article

  return (
    <Layout>
      <SEO title={`FCX | ` + issue.title} />
      <SectionHeader>
        <Flex
          // mx={[0, -1, -2]}
          flexWrap="wrap"
        >
          <Box width={[1 / 2]} px={[0, 1, 2]} color={`black`}>
            <Link to={`/issues/`}>ISSUES</Link> / ISSUE #
            {issue.field_issue_number}
          </Box>
          <Box width={[1 / 2]} px={[0, 1, 2]} css={DownloadShare}>
            {issue.relationships.field_issue_pdf && (
              <span>
                <a
                  href={issue.relationships.field_issue_pdf.localFile.publicURL}
                  download
                >
                  DOWNLOAD PDF
                </a>{" "}
                |{" "}
              </span>
            )}
            SHARE
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
        <Box width={[1]} my={[1, 2, 4]} px={[1, 3, 6]} css={Title}>
          <h1>{issue.title}</h1>
        </Box>

        <Box width={[1, 1, 1 / 2]} px={[1, 2, 4]} my={4}>
          {issue.relationships.field_issue_featured.map(({ relationships }) => (
            <Img
              key={relationships.field_media_image.localFile.childImageSharp.id}
              fluid={
                relationships.field_media_image.localFile.childImageSharp.fluid
              }
            />
          ))}
        </Box>
        <Box width={[1, 1, 1 / 2]} px={[1, 2, 4]} my={4}>
          {issue.field_byline && (
            <div
              css={BiggerText}
              dangerouslySetInnerHTML={{
                __html: issue.field_byline,
              }}
            />
          )}
        </Box>
        <Box width={[1]} px={[1, 2, 4]} my={4}>
          {issue.relationships.field_issue_media.map(({ relationships }) => (
            <Img
              css={IssueImage}
              key={relationships.field_media_image.localFile.childImageSharp.id}
              fluid={
                relationships.field_media_image.localFile.childImageSharp.fluid
              }
            />
          ))}
        </Box>
        <Box width={[1]} px={[1, 2, 4]} my={4}>
          <Box width={[1, 1 / 2]}>
            {issue.body && (
              <div
                css={BiggerText}
                dangerouslySetInnerHTML={{
                  __html: issue.body.processed,
                }}
              />
            )}
          </Box>
        </Box>
      </Flex>
      <SectionHeader>
        <Flex
          // mx={[0, -1, -2]}
          flexWrap="wrap"
        >
          <Box width={[1]} px={[0, 1, 2]} color={`black`} css={RelatedArticles}>
            RELATED ARTICLES
          </Box>
        </Flex>
      </SectionHeader>
      <ArticleFeed articles={articles} />
    </Layout>
  )
}

export default IssueTemplate

export const query = graphql`
  query($slug: String!) {
    nodeIssue(fields: { slug: { eq: $slug } }) {
      title
      body {
        processed
      }
      field_byline
      field_issue_number
      relationships {
        field_issue_featured {
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
        field_issue_media {
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
        field_issue_pdf {
          localFile {
            publicURL
          }
        }
        node__article {
          ...ArticleFeed
        }
      }
    }
  }
`
