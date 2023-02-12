import React from "react";
import classes from './UserPost.module.css'


const AddCommentForPost = ({ comment, name, userName }) => {
    return (
        <section>
            <h1 className={classes.name}>{name}</h1>
            <img src="../pc.svg" id={classes.edimg}></img>
            <h4 className={classes.userName}>{`@ ${userName}`}</h4>
            <p className={classes.postStyle}>{comment}</p>
        </section>
    )
}
export default AddCommentForPost;