import React from "react";
import classes from './UserPost.module.css'

const AddNewPostTest = ({ nameAddPost, userNameAddPost, bodyPost }) => {

    return (
        <section>
            <h1 className={classes.name}>{nameAddPost}</h1>
            <img src="../pc.svg" id={classes.edimg}></img>
            <h4 className={classes.userName}>{`@ ${userNameAddPost}`}</h4>
            <p  className={classes.postStyle}>{bodyPost}</p>
            <hr />
            <textarea type='text' id={classes.textarea1} placeholder="Add Comment...."></textarea>
        </section>
    )
}
export default AddNewPostTest;