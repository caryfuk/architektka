import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import Slider from 'react-slick'
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    console.log(this.props.route)
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
          <div><img src={`/studies/solo/1200/picarch3a.jpg`} /></div>
          <div><img src={`/studies/solo/1200/picarch3b.jpg`} /></div>
        </Slider>
      </div>
    )
  }
}
