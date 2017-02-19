import React from 'react'
import access from 'safe-access'
import sortBy from 'lodash/sortBy'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

class ProjectList extends React.Component {
  render () {
    const { route } = this.props
    const pageLinks = []
    function isCorrectCategory(value) {
      return route.page.requirePath !== access(value, 'requirePath') &&
             access(value, 'path').includes(route.page.path)
    }
    const filteredPages = route.pages.filter(isCorrectCategory);
    const sortedPages = sortBy(filteredPages, (page) =>
      access(page, 'data.order')
    )
    sortedPages.map((page, i) => {
      if (access(page, 'file.ext') === 'toml' || access(page, 'data.order')) {
        const title = access(page, 'data.title_en')
        pageLinks.push(
          <li
            key={page.path}
            style={{
              animationDelay: `${i*0.05}s`,
              WebkitAnimationDelay: `${i*0.05}s`
            }}>
              <Link to={prefixLink(page.path)}>
                {access(page, 'data.images') && <img src={prefixLink(`${page.path}600/${access(page, 'data.images')[0].url}.jpg`)} />}
                <span>{title}</span>
              </Link>
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