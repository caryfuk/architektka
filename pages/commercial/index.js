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
          title={`Komerčné ojekty | ${config.siteTitle}`}
          meta={[
            {"name": "description", "content": "Komerčné objekty"},
            {"name": "keywords", "content": "komerčné objekty, architektura, portfolio, Zuzana Kňazeová, Knazeova"}
          ]}
        />
        <h1>Komerčné objekty</h1>
        <ProjectList route={this.props.route} />
      </div>
    )
  }
}

CategoryIndex.propTypes = {
  route: React.PropTypes.object,
}

export default CategoryIndex