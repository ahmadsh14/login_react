import React from "react";

const AddComment = (props) => {
    const AddComment = props.AddComment;
    console.log('props: ', props);

return(
    <section>
        <h1>{props.name}</h1>
        <img></img>
        <h4>{props.username}</h4>
        <p></p>
    </section>
);



}

export default AddComment;