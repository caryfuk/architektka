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
    const data = this.props.route.page.data
    return (
      <div>
        <Helmet
          title={`${data.title} | ${config.siteTitle}`}
        />
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <ul className='detailImages'>
          {data.images && data.images.map((image) => (
            <li key={image.url}>
              <a href={image.url}><img src={`thumbs/${image.url}`} alt={image.title} /></a>
            </li>
          ))}
        </ul>
        <h2>raw data:</h2>
        <pre dangerouslySetInnerHTML={{ __html: toml.dump(data) }} />
      </div>
    )
  },
})
