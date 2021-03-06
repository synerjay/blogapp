import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('mario')
  const [isPending, setIsPending] = useState(false)
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault(); // <-- prevents the browser to refresh when the submit button is clicked
    const blog = { title, body, author } //<-- make an object that saves all the blog elements together to be saved into the db
    
      setIsPending(true); //<-- set to true because the it is pending fetch request to server
    // make a post request by using 'fetch' here:
      fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(blog)
      }).then(()=> {
        console.log('new blog added');
        setIsPending(false) // <-- once the blog is added isPending is set to false because it is not pending anymore
        // history.go(-1) <-- the -1 redirects user to the previous page
        history.push('/') // <-- redirects users to the '/' root which is the home page
      })
  }

  //onSubmit={} on form tags to submit the fields. handleSubmit function hannles all the changed states 
  // onChange={} for the fields to change the state and the fields together
  // value= on tags links the fields to the appropriate state of the component

  return ( 
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title: </label>
        <input 
          type="text" 
          required
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
        />
        <label>Blog body: </label>
        <textarea  
          required
          value={body}
          onChange={(e)=>setBody(e.target.value)}
        ></textarea>
        <label>Blog author</label>
        <select
          value={author}
          onChange={(e)=> setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
       {!isPending && <button>Add blog</button> }
       {isPending && <button disabled>Adding blog....</button> }
      </form>
    
    </div>
   );
}
 
export default Create;