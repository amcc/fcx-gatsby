import { Link, graphql } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const ArticleTemplate = ({ data }) => {
  // console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <h1><Link to={`/`}>Articles</Link> / {data.nodeArticle.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: data.nodeArticle.body.processed }}
      />

      {data.nodeArticle.relationships.field_article_media.map(
        ({ relationships }) => (
          <Img
            key={
              relationships.field_media_image.localFile.childImageSharp.id
            }
            fluid={
              relationships.field_media_image.localFile.childImageSharp.fluid
            }
          />
        )
      )}

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
