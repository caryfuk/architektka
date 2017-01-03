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

  getInitialState () {
    return {
      menuOpen: false
    }
  },

  toggleMenu () {
    if (this.state.menuOpen) {
      this.setState({
        menuOpen: false
      })
    } else {
      this.setState({
        menuOpen: true
      })
    }
  },

  hideMenu () {
    this.setState({
      menuOpen: false
    })
  },

  render () {
    return (
      <div>
        <Headroom>
          <Link to={prefixLink('/')} className='logo' onClick={() => this.hideMenu()}>Architektka</Link>
          <nav>
            <span onClick={() => this.toggleMenu()} />
            <ul className={this.state.menuOpen ? 'open' : ''} onClick={() => this.hideMenu()}>
              <li><Link to={prefixLink('/houses-and-apartments/')}>Domy a byty</Link></li>
              <li><Link to={prefixLink('/commercial/')}>Komerčné objekty</Link></li>
              <li><Link to={prefixLink('/studies/')}>Štúdie</Link></li>
              <li><Link to={prefixLink('/objects/')}>Objekty</Link></li>
              <li><Link to={prefixLink('/blog/')}>Blog</Link></li>
            </ul>
          </nav>
        </Headroom>
        <div className='content' onClick={() => this.hideMenu()}>
          {this.props.children}
        </div>
      </div>
    )
  },
})
