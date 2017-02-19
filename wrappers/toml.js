import React from 'react'
import toml from 'toml-js'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import Lightbox from 'react-image-lightbox';
import { findDOMNode } from 'react-dom';

module.exports = React.createClass({
  propTypes () {
    return {
      route: React.PropTypes.object,
    }
  },

  getInitialState () {
    return {
      photoIndex: 0,
      isOpen: false
    }
  },

  render () {
    const route = this.props.route
    const data = route.page.data
    const title = data.title_en
    const description = data.description_en
    const {
      photoIndex,
      isOpen,
    } = this.state

    return (
      <div className='detailPage'>
        <Helmet
          title={`${title} | ${config.siteTitle}`}
        />
        {/* the match is for one dir up */}
        <h1><Link to={prefixLink(route.path.match(/\/.+?\//)[0])}>&lt;</Link> {title}</h1>
        <p>{description}</p>
        <ul>
          {data.images && data.images.map((image, i) => {
            return (
              <li
                key={i}
                style={{
                  animationDelay: `${i*0.05}s`,
                  WebkitAnimationDelay: `${i*0.05}s`
                }}
                onClick={() => this.setState({ isOpen: true, photoIndex: i })}>
                  <img src={`600/${image.url}.jpg`} />
              </li>
            )
          })}
        </ul>
        {isOpen && data.images.length > 0 &&
          <Lightbox
            mainSrc={`1600/${data.images[photoIndex].url}.jpg`}
            imageCaption={
              data.images[photoIndex].description_en
            }
            nextSrc={`1600/${data.images[(photoIndex + 1) % data.images.length].url}.jpg`}
            prevSrc={`1600/${data.images[(photoIndex + data.images.length - 1) % data.images.length].url}.jpg`}
            imagePadding={0}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() => this.setState({
              photoIndex: (photoIndex + data.images.length - 1) % data.images.length,
            })}
            onMoveNextRequest={() => this.setState({
              photoIndex: (photoIndex + 1) % data.images.length,
            })}
          />
        }
      </div>
    )
  },
})
