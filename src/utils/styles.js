import React from "react"
import Img from "gatsby-image"
import { rhythm } from "../utils/typography"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import {
  Lunch22LEOT,
  Lunch22LEOTIE,
  Lunch22LTTF,
  Lunch22LWOFF,
  Lunch22LWOFF2,
  
  Lunch22REOT,
  Lunch22REOTIE,
  Lunch22RTTF,
  Lunch22RWOFF,
  Lunch22RWOFF2,

  Lunch22MEOT,
  Lunch22MEOTIE,
  Lunch22MTTF,
  Lunch22MWOFF,
  Lunch22MWOFF2,

  Lunch24EOT,
  Lunch24EOTIE,
  Lunch24WOFF2,
  Lunch24WOFF,
  Lunch24TTF,
} from "./fonts"

const MaxWidth = `1400px`
export const HeaderOffset = "80"
export const HeaderOffsetMobileBig = "76"
export const HeaderOffsetMobile = "70"

export const Accent = `SlateGray`
export const SubtleAccent = `#eee`

const BoxShadowH = `0px`
const BoxShadowV = `3px`
const BoxShadowBlur = `5px`
const BoxShadowSpread = `3px`
//112,128,144 = SlateGrey
export const BoxShadowColour = `rgba(112,128,144,0.05)`
export const BoxShadow = `box-shadow: ${BoxShadowH} ${BoxShadowV} ${BoxShadowBlur} ${BoxShadowSpread} ${BoxShadowColour}`

const RadiusTL = `3px`
const RadiusTR = `3px`
const RadiusBR = `3px`
const RadiusBL = `3px`
export const BorderRadius = `border-radius: ${RadiusTL} ${RadiusTR} ${RadiusBR} ${RadiusBL}`

const GridHeaderSize = `80%`
const GridHeaderSizeMobile = `70%`

export const LinkColour = `#E8F1F9`;
export const HeaderBarColour = `#A6A6AD`;

// rebass grid breakpoints
// 40em, 52em, 64em
export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
      @font-face {
        font-family: "lunch22";
        src: url(${Lunch22LEOT});
        src: url(${Lunch22LEOTIE}) format("embedded-opentype"),
          url(${Lunch22LWOFF2}) format("woff2"),
          url(${Lunch22LWOFF}) format("woff"),
          url(${Lunch22LTTF}) format("truetype");
        font-weight: 200;
        font-style: normal;
      }
      @font-face {
        font-family: "lunch22";
        src: url(${Lunch22REOT});
        src: url(${Lunch22REOTIE}) format("embedded-opentype"),
          url(${Lunch22RWOFF2}) format("woff2"),
          url(${Lunch22RWOFF}) format("woff"),
          url(${Lunch22RTTF}) format("truetype");
        font-weight: 400;
        font-style: normal;
      }
      @font-face {
        font-family: "lunch22";
        src: url(${Lunch22MEOT});
        src: url(${Lunch22MEOTIE}) format("embedded-opentype"),
          url(${Lunch22MWOFF2}) format("woff2"),
          url(${Lunch22MWOFF}) format("woff"),
          url(${Lunch22MTTF}) format("truetype");
        font-weight: 600;
        font-style: normal;
      }
      @font-face {
        font-family: "lunch24";
        src: url(${Lunch24EOT});
        src: url(${Lunch24EOTIE}) format("embedded-opentype"),
          url(${Lunch24WOFF2}) format("woff2"),
          url(${Lunch24WOFF}) format("woff"),
          url(${Lunch24TTF}) format("truetype");
        font-weight: normal;
        font-style: normal;
      }

      * {
        box-sizing: border-box;
      }
      html,
      body {
        /* the above makes scrolling screw up on iphone */
        /* -webkit-overflow-scrolling: touch; */
        height: 100%;
        font-weight: 400;
        font-family: "lunch22", Helvetica, Arial, sans-serif;
      }

      body {
        margin: 0;
        background: #fefefe;
        -webkit-overflow-scrolling: touch;
      }
      html,
      body {
        /* the above makes scrolling screw up on iphone */
        /* -webkit-overflow-scrolling: touch; */
        height: 100%;
      }
      body {
        margin: 0;
        background: rgb(247,248,249);
        font-weight: 200;
      }
      h1 {
        font-weight: 400;
        margin: ${rhythm(2)} 0;
        font-family: "lunch22", Helvetica, Arial, sans-serif;
        font-size: 2.1em;
      }
      h2 {
        font-weight: 400;
        font-size: 130%;
      }
      a:hover {
        text-decoration: underline;
      }

      /* iphones will zoom when clicking on a select - this might solve it */
      /* Mobile first */
      input,
      textarea,
      select,
      button {
        font-size: 16px;
      }
      /* Tablet upwards */
      @media (min-width: 768px) {
        font-size: 14px;
      }
    `}
  />
)

export const BiggerText = css`
  font-size: 20px;
