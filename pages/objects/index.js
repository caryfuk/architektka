import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'
import ProjectList from '../../components/projectList'

class CategoryIndex extends React.Component {
  render () {
    return (
      <div className='categoryPage'>
        <Helmet
          title={`Objekty | ${config.siteTitle}`}
          meta={[
            {"name": "description", "content": "Objekty"},
            {"name": "keywords", "content": "objekty, nábytok, šperky, portfolio, Zuzana Kňazeová, Knazeova"}
          ]}
        />
        <h1>Objekty</h1>
        <ProjectList route={this.props.route} />
      </div>
    )
  }
}

CategoryIndex.propTypes = {
  route: React.PropTypes.object,
}

export default CategoryIndex