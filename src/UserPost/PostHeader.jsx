import React from "react";
import classes from './UserPost.module.css'
const PostHeader = (props) => {

    return (
        <div className={classes.main}>
            <h6 id={classes.top}>{props.headerTitle}</h6>
            <h4 id={classes.what}>{props.subtitle}</h4>
        </div>

    )
}
export default PostHeader;