import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => (
  <div className={styles.preview}>
    <Img alt="" fluid={article.heroImage.fluid} />
    <div className={styles.textBox}>
      <h4 className={styles.categoryText}>{article.category.name}</h4>
      <h3 className={styles.previewTitle}>
        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>
      <p className={styles.mainText} 
        dangerouslySetInnerHTML={{
         __html: article.description.childMarkdownRemark.html,
        }}
      />
    </div>
  </div>
)
