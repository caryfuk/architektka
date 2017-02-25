import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import ProjectList from '../components/projectList'
import ContactForm from '../components/contactForm'

export default class Index extends React.Component {
  render () {
    return (
      <div className='homepage'>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Portfolio of Zuzana Kňazeová, Knazeova"},
            {"name": "keywords", "content": "portfolio, architecture, design, Zuzana Kňazeová, Knazeova"}
          ]}
        />
        <h1>Great design makes great people</h1>
        <p>
          I create <Link to={prefixLink('/interior-design/')}>interior</Link> and <Link to={prefixLink('/exterior-design/')}>exterior</Link> design for both private and business customers.<br />
          I also like to design <Link to={prefixLink('/objects/')}>various objects</Link> intended for daily use.
        </p>
        <h2>Featured projects</h2>
        <ProjectList route={this.props.route} featured={true} />
        <h2>Contact me</h2>
        <p>If you like what you're seeing here, don't hesitate to contact me, I can work for you.</p>
        <ContactForm />
      </div>
    )
  }
}
