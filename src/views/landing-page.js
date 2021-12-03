import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import PlaceCard from '../components/place-card'
import projectStyles from '../style.module.css'
import styles from './landing-page.module.css'

const LandingPage = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>monkehub</title>
        <meta property="og:title" content="monkehub" />
      </Helmet>
      <div className={styles['Top-container']}>
        <nav className={styles['Navbar']}>
          <h1>
            <span className={styles['text']}>Monke</span>
            <span className={styles['text01']}>Hub</span>
          </h1>
          <div className={styles['Right-side']}>
            <div className={styles['Links-container']}>
              <a href="#main-section" className={styles['link']}>
                Home
              </a>
              <Link to="/aboutus" className={styles['navlink']}>
                About
              </Link>
              <Link to="/contact" className={styles['navlink1']}>
                Contact
              </Link>
            </div>
            <a href="#main-section" className={styles['link1']}>
              <SolidButton
                button="Monke"
                rootClassName="rootClassName"
                className={styles['component']}
              ></SolidButton>
            </a>
          </div>
          <svg viewBox="0 0 1024 1024" className={styles['Burger-menu']}>
            <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
          </svg>
        </nav>
        <div className={styles['Hero']}>
          <div className={styles['Content-container']}>
            <h1 className={` ${projectStyles['heading']} ${styles['text02']} `}>
              <span className={styles['text03']}>Monke</span>
              <span className={styles['text04']}>Hub</span>
            </h1>
            <h2
              className={` ${styles['Subheading']} ${projectStyles['subheading']} `}
            >
              One of the places for monke content
            </h2>
            <span className={styles['text05']}>
              <span>we love monke</span>
            </span>
            <a href="#main-section" className={styles['link2']}>
              <SolidButton
                button="Explore Monke"
                className={styles['component1']}
              ></SolidButton>
            </a>
          </div>
        </div>
      </div>
      <div id="main-section" className={styles['Main']}>
        <h1 className={styles['text07']}>Some of our favorite monke</h1>
        <span className={styles['text08']}>:)</span>
        <div className={styles['Cards-container']}>
          <PlaceCard
            city="Hot spring monke"
            image="https://images.unsplash.com/photo-1578948610588-ffe24448f5ed?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1174&amp;q=80"
            description="these be in japan right? Photo by Fabrizio Chiagano on Unsplash"
          ></PlaceCard>
          <PlaceCard
            city="smol monke"
            image="https://images.unsplash.com/photo-1515444347446-4380c4d8a6ed?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1742&amp;q=80"
            description="little man, little baby boy.           Photo by Diego GuzmÃ¡n on Unsplash"
          ></PlaceCard>
          <PlaceCard
            city="Gorilla monke"
            image="https://images.unsplash.com/photo-1445583934509-4ad5ffe6ef08?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80"
            description="what he thinkin bout???? Photo by Rob Schreckhise on Unsplash"
          ></PlaceCard>
          <PlaceCard
            city="funy hair monke"
            image="https://images.unsplash.com/photo-1603789763289-d215bc523f92?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
            description="its a pretty fresh tho. Photo by Silver Ringvee on Unsplash"
          ></PlaceCard>
          <PlaceCard
            city="silly monke"
            image="https://images.unsplash.com/photo-1583002230893-c34a80ac9791?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80"
            description="hehe he got his tongue out. Photo by Tanja Cotoaga on Unsplash"
          ></PlaceCard>
          <PlaceCard
            city="juggle monke"
            image="https://images.unsplash.com/photo-1614526952472-dc55b258ac2a?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
            description="will he catch it???? Photo by Ningyu He on Unsplash"
          ></PlaceCard>
        </div>
      </div>
      <div className={styles['Footer']}>
        <div className={styles['Menu']}>
          <h1>
            <span>Monke</span>
            <span className={styles['text10']}>Hub</span>
          </h1>
          <div className={styles['Links-container1']}>
            <div className={styles['container1']}>
              <Link to="/aboutus" className={styles['navlink2']}>
                About us
              </Link>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link3']}
              >
                FAQ
              </a>
              <Link to="/contact" className={styles['navlink3']}>
                Contact
              </Link>
            </div>
          </div>
          <div className={styles['Follow-container']}>
            <span className={styles['text11']}>monke</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
