import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {
 //You can destructure the props directly on the function
  //const blogs = props.blogs; <-- we dont need these anymore because the props are automatically decoconstructed
  // const title = props.title;

  // functions that change the state can be passed on as props BUT the function itself should be placed in the component that contains the state so that it can change the state direcrtly
  return ( 
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog)=> ( 
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
          <h2> { blog.title }</h2>
          <p> Written by { blog.author }</p>
          </Link>
        </div>
      ))}
    </div>
   );
}
 
export default BlogList;