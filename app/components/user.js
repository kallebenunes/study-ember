import react, { useState } from 'react'
import { useEffect } from 'react'

const User = () => {
  useEffect(() => {
    loadUsers()
  }, [])

  async function loadUsers(){
    const res = await fetch('https://raw.githubusercontent.com/kallebenunes/data/main/listusers.json')
    const users = await res.json()
    setUsers(users)

  }

  const [users, setUsers] = useState([])
      return (
        <article className="section-users">
          {users.map(user => <div className="section-users__user" key={user}>{user}</div>)}
        </article>
      )
}

export default User
