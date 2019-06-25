import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Flex, Box } from "@rebass/grid/emotion" 
import ArticleFeed from "../components/articleFeed"

const Row = props => <Flex {...props} mx={-3} />

const Column = props => <Box {...props} px={3} flex="1 1 auto" />


class Feed extends Component {

  render() {
    const articleNodes = this.props.data.allNodeArticle.edges
    const articles = []
    articleNodes.map(({node} , i) => {
      articles.push(node)
    })
    console.log(articles);

    return (
      <Layout>
        <SEO title="Articles" />
        <h1>FEED</h1>
        <ArticleFeed articles={articles} />
      </Layout>
    )
  }
}

export default Feed

export const pageQuery = graphql`
  query {
    allNodeArticle(sort: { fields: [field_date], order: DESC }, limit: 100) {
      edges {
        node {
          ...ArticleFeed
        }
      }
    }
  }
`
