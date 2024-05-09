import React from 'react'
import styles from './authLinks.module.css';
import Link from 'next/link';

export const AuthLinks = () => {
  const status = "NotAuthenticated";
  return (
    <>
      { status === "NotAuthenticated" ? (
          <Link href="/login" className={styles.link}>Login</Link>
        ) : (
          <Link href="/logout">Logout</Link>
        )
      }
   </> 
  );
}
