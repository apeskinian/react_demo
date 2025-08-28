import { useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './NewPost.module.css'
import Modal from '../components/Modal';

export default function NewPost({ onAddPost }) {
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
            id: authorText + Math.random(),
            body: bodyText,
            author: authorText
        };
        onAddPost(postData);
    }

    return (
        <Modal>
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
                    <Link to='..' type='button'>Cancel</Link>
                    <button>Submit</button>
                </p>
            </form>
        </Modal>
    )
}