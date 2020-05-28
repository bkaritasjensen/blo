import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationDelivery}>
        <Link to="/">
          <img src=""/>
          <h4></h4>
          <p></p>
        </Link>
      </li>
      <li className={styles.navigationParcels}>
        <Link to="/">
          <img src=""/>
          <h4></h4>
          <p> </p>
        </Link>
      </li>
      <li className={styles.navigationQuality}>
        <Link to="/">
          <img src=""/>
          <h4></h4>
          <p></p>
        </Link>
      </li>
      <li className={styles.navigationService}>
        <Link to="/">
          <img src=""/>
          <h4></h4>
          <p> </p>
        </Link>
      </li>
    </ul>
  </nav>
)
