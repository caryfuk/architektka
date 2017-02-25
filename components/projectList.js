import React from 'react'
import access from 'safe-access'
import sortBy from 'lodash/sortBy'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

class ProjectList extends React.Component {
  render () {
    const { route, category, featured } = this.props
    const pageLinks = []
    function isCorrectCategory(value) {
      if (featured) {
        return access(value, 'data.featured')
      } else {
        if (access(value, 'data.category')) {
          return access(value, 'data.category').indexOf(category || access(route, 'page.file.name')) > -1
        }
      }
    }
    const filteredPages = route.pages.filter(isCorrectCategory);
    const sortedPages = sortBy(filteredPages, (page) =>
      access(page, 'data.order')
    )
    sortedPages.map((page, i) => {
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
    })
    return (
      <ul className='projectList'>
        {pageLinks}
      </ul>
    )
  }
}

ProjectList.propTypes = {
  route: React.PropTypes.object,
  featured: React.PropTypes.bool
}

export default ProjectList