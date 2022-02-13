import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './source.module.css'

const Source = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Source - monkehub</title>
        <meta property="og:title" content="Source - monkehub" />
      </Helmet>
    </div>
  )
}

export default Source
