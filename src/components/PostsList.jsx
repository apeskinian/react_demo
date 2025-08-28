import { useState } from 'react'

import classes from './PostsList.module.css'

import Post from './Post'
import NewPost from './NewPost'
import Modal from './Modal'

export default function PostsList({ isPosting, onStopPosting }) {
    const [bodyText, setBodyText] = useState('');
    const [authorText, setAuthorText] = useState('');

    function handleBodyChange(event) {
        setBodyText(event.target.value);
    }

    function handleAuthorChange(event) {
        setAuthorText(event.target.value);
    }

    const modal = (
        <Modal onClose={onStopPosting}>
            <NewPost
                onBodyChange={handleBodyChange}
                onAuthorChange={handleAuthorChange}
            />
        </Modal>
    )

    return (
        <>
            {isPosting && modal}
            <ul className={classes.posts}>
                <Post author={authorText} body={bodyText} />
                <Post author='Niamh' body='React is brilliant' />
            </ul>
        </>
    )
}