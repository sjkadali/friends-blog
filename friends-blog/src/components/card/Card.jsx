import React from 'react'
import Image from 'next/image'
import styles from './card.module.css'
import Link from 'next/link'

export const Card = () => {
  return (
    <div className={styles.post}>
        <div className={styles.imgcontainer}>
            <Image src="/floweringCherry.jpeg" alt="Travel pic" className={styles.image} width={200} height={150}/>
        </div>
        <div className={styles.txtcontainer}>
            <div className={styles.detail}>
                <span className={styles.date}>10-03-2023</span>
                <span className={styles.category}>Culture</span>
            </div>
            <Link href="/">
            <h1> Lorem Ipsum</h1>
            </Link>
            <p className={styles.desc}>
                Lorem ipsum gjhkjkk klk mllllllllllll bnbsjhksjdksdj
                jhjhk jjmmmmmm jksjdlskd mmsmdldl
            </p>
            <Link href="/">Read more</Link>            
        </div>
    </div>    
  )
}
