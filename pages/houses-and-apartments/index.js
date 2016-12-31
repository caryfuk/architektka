import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import { prefixLink } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import Helmet from "react-helmet"
import access from 'safe-access'
import { config } from 'config'

class CategoryIndex extends React.Component {
  render () {
    const pageLinks = []
    function isCorrectCategory(value) {
      return access(value, 'file.dir') === 'houses-and-apartments';
    }
    const filteredPages = this.props.route.pages.filter(isCorrectCategory);
    const sortedPages = sortBy(filteredPages, (page) =>
      access(page, 'data.order')
    )
    sortedPages.forEach((page) => {
      if (access(page, 'file.ext') === 'toml' || access(page, 'data.order')) {
        const title = access(page, 'data.title') || page.path
        pageLinks.push(
          <li
            key={page.path}
            style={{
              marginBottom: rhythm(1/4),
            }}
          >
            <Link to={prefixLink(page.path)}>{title}</Link>
          </li>
        )
      }
    })
    return (
      <div>
        <Helmet
          title={config.blogTitle}
          meta={[
            {"name": "description", "content": "Houses & Apartments"},
            {"name": "keywords", "content": "architecture, houses, apartments"},
          ]}
        />
        <ul>
          {pageLinks}
        </ul>
      </div>
    )
  }
}

CategoryIndex.propTypes = {
  route: React.PropTypes.object,
}

export default CategoryIndex