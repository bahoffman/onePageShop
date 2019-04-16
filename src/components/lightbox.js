import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"

const LightboxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
`

export default class Lightbox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      default: 0,
      index: 0,
    }

    console.log(`constructor`)
  }

  static propTypes = {
    carImages: PropTypes.array.isRequired,
  }

  render() {
    console.log(`rendered`)
    const { carImages } = this.props
    return (
      <div>
        <Img
          style={{ border: "1px solid #021a40" }}
          fluid={carImages[this.state.index].node.childImageSharp.fluid}
        />

        <LightboxContainer>
          {carImages.map((image, index) => (
            <div
              key={image.node.childImageSharp.fluid.src}
              //onClick={e => this.ClickMe(e, index)}
              onClick={() => this.setState({ default: index })}
              onMouseEnter={() => this.setState({ index: index })}
              onMouseLeave={() => this.setState({ index: this.state.default })}
            >
              <Img fluid={image.node.childImageSharp.fluid} />
            </div>
          ))}
        </LightboxContainer>
      </div>
    )
  }
}
