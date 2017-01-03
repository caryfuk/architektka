import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import '../styles/main.less'
import { rhythm } from '../utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <Headroom>
          <Link to={prefixLink('/')}>Architektka</Link>
          <ul>
            <li><Link to={prefixLink('/houses-and-apartments/')}>Domy a byty</Link></li>
            <li><Link to={prefixLink('/commercial/')}>Komerčné objekty</Link></li>
            <li><Link to={prefixLink('/studies/')}>Štúdie</Link></li>
            <li><Link to={prefixLink('/objects/')}>Objekty</Link></li>
            <li><Link to={prefixLink('/blog/')}>Blog</Link></li>
          </ul>
        </Headroom>
        <div className='content'>
          {this.props.children}
        </div>
      </div>
    )
  },
})
