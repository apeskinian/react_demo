import classes from './PostsList.module.css'

import Post from './Post'
import NewPost from './NewPost'
import Modal from './Modal'
import { useState } from 'react'

export default function PostsList({ isPosting, onStopPosting }) {
    const [ posts, setPosts ] = useState([]);

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
            <ul className={classes.posts}>
                {posts.map((post) => (
                    <Post author={post.author} body={post.body}/>
                ))}
            </ul>
        </>
    )
}