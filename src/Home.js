
import BlogList from "./BlogList";
import useFetch from "./useFetch"; // import custom hook

const Home = () => {
  //Deconstructing array variable and a function which we can name whatever usually with a prefix "set"
  // useState is called a HOOK. So it can hook to an event listener and changes the state of the component
  
  // useFetch() is a Custom hook: it is used so that it can be used in any component so states and useEffect hooks are reused whenever an API fetching is needed

  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

  // Props are data passed on from the parent component to the children components
  // components are be reusable with the same props but data can be manipulated through array methods

  //useEffect is another React hook (e.g. useState) that fires off whenever there is a change in render. This is useful when you have to fetch data whenever the component state is changed
  /*  useEffect(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
          if(!res.ok) {
            throw Error('could not fetch the data for that resource');
          }
          return res.json()
        })
        .then((data)=> {
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err => {
          setIsPending(false);
          setError(err.message);
          console.log(err.message);
        })
    }, []);*/ //<-- This dependency array is important because this array tells useEffect hook to only run for a certain render changes and NOT every time.
// the name variable and its state is now a dependency in its array, so useEffect will only run IF the name state is changed
// Logical templating in reac { variable && <html> } is used for aynschronous API. It means if the variable is true then the right side of && is fired off. 
    // If we dont use the { variable && <html> } it will give an error because it takes some time to get the data and the html is already firing off.
      // So it's sort of like checkpoint. If data is available, then render html. 
  return ( 
    <div className="home">
    { error && <div> {error} </div>}
    {isPending && <div>Loading...</div> }
     {blogs && <BlogList blogs={blogs} title="All blogs!" /> }
    {/*} <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" /> */}
   
    </div>
   );
}
 
export default Home;