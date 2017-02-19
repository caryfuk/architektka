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
          title={`Complex solutions | ${config.siteTitle}`}
          meta={[
            {"name": "description", "content": "Complete solutions"},
            {"name": "keywords", "content": "interior & exterior design, interior, exterior, architecture, portfolio, Zuzana Kňazeová, Knazeova"}
          ]}
        />
        <h1>Complex solutions</h1>
        <p>Complex solutions for both private and public use.</p>
        <ProjectList route={this.props.route} />
      </div>
    )
  }
}

CategoryIndex.propTypes = {
  route: React.PropTypes.object,
}

export default CategoryIndex