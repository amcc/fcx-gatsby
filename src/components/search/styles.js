import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Search } from "styled-icons/fa-solid/Search"
// import { Algolia } from "styled-icons/fa-brands/Algolia"
import { rhythm } from "../../utils/typography"

const darkBlue = `yellow`
const lightBlue = `Fuchsia`
const gray = `gray`
const darkGray = `darkGray`
const lightGray = `lightGray`
const veryLightGray = `#efefef`
const smallBorderRadius = `3px`;

export const Root = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1em;
`

export const SearchIcon = styled(Search)`
  width: 1em;
  pointer-events: none;
`

const focus = css`
  background: white;
  color: ${gray};
  cursor: text;
  width: 14em;
  @media (min-width: 52em) {
    width: 7em;
  }
  + ${SearchIcon} {
    color: ${darkGray};
    margin: 0.3em;
  }
`

const collapse = css`
  width: 0;
  cursor: pointer;
  color: ${lightBlue};
  + ${SearchIcon} {
    color: black;
  }
  ::placeholder {
    color: ${gray};
  }
`

const expand = css`
  /* background: ${veryLightGray}; */
  width: 12em;
  margin-left: -1.6em;
  padding-left: 1.6em;
  + ${SearchIcon} {
    margin: 0.3em;
  }
`

export const Input = styled.input`
  outline: none;
  border: none;
  font-size: 1em;
  /* background: ${veryLightGray}; */
  transition: all 0.5s;
  border-radius: ${smallBorderRadius};
  ${props => props.collapse ? collapse : expand};
  ${props => props.focus && focus}
  margin-left: ${props => props.focus ? `-1.6em` : `-1em`};
  padding-left: ${props => props.focus ? `1.6em` : `1em`};
`

export const Form = styled.form`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`

export const HitsWrapper = styled.div`
  display: ${props => props.show ? `grid` : `none`};
  max-height: 80vh;
  overflow: scroll;
  z-index: 2000;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  right: 0;
  top: calc(100% + 0.5em);
  width: 80vw;
  max-width: 30em;
  /* box-shadow: 0 0 5px 0; */
  border: 1px solid ${veryLightGray};
  padding: 0.7em 1em 0.4em;
  background: white;
  border-radius: ${smallBorderRadius};
  > * + * {
    padding-top: 1em !important;
    border-top: 2px solid ${darkGray};
  }
  li + li {
    margin-top: 0.7em;
    padding-top: 0.7em;
    border-top: 1px solid ${lightGray};
  }
  * {
    margin-top: 0;
    padding: 0;
  }
  ul {
    list-style: none;
    text-align: left;
  }
  mark {
    color: ${lightBlue};
    background: ${darkBlue};
  }
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.3em;
    h3 {
      color: ${lightBlue};
      background: ${veryLightGray};
      padding: 0.1em 0.4em;
      border-radius: ${smallBorderRadius};
    }
  }
  h3 {
    margin: 0 0 0.5em;
  }
  h4 {
    margin-bottom: 0.3em;
  }
`
export const PoweredBy = () => (
  <span />
)