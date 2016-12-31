import React from 'react'
import toml from 'toml-js'
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
        <ul>
          {data.images && data.images.map((image) => (
            <li key={image.url}>
              <img src={image.url} alt={image.title} />
            </li>
          ))}
        </ul>
        <h2>raw data:</h2>
        <pre dangerouslySetInnerHTML={{ __html: toml.dump(data) }} />
      </div>
    )
  },
})
