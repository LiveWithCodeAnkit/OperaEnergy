import React from "react";
import Slider from "react-slick";
import { BlogDetails } from "../constant/BlogDetails";
import BlogCard from "./BlogCard";
const OurLatestBlog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="our-blog-page">
        <div className="turbine-page-smart-logo">
          <img src="workingLogo.png" alt="working logo" />
          <span className="working-page-span"> OUR BLOG</span>
        </div>

        <label className="our-blog-lable">
          Our Latest <b>Blog</b>
        </label>

        {/* {BlogDetails.map((contents) => (
            <BlogCard
                id={contents.id}
                image={contents.image}
                date={contents.date}
                tittle={contents.tittle}
                describtion={contents.describtion}
                path={contents.path}
            />
        ))} */}

        {/* <Slider {...settings}> */}
          <div className="blog-card-new">
            <BlogCard
              image="s1.png"
              date="21, January, 2023"
              tittle="Lorem Ipsum simply"
              describtion="It is a long established fact that a reader will be diable content of a page. "
              path="#"
            />
         
          <BlogCard
              image="s2.png"
              date="21, January, 2023"
              tittle="Hydrogen Energy"
              describtion="It is a long established fact that a reader will be diable content of a page. "
              path="#"
            />
          </div>
         
        {/* </Slider> */}
        <button ><label>Show More</label></button>
      </div>

    </>
  );
};

export default OurLatestBlog;
