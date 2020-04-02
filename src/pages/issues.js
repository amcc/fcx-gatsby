import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Box } from "@rebass/grid/emotion"
import IssueFeed from "../components/issueFeed"

// const Row = props => <Flex {...props} mx={-3} />

// const Column = props => <Box {...props} px={3} flex="1 1 auto" />

class Issues extends Component {
  render() {
    const issues = this.props.data.allNodeIssue
    return (
      <Layout>
        <SEO title="Issues" />
        <Box px={[2, 1, 0]}>
          <h1>ISSUES</h1>
          <IssueFeed issues={issues} />
        </Box>
      </Layout>
    )
  }
}

export default Issues

export const pageQuery = graphql`
  query {
    allNodeIssue(
      sort: { order: ASC, fields: field_issue_number }
      filter: { field_issue_number: { gt: 0 } }
      limit: 20
    ) {
      edges {
        node {
          ...IssueFeed
        }
      }
    }
  }
`
