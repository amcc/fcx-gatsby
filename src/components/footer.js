import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { Flex, Box } from "@rebass/grid/emotion" //https://github.com/rebassjs/grid
import { rhythm } from "../utils/typography"
import { css } from "@emotion/core"

import { FullWidth, MainWrapper } from "../utils/styles"

const FooterStyle = css`
  background: #000;
  color: white;
  a {
    color: white;
  }
  svg {
    fill: white;
    width: 100px;
  }
  padding: ${rhythm(2)};
`
const RightBox = css`
  text-align: right;
`
const LeftBox = css`
  /* text-align: right; */
`
const FCXlogo = css`
  width: 120px;
  padding-top: 4px;
  height: auto;
  @media (min-width: 40em) {
    /* width: 20%; */
  }
`

const Footer = () => {
  return (
    <FullWidth css={[FooterStyle]}>
      <MainWrapper>
        <Flex mx={[0, -2, -2]} flexWrap="wrap">
          <Box width={1 / 2} css={LeftBox}>
            <a href="https://www.arts.ac.uk">
              <svg
                id="Artwork"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 283.46 127.86"
              >
                <defs />
                <title>University of the Arts London</title>
                <path
                  d="M113.53,153.75H89.82V141.1h-.53a32.39,32.39,0,0,1-27.75,15.1c-26.52,0-33.2-14.93-33.2-37.41V62.94H53.29v51.29c0,14.93,4.39,22.31,16,22.31,13.52,0,19.32-7.55,19.32-26V62.94h24.94Z"
                  transform="translate(-28.35 -28.34)"
                />
                <path
                  d="M130,90.87c1.41-23.36,22.31-30.38,42.68-30.38,18.09,0,39.87,4,39.87,25.82v47.25c0,8.25.88,16.51,3.16,20.2H190.45A37,37,0,0,1,188.7,145c-7.9,8.25-19.5,11.24-30.56,11.24-17.21,0-30.91-8.61-30.91-27.22,0-20.55,15.46-25.47,30.91-27.57,15.28-2.28,29.51-1.76,29.51-11.94,0-10.71-7.38-12.29-16.16-12.29C162,77.17,155.85,81,155,90.87Zm57.61,18.44c-4.22,3.69-13,3.86-20.73,5.27-7.73,1.58-14.75,4.21-14.75,13.35,0,9.31,7.2,11.59,15.28,11.59,19.49,0,20.2-15.46,20.2-20.9Z"
                  transform="translate(-28.35 -28.34)"
                />
                <path
                  d="M231.72,28.34h24.94v125.4H231.72Z"
                  transform="translate(-28.35 -28.34)"
                />
                <path
                  d="M311.81,91.57H284.24v-27h27.57ZM284.24,126.7h27.57v27H284.24Z"
                  transform="translate(-28.35 -28.34)"
                />
              </svg>
            </a>
          </Box>
          <Box width={1 / 2} css={RightBox}>
            <Link
              to="/"
              css={css`
                color: black;
              `}
            >
              <img
              css={FCXlogo}
                src="/fcx-logo-white.png"
                alt="fashion Communication Exchange"
              />
            </Link>
          </Box>
        </Flex>
      </MainWrapper>
    </FullWidth>
  )
}

export default Footer
