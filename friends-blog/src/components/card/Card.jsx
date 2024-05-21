import React from 'react'
import Image from 'next/image'
import styles from './card.module.css'
import Link from 'next/link'

export const Card = ({key, item}) => {
  return (
    <div className={styles.post} key={key}>
        <div className={styles.imgcontainer}>
            <Image src={item.img} alt={item.catSlug} className={styles.image} width={200} height={150}/>
        </div>
        <div className={styles.txtcontainer}>
            <div className={styles.detail}>
                <span className={styles.date}>{item.createdAt}</span>
                <span className={styles.category}>{item.catSlug}</span>
            </div>
            <Link href="/">
            <h1> {item.title}</h1>
            </Link>
            <p className={styles.desc}>
               {item.desc}
            </p>
            <Link href="/">Read more</Link>            
        </div>
    </div>    
  )
}
