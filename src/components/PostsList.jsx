import { useState } from 'react'

import classes from './PostsList.module.css'

import Post from './Post'
import NewPost from './NewPost'

export default function PostsList() {
    const [ bodyText, setBodyText ] = useState('');
    const [ authorText, setAuthorText ] = useState('');

    function handleBodyChange(event) {
        setBodyText(event.target.value);
    }

    function handleAuthorChange(event) {
        setAuthorText(event.target.value);
    }

    return (
        <>
            <NewPost onBodyChange={handleBodyChange} onAuthorChange={handleAuthorChange}/>
            <ul className={classes.posts}>
                <Post author={authorText} body={bodyText} />
                <Post author='Niamh' body='React is brilliant' />
            </ul>
        </>
    )
}