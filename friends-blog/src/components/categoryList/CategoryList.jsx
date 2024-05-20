
import React from 'react'
import styles from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'
import prisma from '@/utils/connect'
import { Category } from '../category/Category'

const getData = async () => {
  const res = await prisma.category.findMany();

  if(res.Error) {
    throw new Error("Failed");
  }
  return res;
}

export const CategoryList = async () => {
  const data = await getData();
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {
        data?.map((item) => {          
          return <Category key={item?.id} data={item}/>
        }) }          
      </div>
    </div>

  )
}
