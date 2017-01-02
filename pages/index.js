import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import Slider from 'react-slick'
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
        <Slider
          infinite
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          arrows={false}
        >
          <div><Link to={prefixLink('/studies/solo/')}><img src={`/studies/solo/1200/picarch3a.jpg`} /></Link></div>
          <div><Link to={prefixLink('/studies/solo/')}><img src={`/studies/solo/1200/picarch3b.jpg`} /></Link></div>
        </Slider>
      </div>
    )
  }
}
