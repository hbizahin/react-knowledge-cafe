import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";
const Blogs = ({handleAddToBookmark}) => {
    const [blogs, setBlogs] = useState([]); 

    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3 pt-2">
            {
                blogs.map(blog =><Blog
                     key={blog.id} 
                     blog={blog}
                     handleAddToBookmark={handleAddToBookmark}
                ></Blog>)
            }
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark : PropTypes.func
}
export default Blogs;