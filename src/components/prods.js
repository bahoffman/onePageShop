import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Lightbox from "./lightbox"

const Product = () => (
  <StaticQuery
    query={graphql`
      query {
        prodImages: allFile(filter: { sourceInstanceName: { eq: "nagc" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                  srcWebp
                  srcSetWebp
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Lightbox prodImages={data.prodImages.edges} />}
  />
)
export default Product
