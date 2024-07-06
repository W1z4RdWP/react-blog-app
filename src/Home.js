import React from 'react'
import Feed from './Feed'

const Home = ({posts, fetchError, isLoading}) => {
  return (
    <main className='Home'>
       {isLoading && <p className='statusMsg'>Загрузка...</p>}
       {fetchError && <p className='statusMsg' style={{color:"red"}}>{fetchError}</p>}
       {!isLoading && !fetchError && (posts.length ? <Feed posts={posts}/> : <p className='statusMsg'>Нет никаких публикаций</p>)}
    </main>
  )
}

export default Home