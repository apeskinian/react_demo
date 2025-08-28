import { useState } from 'react';

import classes from './NewPost.module.css'

export default function NewPost({ onCancel, onAddPost }) {
    const [bodyText, setBodyText] = useState('');
    const [authorText, setAuthorText] = useState('');

    function handleBodyChange(event) {
        setBodyText(event.target.value);
    }

    function handleAuthorChange(event) {
        setAuthorText(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const postData = {
            body: bodyText,
            author: authorText
        };
        onAddPost(postData);
    }

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <p>
                <label htmlFor='body'>Text</label>
                <textarea id='body' required rows={3} onChange={handleBodyChange} />
            </p>
            <p>
                <label htmlFor='name'>Your name</label>
                <input id='name' required onChange={handleAuthorChange} />
            </p>
            <p className={classes.actions}>
                <button type='button' onClick={onCancel}>Cancel</button>
                <button>Submit</button>
            </p>
        </form>
    )
}