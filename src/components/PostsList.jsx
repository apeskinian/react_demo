import classes from './PostsList.module.css'

import Post from './Post'
import NewPost from './NewPost'
import Modal from './Modal'
import { useState } from 'react'

export default function PostsList({ isPosting, onStopPosting }) {
    const [posts, setPosts] = useState([]);

    function handleAddPost(postData) {
        setPosts(prevPosts => [postData, ...prevPosts])
        onStopPosting();
    }

    const modal = (
        <Modal onClose={onStopPosting}>
            <NewPost
                onAddPost={handleAddPost}
                onCancel={onStopPosting}
            />
        </Modal>
    )

    return (
        <>
            {isPosting && modal}
            {posts.length > 0 &&
                <ul className={classes.posts}>
                    {posts.map((post) => (
                        <Post key={post.id} author={post.author} body={post.body} />
                    ))}
                </ul>
            }
            {posts.length === 0 && 
                <div style={{textAlign: 'center', color: 'white'}}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            }
        </>
    )
}