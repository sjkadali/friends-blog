import React from 'react'
import styles from './singlePage.module.css'
import { Menu } from '@/components/Menu/Menu'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'
import { Remarkable } from 'remarkable';

const getData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`,
     {cache: "no-store"}
    );
  
    if(!res.ok) {
      throw new Error("Failed");
    }    
    return res.json();
} 

const md = new Remarkable();

function renderMarkdownToHTML(markdown) {
  // This is ONLY safe because the output HTML
  // is shown to the same user, and because you
  // trust this Markdown parser to not have bugs.
  const renderedHTML = md.render(markdown);
  return {__html: renderedHTML};
}

const SinglePage = async ({ params }) => {
    const { slug } = params;
    const data = await getData(slug);
    console.log("data:",data, slug);
    const markup = renderMarkdownToHTML(data?.desc);
    
   return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.txtContainer}>
                <h1>{data?.title}</h1>
                <div className={styles.user}>
                    {data?.user.image && (
                        <div className={styles.userImgContainer}>
                            <Image src={data.user.image} alt="" fill className={styles.avatar}/>
                        </div>
                    )}
                    <div className={styles.userTxtContainer}>
                        <span className={styles.username}>{data?.user.name}</span>
                        <span className={styles.date}>05-23-2020</span>
                    </div>
                </div>
            </div>
            {data?.img && (
                <div className={styles.imgContainer}>
                <Image src={data.img} alt="" fill className={styles.image}/>
            </div>
            )}            
        </div>
        <div className={styles.content}>
            <div className={styles.post}></div>
            <div className={styles.description}
                dangerouslySetInnerHTML={markup}
            />
            <div className={styles.comment}>
                <Comments postSlug={slug}/>
            </div>            
            <Menu/>
        </div>
    </div>
  );
}

export default SinglePage