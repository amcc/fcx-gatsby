import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

import { Flex, Box } from "@rebass/grid/emotion" //https://github.com/rebassjs/grid
import { rhythm } from "../utils/typography"
// import HeroImage from "../components/heroimage";
// import { FaChevronDown } from "react-icons/fa";
// import styled from "@emotion/styled"
import { css } from "@emotion/core"
import HomeVideo from "../components/homeVideo"
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from "cloudinary-react"
// import styled from "@emotion/styled";

// import { GridBoxContainer, GridBox, GridHeader } from "../utils/styles"

class About extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //    field: value
    // }
    //creates a reference for your element to use
    this.myDivToFocus = React.createRef()
  }

  // load the smoothscroll here as it requires window:
  // https://github.com/webpack/react-starter/issues/37
  componentDidMount() {
    const smoothscroll = require("smoothscroll-polyfill")
    // kick off the polyfill!
    // this hopefully fixes ios smooth
    smoothscroll.polyfill()
  }

  handleOnClick = event => {
    //.current is verification that your element has rendered
    if (this.myDivToFocus.current) {
      this.myDivToFocus.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  render() {
    const data = this.props.data
    return (
      <Layout>
        <SEO title="Issues" />

        <h1>About</h1>
        {/* <Video publicId="Comp_2_2_c6wxxb" /> */}
        <HomeVideo 
          video={`Comp_2_2_c6wxxb`}
          css={css`
            mix-blend-mode: difference;
            margin-top: -80px;
          `}
         />
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    allNodeArticle(sort: { fields: [created], order: DESC }, limit: 4) {
      edges {
        node {
          id
          title
          fields {
            slug
          }
          created
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
    }

    allNodeIssue(sort: { fields: [created], order: DESC }) {
      edges {
        node {
          id
          title
          fields {
            slug
          }
          created
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
            node__article {
              title
              path {
                alias
              }
              relationships {
                field_article_media {
                  relationships {
                    field_media_image {
                      localFile {
                        childImageSharp {
                          id
                          fluid(maxWidth: 400) {
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
        }
      }
    }
  }
`
