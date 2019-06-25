import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Flex, Box } from "@rebass/grid/emotion" 
import IssueFeed from "../components/issueFeed"

const Row = props => <Flex {...props} mx={-3} />

const Column = props => <Box {...props} px={3} flex="1 1 auto" />


class Issues extends Component {

  render() {
    const issues = this.props.data.allNodeIssue
    return (
      <Layout>
        <SEO title="Issues" />
        <h1>ISSUES</h1>
        <IssueFeed issues={issues} />
      </Layout>
    )
  }
}

export default Issues

export const pageQuery = graphql`
  query {
    allNodeIssue(sort: { fields: [field_date], order: DESC }, limit: 20) {
      edges {
        node {
          ...IssueFeed
        }
      }
    }
  }
`
