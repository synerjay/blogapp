const BlogList = ({blogs, title}) => {
 //You can destructure the props directly on the function
  //const blogs = props.blogs;
  // const title = props.title;

  // functions that change the state can be passed on as props BUT the function itself should be placed in the component that contains the state so that it can change the state direcrtly
  return ( 
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog)=> ( 
        <div className="blog-preview" key={blog.id}>
          <h2> { blog.title }</h2>
          <p> Written by { blog.author }</p>
        </div>
      ))}
    </div>
   );
}
 
export default BlogList;