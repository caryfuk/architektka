import React from 'react'
import toml from 'toml-js'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import Lightbox from 'react-image-lightbox';

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
    };
  },

  render () {
    const route = this.props.route
    const data = route.page.data
    const title = data.title_sk !== '' ? data.title_sk : data.title_en
    const description = data.description_sk !== '' ? data.description_sk : data.description_en
    const {
      photoIndex,
      isOpen,
    } = this.state

    return (
      <div>
        <Helmet
          title={`${title} | ${config.siteTitle}`}
        />
        {/* the match is for one dir up */}
        <h1><Link to={prefixLink(route.path.match(/\/.+?\//)[0])}>&lt;</Link> {title}</h1>
        <p>{description}</p>
        <ul className='detailImages'>
          {data.images && data.images.map((image, i) => {
            return (
              <li
                key={i}
                onClick={() => this.setState({ isOpen: true, photoIndex: i })}>
                  <img src={`600/${image.url}.jpg`} alt={image.title_sk} />
              </li>
            )
          })}
        </ul>
        <h2>raw data:</h2>
        <pre dangerouslySetInnerHTML={{ __html: toml.dump(data) }} />
        {isOpen && data.images.length > 0 &&
          <Lightbox
            mainSrc={`1200/${data.images[photoIndex].url}.jpg`}
            imageTitle={data.images[photoIndex].title_sk}
            imageCaption={data.images[photoIndex].description_sk}
            nextSrc={data.images[(photoIndex + 1) % data.images.length]}
            prevSrc={data.images[(photoIndex + data.images.length - 1) % data.images.length]}
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
