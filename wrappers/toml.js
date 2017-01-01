import React from 'react'
import toml from 'toml-js'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

module.exports = React.createClass({
  propTypes () {
    return {
      route: React.PropTypes.object,
    }
  },
  render () {
    const route = this.props.route
    const data = route.page.data
    const title = data.title_sk !== '' ? data.title_sk : data.title_en
    const description = data.description_sk !== '' ? data.description_sk : data.description_en

    return (
      <div>
        <Helmet
          title={`${title} | ${config.siteTitle}`}
        />
        {/* the match is for one dir up */}
        <h1><Link to={prefixLink(route.path.match(/\/.+?\//)[0])}>&lt;</Link> {title}</h1>
        <p>{description}</p>
        <ul className='detailImages'>
          {data.images && data.images.map((image) => (
            <li key={image.url}>
              <a href={`1200/${image.url}.jpg`}><img src={`600/${image.url}.jpg`} alt={image.title_sk} /></a>
            </li>
          ))}
        </ul>
        <h2>raw data:</h2>
        <pre dangerouslySetInnerHTML={{ __html: toml.dump(data) }} />
      </div>
    )
  },
})
