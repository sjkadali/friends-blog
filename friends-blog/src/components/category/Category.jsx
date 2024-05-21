
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './category.module.css'


export const Category = ({data}) => {
  return (    
    <div>
        <Link  href="/blog?cat=style"
            className={`${styles.category} ${styles[data.slug]}`}
            key={data.id}
          >
          {data.img && (
            <Image 
              src={data.img}
              alt=""
              width={32}
              height={32}
              className={styles.Image}
            /> 
          )}                
            {data.title
            }           
          </Link>
    </div>
  )
}

