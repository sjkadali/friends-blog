import React from 'react'
import styles from './singlePage.module.css'
import { Menu } from '@/components/Menu/Menu'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'

const SinglePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.txtContainer}>
                <h1>Lorem Ipsum color</h1>
                <div className={styles.user}>
                    <div className={styles.userImgContainer}>
                        <Image src="/travel.jpg" alt="" fill className={styles.avatar}/>
                    </div>
                    <div className={styles.userTxtContainer}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}>05-23-2020</span>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/travel.jpg" alt="" fill className={styles.image}/>
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.post}></div>
            <Comments/>
            <Menu/>
        </div>
    </div>
  )
}

export default SinglePage