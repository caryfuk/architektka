import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import Slider from 'react-slick'
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div className='categoryPage'>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Portfolio Zuzana Kňazeová, Knazeova"},
            {"name": "keywords", "content": "portfolio, Zuzana Kňazeová, Knazeova, architektura"}
          ]}
        />
        <div style={{
          maxWidth: '600px',
          margin: '0 auto 40px auto'
        }}>
          <p>
            Hello,<br /><br />
            It is nice to see you here. If you have any questions, comments or interest in cooperation feel free to contact me curiousuzi@yahoo.com
          </p>
        </div>
        <Slider
          infinite
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          arrows={false}
        >
          <div><Link to={prefixLink('/studies/74/')}><img src={`/studies/74/1600/picarch1b.jpg`} /></Link></div>
          <div><Link to={prefixLink('/houses-and-apartments/ondrovicova/')}><img src={`/houses-and-apartments/ondrovicova/1600/3.jpg`} /></Link></div>
          <div><Link to={prefixLink('/houses-and-apartments/humenne/')}><img src={`/houses-and-apartments/humenne/1600/podorys.jpg`} /></Link></div>
        </Slider>
      </div>
    )
  }
}
