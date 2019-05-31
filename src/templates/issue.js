import { Link, graphql } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const IssueTemplate = ({ data }) => {
  // console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>
        <Link to={`/issues/`}>Issues</Link> / {data.nodeIssue.title}
      </h1>
      {data.nodeIssue.body && (
        <div
          dangerouslySetInnerHTML={{ __html: data.nodeIssue.body.processed }}
        />
      )}
      {data.nodeIssue.relationships.field_issue_media.map(
        ({ relationships }) => (
          <Img
            key={relationships.field_media_image.localFile.childImageSharp.id}
            fluid={
              relationships.field_media_image.localFile.childImageSharp.fluid
            }
          />
        )
      )}
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
      relationships {
        field_issue_media {
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
