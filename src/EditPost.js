import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';

const EditPost = ({
    posts = [], handleEdit, editBody, setEditBody, editTitle, setEditTitle
}) => {
    const { id } = useParams();
    const post = posts?.find(post => (post.id).toString() === id);


    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post, setEditTitle, setEditBody])

    return (
        <main className='NewPost'>
            {editTitle &&
                <>
                    <h2>Edit Post</h2>
                    <form className='newPostForm' onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="postTitle">Title:</label>
                        <input
                            id="postTitle"
                            type="text"
                            required
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                        />
                        <label htmlFor="postBody">Post:</label>
                        <textarea name="" id="postBody" required value={editBody}
                            onChange={(e) => setEditBody(e.target.value)}
                        />
                        <button type='submit' onClick={() => handleEdit(post.id)}>Submit</button>


                    </form>
                </>
            }
            {!editTitle &&
                <>
                    <h2>404 Страница не найдена</h2>
                    <p>Увы, и ох...</p>
                    <p>
                        <Link to="/">На основную страницу</Link>
                    </p>
                </>

            }
        </main>

    )
}

export default EditPost