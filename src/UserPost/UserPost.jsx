import React, { useEffect, useState } from "react";
import PostHeader from "./PostHeader";
import axios from "axios";
import classes from './UserPost.module.css'

let js = localStorage.getItem("users");
let postda = JSON.parse(js)
const UserPost = () => {

    const [user, setUser] = useState([]);
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

    return (
        <div>
            <PostHeader />
            {user.map((post) =>
                <section>
                    <h1>{postda.name}</h1>
                    <img src="pc.svg"></img>
                    <h4>{`@ ${postda.username}`}</h4>
                    <p>{post.body}</p>
                    <hr />
                    <textarea></textarea>
                </section>
            )}
            <div id="myModal" class="modal">
                <div class="modal-content">
                    <div class="poedit">
                        <textarea id="textpo" placeholder="Add post ....."></textarea>
                    </div>
                    <div class="bb">
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