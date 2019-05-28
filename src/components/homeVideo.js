import PropTypes from "prop-types"
import React from "react"
import { rhythm } from "../utils/typography"
import styled from "@emotion/styled"
import { Video } from "cloudinary-react"
import { css } from "@emotion/core"
import { HeaderOffset, HeaderOffsetMobile } from "../utils/styles"

const CustomHeroImage = styled.div`
  /* width: auto; */
  height: 96vh;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  margin-top: -${HeaderOffsetMobile}px;
  > div,
  a > div {
    height: 96vh;
  }
  @media (min-width: 40em) {
    height: 95vh;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    margin-top: -${HeaderOffset}px;
    > div,
    a > div {
      height: 95vh;
    }
  }
`

const HomeVideo = ({ video }) => {
  return (
    <CustomHeroImage>
      <Video
        css={css`
          width: 100%;
          height: auto;
        `}
        cloudName="amcc"
        publicId={video}
        // controls="true"
        autoPlay 
        loop
        muted
        playsinline
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
