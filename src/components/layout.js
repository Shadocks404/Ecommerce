/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        id="snipcart"
        data-api-key="ZTZkMGE1MTItYjgwOC00Yjc0LTkwZTItMGQxYjM0NjliYTMyNjM3MjkzOTQwMTUxMDMwODg2"
        data-autopop="false"
        hidden
      ></div>

      <Header siteTitle="Ecommerce site" />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()},{` `}
          <a href="#">Deshaye's industries</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
