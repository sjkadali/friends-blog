"use client"
import React, { useState } from 'react'
import styles from './authLinks.module.css';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

export const AuthLinks = () => {

  const [open, setOpen] = useState(false);
  const { status } = useSession()
  return (
    <>
      { status === "unauthenticated" ? (
          <Link href="/login" className={styles.link}>Login</Link>
        ) : (
          <>
          <Link href="/post" className={styles.link}>Post</Link>
          <Link href="/logout" className={styles.link} onClick={() => signOut()}>Logout</Link>
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
          {status === "unauthenticated" ? (
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
