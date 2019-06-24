import React from "react"
import { Highlight } from "react-instantsearch-dom"
import { Link } from "gatsby"
// import { Calendar } from "styled-icons/octicons/Calendar"
// import { Tags } from "styled-icons/fa-solid/Tags"

export const ArticleHit = clickHandler => ({ hit }) => (
  <div>
    <Link to={hit.fields.slug} onClick={clickHandler}>
      <h4>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h4>
    </Link>
    {/* <Snippet attribute="excerpt" hit={hit} tagName="mark" /> */}
  </div>
)

export const IssueHit = clickHandler => ({ hit }) => (
  <div>
    <Link to={hit.fields.slug} onClick={clickHandler}>
      <h4>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h4>
    </Link>
  </div>
)