import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'
import ProjectList from '../../components/projectList'

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
        <form action='https://formspree.io/pavel.moravec@gmail.com' method='POST'>
          <div className='pair'>
            <label htmlFor='formName'>Your name:</label>
            <input id='formName' type='text' name='name' />
          </div>
          <div className='pair'>
            <label htmlFor='formMail'>Your e-mail:</label>
            <input id='formMail' type='email' name='_replyto' />
          </div>
          <div className='pair'>
            <label htmlFor='formMessage'>Your message:</label>
            <textarea id='formMessage' name='message'></textarea>
          </div>
          <div className='pair'>
            <button type='submit'>Send</button>
          </div>
        </form>
      </div>
    )
  }
}

CategoryIndex.propTypes = {
  route: React.PropTypes.object,
}

export default CategoryIndex