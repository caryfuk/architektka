import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div className='categoryPage'>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Portfolio of Zuzana Kňazeová, Knazeova"},
            {"name": "keywords", "content": "portfolio, architecture, design, Zuzana Kňazeová, Knazeova"}
          ]}
        />
        <h1>Great design makes great people.</h1>
        <p>Space, environment, light, material, people.</p>
      </div>
    )
  }
}
