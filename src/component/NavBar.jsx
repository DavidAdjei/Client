import React from 'react'
import { useUser } from '../context/userContext'

export default function NavBar() {
    const {user, logout} = useUser
  return (
      <div>
          <h1>Welcome, { user ? user.name : 'Guest' }</h1>
    </div>
  )
}
