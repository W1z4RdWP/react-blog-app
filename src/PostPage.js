import React from 'react'
import { useParams, Link } from 'react-router-dom'


const PostPage = ({ posts, handleDelete }) => {

    const {id} = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    return (
        <main className='PostPage'>
            <article className='post'>
                {post && 
                <>
                    <h2>{post.title}</h2>
                    <p className="postDate">{post.datetime}</p>
                    <p className="postBody">{post.body}</p>
                    <Link to={`/edit/${post.id}`}>
                        <button className='editButton'>Редактировать</button>
                    </Link>
                    <button className='deleteButton' onClick={()=>handleDelete(post.id)}>Удалить</button>
                </>}
                {!post &&
                    <>
                        <h2>404 Страница не найдена</h2>
                        <p>Увы, и ох...</p>
                        <p>
                            <Link to="/">На основную страницу</Link>
                        </p>
                    </>
                }
            </article>
            
            <h1>PostPage</h1></main>
    )
}

export default PostPage