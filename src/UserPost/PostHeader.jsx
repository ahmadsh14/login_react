import React from "react";
import classes from './UserPost.module.css'
const PostHeader = () => {
    
    return (
        <div className={classes.main}>
            <h6 id={classes.top}>Discover</h6>
            <h4 id={classes.what}>What's new today</h4>
        </div>

    )
}
export default PostHeader;