import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import ProjectList from '../components/projectList'

class CategoryIndex extends React.Component {
  render () {
    return (
      <div className='categoryPage'>
        <Helmet
          title={`Exterior design | ${config.siteTitle}`}
          meta={[
            {"name": "keywords", "content": "exterior design, exteriors, portfolio, Zuzana Kňazeová, Knazeova"}
          ]}
        />
        <h1>Exterior design</h1>
        <p>Exterior design for both commercial and private use.</p>
        <ProjectList route={this.props.route} />
      </div>
    )
  }
}

CategoryIndex.propTypes = {
  route: React.PropTypes.object,
}

export default CategoryIndex