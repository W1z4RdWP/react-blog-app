import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <main className='Missing'>
      <h2>404 Страница не найдена</h2>
      <p>Увы, и ох...</p>
      <p>
        <Link to="/">На основную страницу</Link>
      </p>
    </main>
  )
}

export default Missing