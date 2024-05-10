"use client"

import React, { useContext } from 'react'
import styles from './themeToggle.module.css';
import Image from 'next/image';
import { ThemeContext } from '@/context/ThemeContext';

export const ThemeToggle = () => {

  const {toggle, theme} = useContext(ThemeContext)
  console.log(theme);

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark" ? { backgroundColor: "#fffffa" } : { backgroundColor: "#0f172a" }
      }
    >
      <Image src="/moon.png" alt="dark-mode" width={14} height={14}/>
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "#fffffa" }
        }
      ></div>
      <Image src="/sun.png" alt="light-mode" width={14} height={14}/>
    </div>
  )
}
