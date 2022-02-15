import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './monke.module.css'

const Monke = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>monke - monkehub</title>
        <meta
          name="description"
          content="monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke yeah"
        />
        <meta property="og:title" content="monke - monkehub" />
        <meta
          property="og:description"
          content="i like monke, you like monke. i make website for monke. :)"
        />
      </Helmet>
    </div>
  )
}

export default Monke
