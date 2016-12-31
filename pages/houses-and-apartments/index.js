import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'
import ProjectList from '../../components/projectList'

class CategoryIndex extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={`Houses & Apartments | ${config.siteTitle}`}
          meta={[
            {"name": "description", "content": "Houses & Apartments"},
            {"name": "keywords", "content": "architecture, houses, apartments, portfolio"},
          ]}
        />
        <h1>Houses & Apartments</h1>
        <p>These are my projects for private customers.</p>
        <ProjectList route={this.props.route} />
      </div>
    )
  }
}

CategoryIndex.propTypes = {
  route: React.PropTypes.object,
}

export default CategoryIndex