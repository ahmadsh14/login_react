import React, { useEffect, useState } from "react";
import axios from "axios";
import PostHeader from "./PostHeader";
import classes from './UserPost.module.css'
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, Routes, useParams } from 'react-router-dom';

const PostComment = () => {
    const location = useLocation();
    const post = location.state.post;
    let js = localStorage.getItem("users");
    let postda = JSON.parse(js)
    const [user, setUser] = useState([]);

    useEffect(() => {

        const FetchData = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
                setUser(response.data);

            } catch (error) {
                console.log('error: ', error);
            }
        }
        FetchData();
    }, []);
    return (
        <>
            <PostHeader headerTitle="Comments" subtitle="What's new today" />
            <div className={classes.main}>
                <section>
                    <img src="../pc.svg" id={classes.edimg}></img>
                    <h1 className={classes.name}>{postda.name}</h1>
                    <h4 className={classes.userName}>{`@ ${postda.username}`}</h4>
                    <p className={classes.postStyle}>{post.body}</p>
                    <textarea type='text' id={classes.textarea1} placeholder="Add Comment...."></textarea>
                </section>
                {user.map((comment) =>
                    <section key={comment.id}>
                        <img src="../pc.svg" id={classes.edimg}></img>
                        <h1 id={classes.edit2}>{comment.name}</h1>
                        <h3 id={classes.edit3}>{comment.body}</h3>
                    </section>
                )}

            </div>
        </>
    );
}

export default PostComment;