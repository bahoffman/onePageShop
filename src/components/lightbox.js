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
      index: 0,
    }

    console.log(`constructor`)
  }

  static propTypes = {
    carImages: PropTypes.array.isRequired,
  }

  HoverIn(e, index) {
    console.log(`HoverIn`)
    console.log(index)
    this.setState({ index: index })
    console.log(this.state.index)
  }

  HoverOut(e, index) {
    console.log(`HoverOut`)
    console.log(index)
    this.setState({ index: 0 })
    console.log(this.state.index)
  }

  render() {
    console.log(`rendered`)
    const { carImages } = this.props
    return (
      <div>
        <Img fluid={carImages[this.state.index].node.childImageSharp.fluid} />
        <LightboxContainer>
          {carImages.map((image, index) => (
            <div
              key={image.node.childImageSharp.fluid.src}
              onMouseEnter={e => this.HoverIn(e, index)}
              onMouseLeave={e => this.HoverOut(e, index)}
            >
              <Img fluid={image.node.childImageSharp.fluid} />
            </div>
          ))}
        </LightboxContainer>
      </div>
    )
  }
}
