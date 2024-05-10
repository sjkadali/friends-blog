import React from 'react'
import styles from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'

export const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <div className={styles.category}>        
          <Link  href="/blog?cat=style"
            className={`${styles.category} ${styles.food}`}>
            <Image 
              src="/fries.jpg"
              alt=""
              width={32}
              height={32}
              className={styles.Image}
            />
            Food
          </Link>
          <Link  href="/blog?cat=style"
            className={`${styles.category} ${styles.travel}`}>
            <Image 
              src="/travel.jpg"
              alt=""
              width={32}
              height={32}
              className={styles.Image}
            />
            Travel
          </Link>
        </div>
      </div>
    </div>
  )
}
