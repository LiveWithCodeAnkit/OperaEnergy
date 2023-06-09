import React from "react";

const BlogCard = (props) => {
  return (
    <>
   
      <div className="blog-card">
        <img src={props.image} alt={props.id} key={props.id} />
        <div className="blog-card-inside">
          <label>{props.date}</label>
          <span>{props.tittle}</span>
          <p>{props.describtion}</p>
          <a href={props.path}>Read More</a>
        </div>
      </div>
     
    </>
  );
};

export default BlogCard;
