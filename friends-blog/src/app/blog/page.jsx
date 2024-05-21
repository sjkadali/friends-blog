import React from 'react'
import styles from './blogpage.module.css'
import { CardList } from '@/components/cardList/CardList';
import { Menu } from '@/components/Menu/Menu';

 const BlogPage = ({searchParams}) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  console.log("page, cat: ", page, cat);
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>{cat} Blog</h1>
        <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
        </div>
    </div>
  );
}


export default BlogPage;
