import React, { useEffect, useState } from "react";
import PostHeader from "./PostHeader";
import axios from "axios";
import classes from './UserPost.module.css'
import AddComment from "./AddComment";

const UserPost = () => {
    let js = localStorage.getItem("users");
    let postda = JSON.parse(js)

    const [user, setUser] = useState([]);
    const [AddComment, setAddComment] = useState('');
    const [AddNewPost, setAddNewPost] = useState('');

    useEffect(() => {

        const FetchData = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${postda.id}/posts`);
                setUser(response.data);
            } catch (error) {
                console.log('error: ', error);
            }
        }
        FetchData();
    }, []);

    const AddCommentOnEnter = (props) => {
        if (props.key === 'Enter') {
            props.preventDefault();
            setAddComment(props.target.value);
        }

        // const AddNewPost = (e) => {
        //     setAddNewPost(e.target.value)

        // }
    }
    return (
        <div>
            <PostHeader />
            <div className={classes.main}>
                {user.map((post) =>
                    <section key={post.body}>
                        <h1 className={classes.name}>{postda.name}</h1>
                        <img src="../pc.svg" id={classes.edimg}></img>
                        <h4 className={classes.userName}>{`@ ${postda.username}`}</h4>
                        <p id={post.id} className={classes.postStyle}>{post.body}</p>
                        <hr />
                        <textarea type='text' id={classes.textarea1} placeholder="Add Comment...." onKeyDown={AddCommentOnEnter}></textarea>
                    </section>
                )}
                <AddComment AddComment={AddComment} />
            </div>
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <div className="poedit">
                        <textarea id="textpo" placeholder="Add post ....."></textarea>
                    </div>
                    <div className="bb">
                        <input id="endpo" type="button" value="post" />
                    </div>
                </div>
            </div>
            <div className={classes.posbut}>
                <hr />
                <button id="firstpo">+</button>
            </div>
        </div>
    )
}

export default UserPost;