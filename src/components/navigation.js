import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import styles from './navigation.module.css'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Helmet from 'react-helmet'


export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>
    </ul>
  </nav>
)


/* class MenuTemplate extends React.Component {
  render() {
    const menu = get(this.props, 'data.allContentfulMenu');

    return(
      <Layout location={this.props.location}>
        <div style={{color: '#FFF'}}>
          <h4>{menu.title}</h4>
          <p>{menu.description[0].description}</p>
        </div>
      </Layout>
    )
  }

}
export default MenuTemplate */



/* export const pageQuery = graphql`
query MenuTemplateQuery {
  allContentfulMenu {
    title
  }
}
` */

