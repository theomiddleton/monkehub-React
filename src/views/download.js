import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './download.module.css'

const Download = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>download - monkehub</title>
        <meta property="og:title" content="download - monkehub" />
      </Helmet>
    </div>
  )
}

export default Download
