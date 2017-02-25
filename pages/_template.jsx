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

  toggleMenu (e) {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
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
            <input id="menuButton" type='checkbox' checked={this.state.menuOpen} />
            <label htmlFor='menuButton' onClick={(e) => this.toggleMenu(e)} />
            <ul onClick={() => this.hideMenu()}>
              <li><Link to={prefixLink('/interior-design/')}>Interior design</Link></li>
              <li><Link to={prefixLink('/exterior-design/')}>Exterior design</Link></li>
              <li><Link to={prefixLink('/objects/')}>Objects</Link></li>
              <li><Link to={prefixLink('/contact/')}>Contact me</Link></li>
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
