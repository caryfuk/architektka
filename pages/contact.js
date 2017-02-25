import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import ContactForm from '../components/contactForm'

class CategoryIndex extends React.Component {
  render () {
    return (
      <div className='contactPage'>
        <Helmet
          title='Contact me'
          meta={[
            {"name": "keywords", "content": "architektura, portfolio, Zuzana Kňazeová, Knazeova"}
          ]}
        />
        <h1>Contact me</h1>
        <ContactForm />
      </div>
    )
  }
}

CategoryIndex.propTypes = {
  route: React.PropTypes.object,
}

export default CategoryIndex