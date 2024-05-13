"use client"
import React, { useState } from 'react'
import styles from './authLinks.module.css';
import Link from 'next/link';

export const AuthLinks = () => {

  const [open, setOpen] = useState(false);
  const status = "Authenticated";
  return (
    <>
      { status === "NotAuthenticated" ? (
          <Link href="/login" className={styles.link}>Login</Link>
        ) : (
          <>
          <Link href="/post" className={styles.link}>Post</Link>
          <Link href="/logout" className={styles.link}>Logout</Link>
          </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open) }>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/" >Homepage</Link>
          <Link href="/" >About</Link>
          <Link href="/">Contact</Link>
          {status === "NotAuthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/post">Post</Link>
              <span>Logout</span>
            </>
          )}
        </div>
      )}
   </> 
  );
}
