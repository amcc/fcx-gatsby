import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section>
      <h1>NOT FOUND</h1>
      <p>You just hit a page that doesn't exist... the sadness.</p>
      <p>May I suggest a video instead?</p>
      <Video
        videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
        videoTitle="Official Music Video on YouTube"
      />
    </section>
  </Layout>
)

export default NotFoundPage