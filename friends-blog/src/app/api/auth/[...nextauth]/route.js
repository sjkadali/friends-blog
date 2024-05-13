import React from 'react'
import { authOptions } from '@/utils/auth'
import NextAuth from 'next-auth/next'

const route = NextAuth(authOptions)

export default route