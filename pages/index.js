import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Portfolio Zuzana Kňazeová, Knazeova"},
            {"name": "keywords", "content": "portfolio, Zuzana Kňazeová, Knazeova, architektura"}
          ]}
        />
        <h1>
          Portfolio
        </h1>
      </div>
    )
  }
}
