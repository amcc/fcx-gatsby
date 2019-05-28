/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
// import "./layout.css"
import {GlobalStyle, MainWrapper} from "../utils/styles"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        <MainWrapper>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}
            {` `}
            <a href="https://www.gatsbyjs.org">Fashion Communication Exchange</a>
          </footer>
        </MainWrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
