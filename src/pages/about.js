import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Flex, Box } from "@rebass/grid/emotion" //https://github.com/rebassjs/grid
import { rhythm } from "../utils/typography"
import { css } from "@emotion/core"
import {
  HeaderOffset,
  HeaderOffsetMobile,
  HeaderOffsetMobileBig,
  BiggerText,
} from "../utils/styles"
import styled from "@emotion/styled"
import HomeVideo from "../components/homeVideo"

const AboutVideo = css`
  position: absolute;
  top: 0;
  z-index: 1;
`
const AboutText = styled.div`
  /* top: ${HeaderOffsetMobile - 8 + "px"};
  @media (min-width: 40em) {
    top: ${HeaderOffsetMobileBig + "px"};
  }
  @media (min-width: 52em) {
    top: ${HeaderOffset + "px"};
  } */
  position: relative;
  margin-top: -60vh;
  @media (min-width: 40em) {
    margin-top: -70vh;
  }
  z-index: 20;
  height: 100%;
  width: 100%;
`
const Overlay = styled.div`
  position: absolute;
  top: 0;
  /* margin-top: -85vh; */
  z-index: 10;
  /* background: red; */
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.2),
    rgb(247, 248, 249),
    rgb(247, 248, 249)
  );
  height: 100vh;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
`
const RightBox = css`
  text-align: right;
`
const LeftBox = css`
  /* text-align: right; */
`

class About extends Component {
  render() {
    // const data = this.props.data
    return (
      <Layout>
        <SEO title="Issues" />
        <HomeVideo
          video="fcx-bg-V3.mp4"
          css={AboutVideo}
        />
        <Overlay />
        <AboutText>
          <Flex mx={[0, -2, -2]} flexWrap="wrap">
            <Box
              width={[3 / 4, 1 / 2]}
              px={[2, 1, 0]}
              css={[LeftBox, BiggerText]}
            >
              <h1>ABOUT</h1>
              <p>
                <strong>The Fashion Communication Exchange (FCX)</strong> is a
                digital platform where issues around fashion and fashion
                communication are discussed across a diverse community which
                includes: the fashion industry, UAL academics and the student
                body.
              </p>
              <p>
                FCX produces an ‘Issue’ bi-annually, sharing knowledge
                co-created by students, academics and industry around a
                research-informed discussion, theme or trend that is pertinent
                to the contemporary landscape of fashion communication.
              </p>
              <p>
                The Feed disseminates insights, activity and related research
                and news clustered around the common 'Issue' we are presently
                interrogating.
              </p>
              <p>
                FCX is moderated by the Communication Programme within the
                School of Media and Communication, London College of Fashion,
                UAL.
              </p>
              <p>
                For editorial enquires contact: Charlotte Troy
                c.troy@fashion.arts.ac.uk.
                <br />
                For collaborative opportunities contact: Daniel
                Caulfield-Sriklad d.caulfieldsriklad@fashion.arts.ac.uk.
              </p>
              <h3>WHO WE’VE COLLABORATED WITH</h3>
              <p>
                The Centre for Sustainable Fashion, UAL
                <br />
                H&M
                <br />
                NOW Gallery
                <br />
                Phoenix Magazine
              </p>
            </Box>
            <Box width={1 / 2} css={RightBox} />
          </Flex>
        </AboutText>
      </Layout>
    )
  }
}

export default About
