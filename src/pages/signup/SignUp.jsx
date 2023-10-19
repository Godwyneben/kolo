import { useState } from 'react'

// styles 
import styles from './SignUp.module.css'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
  } 

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
        <h2>Sign Up</h2>
        <label>
          <span>email:</span>
          <input 
            type="text"
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
          />
        </label>

        <label>
          <span>password:</span>
          <input 
            type="password"
            onChange={(e) => setPassword(e.target.value)} 
            value={password}
          />
        </label>

        <label>
          <span>username:</span>
          <input 
            type="text"
            onChange={(e) => setUsername(e.target.value)} 
            value={username}
          />
        </label>

        <button className="btn">signup</button>
    </form>
  )
}
