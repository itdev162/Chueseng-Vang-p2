import React, { useState } from 'react'; 
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import './styles.css';
                                                    //Creating a post/review page backend 
const CreatePost = ({ onPostCreated }) => {         //creating a new post/review method backend
    let history = useHistory();
    const [postData, setPostData] = useState({
        title: '',
        body: ''
    });
    const { title, body } = postData;

    const onChange = e => {
        const { name, value } = e.target;

        setPostData({
            ...postData,
            [name]: value
        });
    };

    const create = async () => {
        if (!title || !body) {
            console.log('Title and body are required');
        } else {
            const newPost = {
                id: uuidv4(),
                title: title,
                body: body,
                date: moment().toISOString()
            };

            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };

                const body = JSON.stringify(newPost);
                const res = await axios.post(
                    'http://localhost:5000/api/posts',
                    body,
                    config
                );

                onPostCreated(res.data);
                history.push('/');
            } catch (error) {
                console.error(`Error creating post: ${error.response.data}`);
            }
        }
    };
                                                    ///front end of the page
    return (
        <body>
        <div className="form-container">
            <h2>Write a customer review</h2>
            <input
            name="title"
            type="text"
            placeholder="Name"  
            value={title}
            onChange={e => onChange(e)}
            />
            <textarea
            name="body"
            cols="30"
            rows="10"
            placeholder="What did you like or dislike?"
            value={body}
            onChange={e => onChange(e)}
            ></textarea>
            <button onClick={() => create()}>Submit</button>
        </div>
        <br></br>
        <footer>
                <p>Author: ChickenV<br></br>
                <a href="mailto:Chicken@mail.com">Chicken21@mail.com</a></p>
        </footer>
        </body>
    );
};

export default CreatePost;  