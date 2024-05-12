import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './menu.module.css'

export const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imgcontainer}>
            <Image src="/travel.jpg" alt="Travel" className={styles.image}
               width={60} height={40}
            />
          </div>
          <div className={styles.txtcontainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3>Travel Details</h3>
            <div className={styles.detail}>
              <span className={styles.username}>ABC</span>
              <span className={styles.date}>09-24-2012</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imgcontainer}>
            <Image src="/travel.jpg" alt="Travel" className={styles.image}
               width={60} height={40}
            />
          </div>
          <div className={styles.txtcontainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3>Travel Details</h3>
            <div className={styles.detail}>
              <span className={styles.username}>ABC</span>
              <span className={styles.date}>09-24-2012</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imgcontainer}>
            <Image src="/travel.jpg" alt="Travel" className={styles.image}
               width={60} height={40}
            />
          </div>
          <div className={styles.txtcontainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3>Travel Details</h3>
            <div className={styles.detail}>
              <span className={styles.username}>ABC</span>
              <span className={styles.date}>09-24-2012</span>
            </div>
          </div>
        </Link>
      </div>  
    </div>
  )
}
