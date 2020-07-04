import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "sanitize.css"
import "sanitize.css/forms.css"
import "sanitize.css/typography.css"

const IndexPage = ({ data }) => {
  let products = data.allDatoCmsProduct.edges
  return (
    <Layout>
      <Seo title="Home" />

      <main className="grid-container">
        {products.map(({ node: product }) => (
          <article className="grid-item">
            <h2 key={product.id}>{product.name}</h2>
            <img src={product.image} width="100%" />
            <p>{product.price} euros</p>
            <a
              href="#"
              className="snipcart-add-item"
              data-item-id={product.id}
              data-item-price={product.price}
              data-item-image={product.image}
              data-item-name={product.name}
              data-item-description="dedfedqsdfQSDJ?"
              data-item-url="/"
            >
              Ajouter au panier
            </a>
          </article>
        ))}
      </main>
    </Layout>
  )
}

export default IndexPage

export let query = graphql`
  query ProductQuery {
    allDatoCmsProduct {
      edges {
        node {
          id
          name
          price
          image
        }
      }
    }
  }
`