`

export const StyledImg = styled(Img)`
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
`
export const MainWrapper = styled.div`
  margin: 0 auto;
  max-width: ${MaxWidth};

  @media (min-width: 40em) {
    /* padding: 0px 1.0875rem 1.45rem; */
    padding: 0px ${rhythm(1)};
    font-size: 100%;
  }
`

export const PostMain = styled.div`
  /* width: auto; */
  /* margin-top: ${rhythm(2)}; */
`
export const PostTitleItems = styled.div`
  /* width: auto; */
  margin-bottom: ${rhythm(2)};
`

export const Padded = css`
  padding: 0 ${rhythm(1)};
  @media (min-width: 40em) {
    /* padding: 0px 1.0875rem 1.45rem; */
    /* padding: 0px 1.0875rem; */
    /* font-size: 100%; */
  }
`
export const PaddedMobile = css`
  padding-left: ${rhythm(1)};
  padding-right: ${rhythm(1)};
  @media (min-width: 40em) {
    padding-left: 0;
    padding-right: 0;
  }
`
//
export const FullWidth = styled.div`
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
`

export const MarginTopPost = css`
  margin-top: 0;
  @media (min-width: 40em) {
    margin-top: ${rhythm(1)};
  }
`

export const ArticleLink = css`
  article {
    /* height: 100%; */
    width: auto;
    > div {
      height: 420px;
    }
    /* min-height: 350px; */
    /* position: relative; */
    h3 {
      /* position: absolute;
      bottom: 0; */
    }
  }
`
export const backgroundColours = [
  "orangered",
  "tomato",
  "deeppink",
  "yellowgreen",
  "olivedrab",
  // "lime",
  "cornflowerblue",
  "dodgerblue",
  "blue",
  "slategrey",
  "chocolate",
  // "cyan",
]

export const RandomBackground = css`
  background: ${backgroundColours[
    Math.floor(Math.random() * backgroundColours.length)
  ]};
`

export const GridBoxContainer = css`
  article:hover {
    background: ${SubtleAccent};
  }
  article:active {
    background: ${SubtleAccent};
  }
  a {
    text-decoration: none;
  }
  transition: all 0.5s;
`
export const GridBox = css`
  overflow: hidden;
  margin: 0 auto;
  max-width: 960px;
  /* padding: 0.5rem 0; */
  /* margin-bottom: ${rhythm(1)}; */
  /* background: white; */

  /* ${BoxShadow};
  ${BorderRadius}; */
  section {
    text-align: right;
    font-size: ${GridHeaderSize};
    padding: ${rhythm(1 / 3)};
    border-bottom: 1px solid gray;
    font-size: 60%;
  }
  a > div {
    height: 120px;
    @media (min-width: 40em) {
      height: 200px;
    }
    @media (min-width: 52em) {
      height: 180px;
    }
    @media (min-width: 64em) {
      height: 230px;
    }
  }
  h3 {
  }
  a {
    text-decoration: none;
  }
`
export const GridHeader = css`
  font-size: ${GridHeaderSizeMobile};
  padding: ${rhythm(1 / 4)};
  font-weight: 400;
  margin-bottom: 0;
  height: 9rem;
  @media (min-width: 40em) {
    height: 7rem;
    font-size: ${GridHeaderSizeMobile};
    padding: ${rhythm(1 / 3)};
  }
  @media (min-width: 52em) {
    height: 7rem;
    font-size: ${GridHeaderSize};
    padding: ${rhythm(1 / 3)};
  }
`
export const GridSectionHeader = css`
  /* margin-bottom: 0; */
  /* font-size: ${GridHeaderSizeMobile};
  @media (min-width: 40em) {
    font-size: ${GridHeaderSize};
  } */
  color: ${Accent};
`
export const SearchBox = css`
  position: relative;
  margin-top: 1.2rem;
  left: -2rem;
  @media (min-width: 40em) {
    margin-top: 0.8rem;
    /* left: -2rem; */
  }
  @media (min-width: 52em) {
    margin-top: 1.6rem;
    left: 0;
  }
`
export const SectionHeader = styled.div`
  border-bottom: 1px solid gray;
  padding: ${rhythm(1 / 2)} 0;
  color: ${HeaderBarColour};
  /* color: red; */
  a {
    color: ${HeaderBarColour};
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  margin: ${rhythm(2)} 0;
`
export const FeedHeader = styled.div`
  font-size: 1.8em;
  font-weight: 400;
  margin: ${rhythm(2)} 0;
`