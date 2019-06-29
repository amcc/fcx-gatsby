import PropTypes from "prop-types"
import React from "react"
// import { rhythm } from "../utils/typography"
import styled from "@emotion/styled"
// import { Video } from "cloudinary-react"
import { css } from "@emotion/core"
import { HeaderOffset, HeaderOffsetMobile } from "../utils/styles"

const CustomHeroImage = styled.div`
  /* overflow: hidden; */
  /* width: auto; */
  height: 100vh;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  /* margin-top: -${HeaderOffsetMobile}px; */
  > div,
  a > div {
    height: 100vh;
  }
  @media (min-width: 40em) {
    height: ${HeaderOffset}vh;
    /* height: 100vh; */
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    /* margin-top: -${HeaderOffset}px; */
    > div,
    a > div {
      height: 100vh;
    }
  }
`

const HomeVideo = ({ video }) => {
  return (
    <CustomHeroImage>
      <div
        css={css`
          display: -webkit-flex;
          display: flex;
          -webkit-align-items: center;
          align-items: center;
          -webkit-justify-content: center;
          justify-content: center;
          overflow: hidden;
          video {
            width: 100vw;
            height: 100vh;
            object-fit: cover;
            /* @media (min-width: 52em) {
              width: 100vw;
              height: 100vh;
            } */
          }
        `}
        dangerouslySetInnerHTML={{
          __html: `
        <video autoplay loop muted playsinline>
          <source src="${video}" type="video/mp4">
        </video>
      `,
        }}
      />
    </CustomHeroImage>
  )
}

HomeVideo.propTypes = {
  video: PropTypes.string,
}

HomeVideo.defaultProps = {
  video: ``,
}

export default HomeVideo
