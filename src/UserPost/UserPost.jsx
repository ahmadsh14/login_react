import React, { useEffect, useState } from "react";
import PostHeader from "./PostHeader";
import axios from "axios";
import classes from './UserPost.module.css'
import AddCommentForPost from "./AddComment";
import { useNavigate } from "react-router-dom";
import AddNewPostTest from "./AddNewPostTest";
const UserPost = () => {
    let js = localStorage.getItem("users");
    let postda = JSON.parse(js)

    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const [posts, setPosts] = useState([]);
    const [AddComment, setAddComment] = useState('');
    const [PostClick, setPostClick] = useState('');
    const [AddPost, setAddNewPost] = useState('');
    const [selectedPost, setSelectedPost] = useState(null);
    const [show, setShow] = useState(false);


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

    const AddCommentOnEnter = (props, post) => {
        if (props.key === 'Enter') {
            props.preventDefault();
            setAddComment(props.target.value);
            setSelectedPost(post);
            console.log('post: ', post);

        }
    }

    const ClickPostComment = (post) => {
        setPostClick(post)
        navigate('/PostComment', { state: { post } });
    }

    const AddNewPost = (event) => {
        setAddNewPost(event.target.value)

    }

    const AddNewPostOnClick = () => {
        setPosts([AddPost, ...posts]);
        setAddNewPost('');
    }
    const handleClick = () => {
        setShow(!show);
    };
    return (
        <div>
            <PostHeader headerTitle="Discover" subtitle="What's new today" />

            <div className={classes.main}>

                {posts.map((add, index) => (
                    <AddNewPostTest key={index} bodyPost={add} nameAddPost={postda.name} userNameAddPost={postda.username} />
                ))}

                {user.map((post) =>
                    <section key={post.body}>
                        <img src="../pc.svg" id={classes.edimg}></img>
                        <h1 className={classes.name}>{postda.name}</h1>
                        <h4 className={classes.userName}>{`@ ${postda.username}`}</h4>
                        <p id={post.id} className={classes.postStyle} onClick={() => ClickPostComment(post)} >{post.body}</p>
                        <hr />
                        {selectedPost === post ? <AddCommentForPost comment={AddComment} name={postda.name} userName={postda.username} /> : null}
                        <textarea type='text' id={classes.textarea1} placeholder="Add Comment...." onKeyDown={(event) => AddCommentOnEnter(event, post)}></textarea>
                    </section>
                )}
            </div>
            {show && (
                <div id="myModal" className="modal">
                    <div className="modal-content">
                        <div className="poedit">
                            <textarea id="textpo" placeholder="Add post ....." onChange={AddNewPost} value={AddPost}></textarea>
                        </div>
                        <div className="bb">
                            <input id="endpo" type="button" value="post" onClick={AddNewPostOnClick} />
                        </div>
                    </div>
                </div>
            )}
            <div className={classes.posbut}>
                <hr />
                <button id="firstpo" onClick={handleClick}>+</button>
            </div>
        </div>
    )
}

export default UserPost;