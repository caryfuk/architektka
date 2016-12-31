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
        <Headroom
          wrapperStyle={{
            marginBottom: rhythm(1),
          }}
          style={{
            background: 'lightgray',
          }}
        >
          <div>
            <Link to={prefixLink('/')}>
              Architektka
            </Link>
            <ul>
              <li><Link to={prefixLink('/houses-and-apartments/')}>Houses & Apartments</Link></li>
              <li><Link to={prefixLink('/commercial/')}>Commercial</Link></li>
              <li><Link to={prefixLink('/studies/')}>Studies</Link></li>
              <li><Link to={prefixLink('/objects/')}>Objects</Link></li>
              <li><Link to={prefixLink('/blog/')}>Blog</Link></li>
            </ul>
          </div>
        </Headroom>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  },
})
