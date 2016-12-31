import React from 'react'
import access from 'safe-access'
import sortBy from 'lodash/sortBy'
import { rhythm } from 'utils/typography'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

class ProjectList extends React.Component {
  render () {
    const { route } = this.props
    const pageLinks = []
    function isCorrectCategory(value) {
      return `/${access(value, 'file.dir')}/` === route.path;
    }
    const filteredPages = route.pages.filter(isCorrectCategory);
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
      <ul>
        {pageLinks}
      </ul>
    )
  }
}

ProjectList.propTypes = {
  category: React.PropTypes.string,
  route: React.PropTypes.object
}

export default ProjectList